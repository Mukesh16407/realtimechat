import React from 'react';
import ImageIcon from '@mui/icons-material/Image';

export const Register = () => {
  return (
    <div className="formContainer">
        <div className='formWrapper'>
        <span className="logo">Real Chat</span>
        <span className="title">Register</span>
        <form>
            <input required type="text" placeholder="display name"/>
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <input required style={{display:"none"}} type="file" id="file" />
            <label htmlFor='file'>
            <ImageIcon/>
            <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
          <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
