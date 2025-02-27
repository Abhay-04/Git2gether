import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[75vh] mt-20">
      <div className="flex flex-col gap-3 w-[20%]  mx-auto px-6 py-8  rounded-md border">
        <div>
          <h1 className=" text-xl font-extrabold">Login</h1>
          <h1 className=" text-sm opacity-70 mt-2 font-semibold">
            Enter your email below to login to your account
          </h1>
        </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            type="text"
            placeholder="m@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label font-semibold">
            <span className="label-text">Password</span>
            <Link className="label-text-alt">Forgot your password?</Link>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-active btn-primary">Login</button>
        <button className="btn btn-outline btn-primary">Login with Google</button>

        <h1 className="text-center font-semibold">Don't have an account?<Link className="ml-1 underline">Sign up</Link></h1>
      </div>
    </div>
  );
};

export default Login;
