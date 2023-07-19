//import { useState} from "react";

const NavBar: React.FC = () =>{
    return(
        <div className="navbar">
            <div className="left-section">
                <button className="sharp-edge">Game</button>
                <button className="sharp-edge">Stats</button>
            </div>
            <div className="right-section">
                <button className="smooth-edge">Profile</button> 
            </div>
        {/*make this a component by itself, make menu to look at name, list of groups, include setting button*/ }
    </div>
    )



}


export default NavBar;