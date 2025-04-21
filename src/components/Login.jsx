import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(null);
  const [userCreated, setUserCreated] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const firstName = useRef(null);
  const lastName = useRef(null);

  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { email: email.current.value, password: password.current.value },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          password: password.current.value,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.user));
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  return (
    <div className="min-h-[75vh] my-20 mx-4 items-start  flex justify-between">
      <div className="flex flex-col gap-3 mx-auto px-6 py-8  rounded-md border">
        <div>
          <h1 className=" text-xl font-extrabold">
            {!isLoginPage ? "Login" : "Signup"}
          </h1>
          <h1 className=" text-sm opacity-70 mt-2 font-semibold">
            {!isLoginPage
              ? "Enter your email below to login to your account"
              : "Enter your details below to create your account"}
          </h1>
        </div>
        {isLoginPage && (
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">First Name</span>
            </div>
            <input
              ref={firstName}
              type="text"
              placeholder="Joe "
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        )}
        {isLoginPage && (
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Last Name</span>
            </div>
            <input
              ref={lastName}
              type="text"
              placeholder="Smith"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        )}

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            ref={email}
            defaultValue={"guest@gmail.com"}
            type="email"
            placeholder="m@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label font-semibold">
            <span className="label-text">Password</span>
            {!isLoginPage && (
              <Link className="label-text-alt">Forgot your password?</Link>
            )}
          </div>
          <div className="relative w-full max-w-xs">
            <input
              ref={password}
              defaultValue="Guest@123"
              type={!showPassword ? "password" : "text"}
              placeholder="Enter your password"
              className="input input-bordered w-full pr-16"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
            >
              {!showPassword ? (
                <i className="ri-eye-close-fill"></i>
              ) : (
                <i className="ri-eye-fill"></i>
              )}
            </span>
          </div>
        </label>
        <button
          onClick={!isLoginPage ? handleSignIn : handleSignUp}
          className="btn btn-active btn-primary"
        >
          {isLoginPage ? "Signup" : "Login"}
        </button>
        {!isLoginPage && (
          <button className="btn btn-outline btn-primary">
            Login with Google
          </button>
        )}
        <h1 className="text-center font-semibold">
          {isLoginPage ? "Already have an account?" : "Don't have an account?"}
          <Link
            onClick={() => setIsLoginPage(!isLoginPage)}
            className="ml-1 underline"
          >
            {isLoginPage ? "Login" : "Signup"}
          </Link>
        </h1>
      </div>
      {isErrorMessage && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <span>{isErrorMessage.toUpperCase()}</span>
          </div>
        </div>
      )}
      {userCreated && (
        <div className="toast toast-end">
          <div className="alert alert-success ">
            <span>{userCreated}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
