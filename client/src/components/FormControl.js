import React, { useState } from "react";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

const FormControl = () => {
    const [currentForm, setCurrentForm] = useState(true);

    const logInChange = (event) => {
        if(event){
            setCurrentForm(false)
        }
    }

    const registerChange = (event) => {
        if(event){
            setCurrentForm(true)
        }
    }

    return(
        <div>
            {(currentForm) ? (
                <LogIn onChange={logInChange}/>
            ) : (
                <SignUp onChange={registerChange}/>
            )}
        </div>
    )
}

export default FormControl;