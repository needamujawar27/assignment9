import React ,{ useState } from "react";

export const  Counter=()=>{
    const [btn,setBtn]=useState(0)
    return(
        <div className="child">
            <button className="add" onClick={()=>setBtn(btn-1)}>-</button>
            <button className="num">{btn}</button>
            <button className="add" onClick={()=>setBtn(btn+1)}>+</button>
        </div>
    );
}         