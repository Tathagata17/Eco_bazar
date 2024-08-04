import { useState, useEffect } from 'react';

export function useValidateCheck() {
   
    const [formdatastyle, setformdatastyle] = useState({
        Firstname: { style: { borderColor: "#d1d5db" }, error: "" },
        Lastname: { style: { borderColor: "#d1d5db" }, error: "" },
        Email: { style: { borderColor: "#d1d5db" }, error: "" },
        Phoneno: { style: { borderColor: "#d1d5db" }, error: "" },
        Password: { style: { borderColor: "#d1d5db" }, error: "" },
    });

    const validate=(data)=>{
        let valid = true;
        let updatedFormdatastyle = { ...formdatastyle };

        const { Firstname, Lastname, Email, Phoneno, Password } = data;

        if (Firstname.length <= 0) {
            updatedFormdatastyle.Firstname = {
                style: { borderColor: "red" },
                error: "First Name Required",
            };
            valid = false;
        } else {
            updatedFormdatastyle.Firstname = { style: { borderColor: "#d1d5db" }, error: "" };
        }

        if (Lastname.length <= 0) {
            updatedFormdatastyle.Lastname = {
                style: { borderColor: "red" },
                error: "Last Name Required",
            };
            valid = false;
        } else {
            updatedFormdatastyle.Lastname = { style: { borderColor: "#d1d5db" }, error: "" };
        }

        if (Email.length <= 0) {
            updatedFormdatastyle.Email = {
                style: { borderColor: "red" },
                error: "Email Required",
            };
            valid = false;
        } else {
            updatedFormdatastyle.Email = { style: { borderColor: "#d1d5db" }, error: "" };
        }

        if (Phoneno === null || Phoneno === "") {
            updatedFormdatastyle.Phoneno = {
                style: { borderColor: "red" },
                error: "Phone No Required",
            }
            valid = false;
        }
           else if(isNaN(Phoneno)||(Phoneno.toString().length < 10)||(Phoneno.toString().length>10))
            {
                updatedFormdatastyle.Phoneno = {
                    style: { borderColor: "red" },
                    error: "Not valid PhoneNo",
                };
                valid = false;
            }
         else {
            updatedFormdatastyle.Phoneno = { style: { borderColor: "#d1d5db" }, error: "" };
        }

        if (Password.length <= 0) {
            updatedFormdatastyle.Password = {
                style: { borderColor: "red" },
                error: "Password Required",
            };
            valid = false;
        }
        else if(Password.length<=3)
        {
            updatedFormdatastyle.Password = {
                style: { borderColor: "red" },
                error: "Password too short",
            };
            valid=false;
        }
        else if(Password.length>=15)
            {
                updatedFormdatastyle.Password = {
                    style: { borderColor: "red" },
                    error: "Password too long",
                };
                valid=false;
            }
         else {
            updatedFormdatastyle.Password = { style: { borderColor: "#d1d5db" }, error: "" };
        }
       return [updatedFormdatastyle,valid]
    }

    return {validate};
}

export default useValidateCheck