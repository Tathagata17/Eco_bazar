import React, { useState } from "react";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";
import UseLoginformValidator from '../../Helpers/LoginformValidator'


function Login() {
  const {isvalidlogin}=UseLoginformValidator();
  const [formadata, setformdata] = useState({ Email: "", Password: "" });
  const [error, seterror] = useState({
    Email: { style: { bordercolor: "#d1d5db" }, error: "" },
    Password: { style: { bordercolor: "#d1d5db" }, error: "" },
  });
  
  const handleinput = (e) => {
    setformdata({ ...formadata, [e.target.name]: e.target.value });
  };

  const handlesubmit=()=>{
   const [style,isvalid]= isvalidlogin(formadata)
   seterror(style);
  // console.log(error);
  }

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center font-poppin ">
      <div
        className="flex justify-center mt-40 rounded p-8 flex-col items-center bg-white"
        style={{
          boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
          width: "32rem",
          height: "auto",
        }}
      >
        <div className="text-2xl font-semibold mb-8">Login</div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={formadata.Email}
              onChange={handleinput}
              className="border border-gray-300 rounded p-2 w-80 focus:outline-none"
              style={error.Email.style}
            />
            <span className="mt-1 text-sm text-red-600">{error.Email.error}</span>
          </div>
          <div>
            <div className="relative w-80">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="Password"
                value={formadata.Password}
                onChange={handleinput}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none"
                style={error.Password.style}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <LucideEyeOff className="text-gray-600" size={20} />
                ) : (
                  <LucideEye className="text-gray-600" size={20} />
                )}
              </div>
            </div>
            <span className="mt-1 text-sm text-red-600">{error.Password.error}</span>
          </div>

          <div className="flex items-center w-80">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              Accept all terms & Conditions
            </span>
          </div>
        </div>
        <div className="mt-8 w-80">
          <button
            type="submit"
            onClick={(e)=>{e.preventDefault();
              console.log("clicked");
              handlesubmit(e);
            }}
            className="hover:opacity-90 w-full py-3 rounded"
            style={{
              backgroundColor: "#00B207",
              color: "white",
            }}
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          New to EcoBazar?{" "}
          <NavLink to="/usersignup" className="text-black font-semibold">
            Signup
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
