import { Link } from "react-router-dom";
import React from "react";

export function Iconav({ active, imgnav, name,to }) {
    return (
        <>
            <Link to={to}>
            <div className={`m-2 flex ml-60 cursor-pointer p-4  gap-10 hover:bg-blue-300 transition ${active}`}  >
                <img src={imgnav} className="w-8" alt="icon" />
                <p className="text-white font-bold"> {name} </p>
                
            </div>
            </Link>
        </>
    )
}