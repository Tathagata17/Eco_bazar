import React, { useState } from "react";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { NavLink, useNavigate} from "react-router-dom";
import {useValidateCheck}  from "../../Helpers/Formvalidator";
import UseAxios from "../../Hooks/UseAxios"
import axios from "axios";
import Message from "../Message/Message";

function Signup() {
  const {validate} = useValidateCheck();
  const navigation =useNavigate();
  const {fetchurl}=UseAxios()
  const [disabledbtn,setdisablebtn]=useState(false);
  const [messageshow,setmessageshow]=useState(false);
  const [formdata, setformdata] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phoneno: null,
    Password: "",
  });
  const [formdatastyle, setformdatastyle] = useState({
    Firstname: { style: { bordercolor: "#d1d5db" }, error: "" },
    Lastname: { style: { bordercolor: "#d1d5db" }, error: "" },
    Email: { style: { bordercolor: "#d1d5db" }, error: "" },
    Phoneno: { style: { bordercolor: "#d1d5db" }, error: "" },
    Password: { style: { bordercolor: "#d1d5db" }, error: "" },
  });
  const formvalidation = async(e) => {
    const [style,isValid] =validate(formdata);
    setformdatastyle(style);
    if (isValid) {  
    console.log("Form is valid. Proceed with submission.");
    setdisablebtn(true)
    const response=await fetchurl("http://localhost:4000/usersignup",'POST',formdata);
    setdisablebtn(false);
    ScrollToTop();
    showmessage();
    setTimeout(() => {
      navigation("/userlogin")
    }, 3000);
    console.log(response.status);
    } 
  };
  const handleinput = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const ScrollToTop=() =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
const showmessage=()=>{
  setmessageshow(true);
  setTimeout(()=>{setmessageshow(false)},3000);
} 
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
        <form>
          <div className="text-2xl font-semibold mb-8 text-center">
            Create Account
          </div>
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="flex gap-4 w-80">
              <div>
                <input
                  type="text"
                  name="Firstname"
                  placeholder="First Name"
                  className="border border-gray-300 rounded p-2 w-full outline-none"
                  value={formdata.Firstname}
                  onChange={handleinput}
                  style={formdatastyle.Firstname.style}
                />
                <span className="mt-1 text-sm text-red-600">
                  {formdatastyle.Firstname.error}
                </span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Lastname"
                  name="Lastname"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none"
                  value={formdata.Lastname}
                  onChange={handleinput}
                  style={formdatastyle.Lastname.style}
                />
                <span className="mt-1 text-sm text-red-600">
                  {formdatastyle.Lastname.error}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="border border-gray-300 rounded p-2 w-80 focus:outline-none"
                value={formdata.Email}
                onChange={handleinput}
                style={formdatastyle.Email.style}
              />
              <span className="mt-1 text-sm text-red-600">
                {formdatastyle.Email.error}
              </span>
            </div>
            <div className="flex flex-col">
            <input
              type="tel"
              placeholder="Phone No"
              name="Phoneno"
              className="border border-gray-300 rounded p-2 w-80 focus:outline-none"
              onChange={handleinput}
              value={formdata.Phoneno}
              style={formdatastyle.Phoneno.style}
            />
            <span className="mt-1 text-sm text-red-600">
                {formdatastyle.Phoneno.error}
              </span>
            </div>
            <div>
            <div className="relative w-80">
              <input
                type={passwordVisible ? "text" : "password"}
                name="Password"
                placeholder="Password"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none"
                value={formdata.Password}
                onChange={handleinput}
                style={formdatastyle.Password.style}
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
            <span className="mt-1 text-sm text-red-600">
                {formdatastyle.Password.error}
              </span>
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
            disabled={disabledbtn}
              type="submit"
              className="hover:opacity-90 w-full py-3 rounded"
              style={{
                backgroundColor: "#00B207",
                color: "white",
              }}
              onClick={(e) => {
                e.preventDefault();
                if (formvalidation(e)) {
                }
              }}
            >
              Create Account
            </button>
          </div>
          <div className="mt-4 text-sm text-center text-gray-600">
            Already have an account?
            <NavLink to="/userlogin" className="text-blue-500 font-semibold">
              Login
            </NavLink>
          </div>
        </form>
      </div>
      {messageshow&&<Message/>}
    </div>
  );
}

export default Signup;
