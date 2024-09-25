import React, { useState } from "react";
import "./loginform.scss";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../featurs/user/userSlice";
const LoginForm = () => {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [error, setError] = useState({
    phone: "",
  });
  const user = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  function handelChangeInput(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "phone") {
      const regex = /^[0-9]*$/;
      if (!regex.test(value)) {
        setError({
          ...error,
          phone: "لطفا شماره درست وارد کنید",
        });
        return;
      } else {
        setError({
          ...error,
          phone: "",
        });
      }
    }
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!error.phone) {
      dispatch(addUser(formData));

      setFormData({
        phone: "",
        password: "",
      });
    }
    alert("خوش آمدید");
  }
  return (
    <div className="wrapper">
      <div className="form-box">
        <form action="" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-box">
            <input
              name="phone"
              className="input"
              type="text"
              placeholder="موبایل"
              required
              value={formData.phone}
              onChange={handelChangeInput}
            />
            <PhoneAndroidIcon className="icon" />
            {error.phone && (
              <span style={{ color: "white" }}>{error.phone}</span>
            )}
          </div>
          <div className="input-box">
            <input
              name="password"
              className="input"
              value={formData.password}
              type="password"
              placeholder="پسورد"
              onChange={handelChangeInput}
              required
            />
            <LockOpenIcon className="icon" />
          </div>
          <div className="login">
            <button type="submit" className="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
