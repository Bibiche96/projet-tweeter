import { Link } from "react-router-dom";
import React from "react";

export function Iconav({ active, imgnav, name,to }) {
    return (
        <>
            <Link to={to}>
            <div className={`m-2 flex ml-36 cursor-pointer p-2  gap-8 hover:bg-gray-900 rounded-full transition ${active}`}  >
                <img src={imgnav} className="w-8" alt="icon" />
                <p className="text-white font-semibold size-16  pt-5 hidden lg:block"> {name} </p>
                
            </div>
            </Link>
        </>
    )
}