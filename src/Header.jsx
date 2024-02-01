import React from "react";
import { BsArrowLeft } from "react-icons/bs";


export function Header(props) {
    return (
        <>
            <div className=" h-12 flex gap-3">
            <BsArrowLeft  className="text-white size-12 py-2 "/>
                <p className="text-white py-3 font-semibold"> {props.label} </p>

            </div>
        </>
    )
}