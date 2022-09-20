import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Toaster } from "react-hot-toast";
import "./style.scss";

function App() {

  const { currentUser } = useContext(AuthContext);
 
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/">
          <Route index element={ <ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
