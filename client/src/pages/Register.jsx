import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export const Register = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    if (displayName === "") {
      toast.error("Name is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else if (file === undefined) {
      toast.error("Please Select Image", {
        position: "top-center",
      });
    } else {
      try {
        //Create user
        toast.loading("Loading...");
        const res = await createUserWithEmailAndPassword(auth, email, password);
       
        //Create a unique image name;
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);

        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
             
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/login");
            } catch (error) {
              console.log(error);
              setErr(true);
             
            }
          });
          toast.dismiss();
        });
        toast.success("Registration successful");
      } catch (error) {
        setErr(true);
      }
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Real Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input  type="text" placeholder="display name" />
          <input  type="email" placeholder="email" />
          <input  type="password" placeholder="password" />
          <input  style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <ImageIcon />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
