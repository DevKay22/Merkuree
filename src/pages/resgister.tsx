// import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/register.css";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import AuthService from "../services/auth_service";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

function RegisterPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const authService = new AuthService();
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <div className="register">
      <form
        className="register__form"
        onSubmit={handleSubmit(async (data) => {
          await authService
            .emailSignUp(data.email, data.password)
            .then(async (userCredentials) => {
              console.log(userCredentials.user);
              await authService
                .updateProfile(userCredentials.user, data.name)
                .then(() => {
                  setLoading(false);
                  navigate("/", {
                    replace: true,
                  });
                })
                .catch((error) => {
                  setLoading(false);
                  alert(error);
                });
            })
            .catch((e) => {
              setLoading(false);
              console.log(e);
              alert(e);
            });
        })}
      >
        <p>SIGN UP</p>
        <div className="register__form_textfield_item">
          <label>Name</label>
          <input
            {...register("name", { required: "A valid name is required." })}
            type="text"
            placeholder="Mike Tyson"
            id="name"
            name="name"
          />
        </div>
        <div className="register__form_textfield_item">
          <label>Email</label>
          <input
            {...register("email", { required: "email is required" })}
            type="email"
            placeholder="abc@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <div className="register__form_textfield_item">
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
          <div className="register__form_loading_indicator">
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

export default RegisterPage;
