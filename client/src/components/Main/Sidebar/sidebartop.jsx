import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import '../Main.css'
function SidebarTop(){
    const navigate = useNavigate();
    const handleClick = () => navigate("/main");

    return(
    <div className="sideTop">
    <img src={logo} alt="logo" width={"150px"} height={"100px"} onClick={handleClick} className='logo_hover'/>
    
    
    
    </div>
    )
};

export default SidebarTop;
