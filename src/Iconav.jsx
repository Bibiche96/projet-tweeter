import React from "react";

export function Iconav(props) {
    return (
        <>
            <div className=" m-2 flex gap-2 ml-60 ">
                <img src= {props.imgnav} className="w-8" alt="icon" />
                <p className="text-white font-bold"> {props.name} </p>
            </div>
        </>
    )
}