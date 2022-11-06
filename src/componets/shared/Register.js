import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Register = () => {


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password)
    console.log('=================');
  };

  if(user){
    console.log(user,'firebase');
  }

  return (
    <div className="flex h-auto  justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-black">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  maxLength: {
                    value: 20, 
                    message: 'must be 20 char'
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "maxLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* email  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                  maxLength: {
                    value: 25, 
                    message: 'must be 20 char'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "maxLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* password  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*\W)/,
                    message: "At least one digit,",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* {setError} */}
            <input
              className="btn w-full max-w-xs btn-success capitalize text-black "
              type="submit"
              value="Login"
            />
          </form>
          <p className="mt-3 text-black">
            Create A new Account
            <Link
              className="btn btn-xs mx-2 text-accent capitalize"
              to="/Login"
            >
              Login
            </Link>
          </p>
          <div class="divider text-black">OR</div>
          {/* <button onClick={() => signInWithGoogle()} class="btn btn-success w-20 mx-auto  text-2xl">
        <i class="fa-brands fa-google"></i>
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
