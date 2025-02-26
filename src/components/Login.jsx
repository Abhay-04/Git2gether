import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoginPage , setIsLoginPage] = useState(false)
  return (
    <div className="min-h-[75vh] mt-20">
      <div className="flex flex-col gap-3 w-[20%]  mx-auto px-6 py-8  rounded-md border">
        <div>
          <h1 className=" text-xl font-extrabold">{!isLoginPage ? "Login" : "Signup"}</h1>
          <h1 className=" text-sm opacity-70 mt-2 font-semibold">
            { !isLoginPage ? "Enter your email below to login to your account" : "Enter your details below to create your account"}
          </h1>
        </div>
      { isLoginPage && <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input
            type="text"
            placeholder="Joe Smith"
            className="input input-bordered w-full max-w-xs"
          />
        </label>}
      { isLoginPage && <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Username</span>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
          />
        </label>}

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            type="email"
            placeholder="m@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label font-semibold">
            <span className="label-text">Password</span>
            {!isLoginPage && <Link className="label-text-alt">Forgot your password?</Link>}
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-active btn-primary">{isLoginPage ? "Signup" : "Login"}</button>
       { !isLoginPage && <button className="btn btn-outline btn-primary">Login with Google</button>
}
        <h1 className="text-center font-semibold">{ isLoginPage ? "Already have an account?" :  "Don't have an account?"}<Link onClick={()=> setIsLoginPage(!isLoginPage)} className="ml-1 underline">{isLoginPage ? "Login" : "Signup"}</Link></h1>
      </div>
    </div>
  );
};

export default Login;
