// import { CircularProgress } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth_service";
import "./styles/login.css";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const authService = new AuthService();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={handleSubmit(async (data) => {
          setLoading(true);
          await authService
            .emailLogin(data.email, data.password)
            .then((user) => {
              console.log(user);
              setLoading(false);
              navigate("/", {
                replace: true,
              });
            })
            .catch((e) => {
              setLoading(false);
              console.log(e);
              alert(e);
            });
        })}
      >
        <p>SIGN IN</p>
        <div className="login__form_textfield_item">
          <label>Email</label>
          <input
            {...register("email", { required: "email is required" })}
            type="email"
            placeholder="abc@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="login__form_textfield_item">
          <label>Password</label>
          <input
            {...register("password", {
              required: "password is required",
            })}
            type="password"
            placeholder="very_strong"
            id="password"
            name="password"
          />
        </div>

        {loading ? (
          <div className="login__form_loading_indicator">
            <CircularProgress
              style={{
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
            />
          </div>
        ) : (
          <input type="submit" placeholder="Sign In" />
        )}
      </form>
    </div>
  );
}

export default LoginPage;
