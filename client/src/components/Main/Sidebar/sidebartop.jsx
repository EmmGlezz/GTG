import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

function SidebarTop(){
    const navigate = useNavigate();
    const handleClick = () => navigate("/main");

    return(
    <div className="sideTop">
    <img src={logo} alt="logo" width={"150px"} height={"100px"} onClick={handleClick}/>
    
    
    
    </div>
    )
};

export default SidebarTop;
