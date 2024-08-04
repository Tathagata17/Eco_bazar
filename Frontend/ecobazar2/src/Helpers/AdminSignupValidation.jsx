import React, { useState } from "react";

function UseAdminSignupValidation() {
  const [initialform, setinitialform] = useState({
    Firstname: { style: { borderColor: "#d1d5db" }, error: "" },
    Lastname: { style: { borderColor: "#d1d5db" }, error: "" },
    Phoneno: { style: { borderColor: "#d1d5db" }, error: "" },
    Email: { style: { borderColor: "#d1d5db" }, error: "" },
    Address: { style: { borderColor: "#d1d5db" }, error: "" },
    Password: { style: { borderColor: "#d1d5db" }, error: "" },
  });
  const isvalid = (data) => {
    const updatedform = { ...initialform };
    let valid = true;
    const { Firstname, Lastname, Phoneno, Email, Address, Password } = data;
    if (Firstname.length <= 0) {
      updatedform.Firstname = {
        style: { borderColor: "red" },
        error: "First Name Required ",
      };
      valid = false;
    } else {
      updatedform.Firstname = { style: { borderColor: "#d1d5db" }, error: "" };
    }
    if (Lastname.length <= 0) {
      updatedform.Lastname = {
        style: { borderColor: "red" },
        error: "Last Name Required ",
      };
      valid = false;
    } else {
      updatedform.Lastname = { style: { borderColor: "#d1d5db" }, error: "" };
    }
    if (Email.length <= 0) {
      updatedform.Email = {
        style: { borderColor: "red" },
        error: "Email Required ",
      };
      valid = false;
    } else {
      updatedform.Email = { style: { borderColor: "#d1d5db" }, error: "" };
    }
    if (Phoneno === null||Phoneno==="") {
      updatedform.Phoneno = {
        style: { borderColor: "red" },
        error: "Phone Required ",
      };
      valid = false;
    }
    else if(Phoneno.toString().length<10||Phoneno.toString().length>10)
        {
            updatedform.Phoneno = {
                style: { borderColor: "red" },
                error: "Not Valid Phone No ",
              };
              valid = false;  
        } 
    else {
      updatedform.Phoneno = { style: { borderColor: "#d1d5db" }, error: "" };
    }
    if (Address.length<=0) {
        updatedform.Address = {
          style: { borderColor: "red" },
          error: "Address Required",
        };
        valid = false;
      } else {
        updatedform.Address = { style: { borderColor: "#d1d5db" }, error: "" };
      }
      if(Password.length<=0)
      {
        updatedform.Password = {
            style: { borderColor: "red" },
            error: "Password Required",
          };
          valid = false;
      }
      else if(Password.length<=3||Password.length>=10)
      {
        updatedform.Password = {
            style: { borderColor: "red" },
            error: "Password is too Long or Short",
          };
          valid = false;
      }
      else
      {
        updatedform.Password = { style: { borderColor: "#d1d5db" }, error: "" };
      }
    return [updatedform, valid];
  };

  return { isvalid };
}

export default UseAdminSignupValidation;
