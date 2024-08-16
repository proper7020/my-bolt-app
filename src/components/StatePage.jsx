
import React, { useState } from "react";
import Impute from "./shared/Impute";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const StatePage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div
        className="d-flex w-100 justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form className="w-50 rounded align-items-center">
          <Impute placeholder="Email" type="text" />
          <div className="position-relative">
             <Impute
                 placeholder="Password"
                 type={showPassword === true ? "text" : "password"}
                
            
    
              />
            <div className="position-absolute"> 
                   <FaRegEye size={"1em"} />
                   <FaRegEyeSlash size={"1em"} />
             </div> 
          </div>
        </form>
      </div>
    </>
  );
};

export default StatePage;







