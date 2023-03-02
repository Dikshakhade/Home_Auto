import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "./mainscreen.css"
function Mainscreen()
{
    return(
        <>
        <div className="main">
        
        </div>
        <div className="btn-div">
            <a href="/login">
                <Button className="btn" variant="success">Login</Button>
            </a>
            <a href="/register">
                <Button className="btn" variant="info">Sign Up</Button>
            </a>
       

        </div>
      
     
        
        </>
    )
}
export default Mainscreen