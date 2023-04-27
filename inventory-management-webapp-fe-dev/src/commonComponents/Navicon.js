import React from "react";
import { useState } from "react";
import "../css/index.css"

const Navicon = (props) => {
    const[active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    return(
        <div className="side-links">
            <span onClick={handleClick} style={{ color: active ? "white" : "black" }} class="material-symbols-outlined">team_dashboard</span>
                <p>{props.name}</p>
        </div>
    );
}

export default Navicon