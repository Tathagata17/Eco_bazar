import { LucideEye, LucideEyeOff } from "lucide-react";
import React, { useState } from "react";
import UseAdminSignupValidation from "../../Helpers/AdminSignupValidation";

function AdminSignup() {
  const [formdata, setformdata] = useState({
    Firstname: "",
    Lastname: "",
    Phoneno: null,
    Email: "",
    Address: "",
    Password: "",
  });
  const [error, seterror] = useState({
    Firstname: { style: { borderColor: "#d1d5db" }, error: "" },
    Lastname: { style: { borderColor: "#d1d5db" }, error: "" },
    Phoneno: { style: { borderColor: "#d1d5db" }, error: "" },
    Email: { style: { borderColor: "#d1d5db" }, error: "" },
    Address: { style: { borderColor: "#d1d5db" }, error: "" },
    Password: { style: { borderColor: "#d1d5db" }, error: "" },
  });
  const {isvalid}=UseAdminSignupValidation();
  const handleinput=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  const handlesubmit=(e)=>{
    const [style,status]= isvalid(formdata);
    seterror(style);
  }
  const [view, setview] = useState(false);
  const tooglepassword = () => {
    view ? setview(false) : setview(true);
  };
  return (
    <div className="mt-32 flex justify-center items-center font-poppins">
      <form>
        <div
          className="bg-white w-full p-8"
          style={{
            boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            width: "40rem",
            height: "auto",
          }}
        >
          <h1 className="text-slate-700 text-2xl font-bold text-center">
            Admin Signup
          </h1>
          <div className="flex gap-3 justify-center items-center mt-2">
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="Firstname"
                value={formdata.Firstname}
                onChange={handleinput}
                className="border w-full p-2 border-gray-300 outline-none rounded-sm h-8"
                style={error.Firstname.style}
              />
              <span className="text-sm text-red-600">{error.Firstname.error}</span>
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="Lastname"
                onChange={handleinput}
                value={formdata.Lastname}
                placeholder="Last Name"
                className="border w-full p-2 border-gray-300 outline-none rounded-sm h-8"
                style={error.Lastname.style}
              />
              <span className="text-sm text-red-600">{error.Lastname.error}</span>
            </div>
          </div>
          <div className="flex gap-1 w-full mt-4">
            <div className="flex flex-col w-1/3">
              <label>Phone No</label>
              <input
                type="tel"
                name="Phoneno"
                onChange={handleinput}
                value={formdata.Phoneno}
                placeholder="PhoneNo"
                className="border w-full p-2 border-gray-300 outline-none rounded-sm h-8"
                style={error.Phoneno.style}
              />
              <span className="text-sm text-red-600">{error.Phoneno.error}</span>
            </div>
            <div className="w-full">
              <label>Email</label>
              <input
                type="email"
                name="Email"
                value={formdata.Email}
                onChange={handleinput}
                placeholder="Email"
                className="border w-full p-2 border-gray-300 outline-none rounded-sm h-8"
                style={error.Email.style}
              />
              <span className="text-sm text-red-600">{error.Email.error}</span>
            </div>
          </div>
          <div className="mt-4">
            <label>Address</label>
            <input
              type="text"
              name="Address"
              value={formdata.Address}
              placeholder="Adresss"
              onChange={handleinput}
              className="border w-full p-2 border-gray-300 outline-none rounded-sm h-8"
              style={error.Address.style}
            />
            <span className="text-sm text-red-600">{error.Address.error}</span>
          </div>
          <div className="mt-4">
            <label>Password</label>
            <div className="flex justify-center items-center">
              <input
                type={view ? "text" : "password"}
                placeholder="Password"
                name="Password"
                value={formdata.Password}
                onChange={handleinput}
                className="border w-full p-2 border-gray-300 outline-none rounded-sm h-8"
                style={error.Password.style}
              />
              <p
                onClick={tooglepassword}
                className="border border-gray-300 h-8 items-center justify-center flex"
                style={error.Password.style}
              >
                {view ? <LucideEyeOff /> : <LucideEye />}
              </p>
            </div>
            <span className="text-sm text-red-600">{error.Password.error}</span>
          </div>
          <div className="w-full mt-2 flex justify-center items-center">
            <button
              type="submit"
              className="hover:opacity-80 h-10 w-3/4 py-1"
              style={{
                backgroundColor: "#00B207",
                color: "white",
                borderRadius: "100rem",
              }}
              onClick={(e)=>{e.preventDefault()
                handlesubmit(e)}}
            >
              Create Account
            </button>
          </div>
          <div className="mt-3">
        <p className="text-center">Already a seller?<a href="/Admin/AdminLogin" className="font-bold">Login!</a></p>
      </div>
        </div>
      </form>
    </div>
  );
}

export default AdminSignup;
