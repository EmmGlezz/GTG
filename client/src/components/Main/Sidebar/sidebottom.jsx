import React from "react"; 
import img from "./user.png";



function Sidebottom(){

return(
    <div className="sideuserinfo">

        <div className="insideinfo">
            <img src={img} alt="userimg" width={"30px"} height={"30px"} />
        
            <h5 className="text-light">User info</h5>
        </div>
    </div>

);


}


export default Sidebottom;