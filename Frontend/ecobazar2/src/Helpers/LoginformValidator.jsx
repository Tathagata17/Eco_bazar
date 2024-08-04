import React, { useState } from 'react';

const UseLoginformValidator = () => {
  const [initialform, setinitilaform] = useState({
    Email: { style: { borderColor: "#d1d5db" }, error: "" },
    Password: { style: { borderColor: "#d1d5db" }, error: "" },
  });

  const isvalidlogin = (data) => {
    const { Email, Password } = data;
    const updatedform = { ...initialform };
    let isvalid = true;

    if (Email.length <= 0) {
      updatedform.Email = {
        style: { borderColor: "red" },
        error: "Email Required",
      };
      isvalid = false;
    } else {
      updatedform.Email = {
        style: { borderColor: "#d1d5db" },
        error: "",
      };
    }

    if (Password.length <= 0) {
      updatedform.Password = {
        style: { borderColor: "red" },
        error: "Password Required",
      };
      isvalid = false;
    }
    else if(Password.length<=3||Password.length>10)
    {
      updatedform.Password={
        style:{borderColor:"red"},
        error:"Password is too Short or Long"
      }
      isvalid=false;
    } 
    else {
      updatedform.Password = {
        style: { borderColor: "#d1d5db" },
        error: "",
      };
    }

    // Update the state with the new form styles and errors
    setinitilaform(updatedform);

    // Return the updated form styles and the validity
    return [updatedform, isvalid];
  };

  return { isvalidlogin };
};

export default UseLoginformValidator;
