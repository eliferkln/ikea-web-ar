import React from "react";
import { IProps } from "./IProps";
import { FcGoogle } from "react-icons/fc";

const Login: React.FC<IProps> = ({ googleSignIn }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#3567b980]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-8 ">
        <img
          alt=""
          src="/assets/logo.png"
          className="h-[130px] w-[350px] cursor-pointer "
        />
        <div className="border border-[#6f89b45e] flex flex-col items-center gap-8 p-20 rounded-md bg-[#fcd500] ">
          <h2 className="text-2xl font-bold text-center mb-2 text-[#0c2857cc]">
            Google Login
          </h2>
          <div className="flex items-center justify-center gap-4 bg-[#0c2857cc] w-[200px] rounded-md font-medium mx-auto px-2 py-3 ">
            <FcGoogle size={30} />
            <button
              onClick={googleSignIn}
              className=" hover:text-[#fcd500] text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
