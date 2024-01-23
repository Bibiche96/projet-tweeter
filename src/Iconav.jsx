import { Link } from "react-router-dom";
import React from "react";

export function Iconav({ active, imgnav, name,to }) {
    return (
        <>
            <Link to={to}>
            <div className={`m-2 flex ml-60 cursor-pointer p-2  gap-8 hover:bg-neutral-500 rounded-full transition ${active}`}  >
                <img src={imgnav} className="w-8" alt="icon" />
                <p className="text-white font-bold size-16 pt-5"> {name} </p>
                
            </div>
            </Link>
        </>
    )
}