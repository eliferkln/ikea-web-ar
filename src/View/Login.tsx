import React from "react";
import { IProps } from "./IProps";

const Login: React.FC<IProps> = ({ googleSignIn }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Google Login
        </h2>
        <button
          onClick={googleSignIn}
          className="bg-[#3567b980] w-[200px] rounded-md font-medium mx-auto px-6 py-3 hover:text-[#082b64bd] text-white"
        >
          Login
        </button>
        {/* <button className="bg-[#ff0000] w-[200px] rounded-md font-medium mx-auto px-6 py-3 hover:text-[#ffffff] text-white">
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default Login;
