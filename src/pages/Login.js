import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../store/actions.js/actions";
import "./page.css";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [formData, setformData] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      auth.user.name === formData.name &&
      auth.user.password === formData.password
    ) {
      dispatch(login(formData));
      navigate("/list");
    } else {
      toast("please Enter Right Email Or Password");
    }
  };
  return (
    <div className="pagecontainer">
      <div className="loginformcontainer">
        <input
          className="loginforminput"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          type="text"
          placeholder="UserName"
        />
        <input
          className="loginforminput"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <ToastContainer />
        <button className="formsubmitbutton" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
