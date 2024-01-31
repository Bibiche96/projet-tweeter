import React from "react";
import { BsArrowLeft } from "react-icons/bs";


export function Header(props) {
    return (
        <>
            <div className=" h-20 flex">
            <BsArrowLeft  className="text-white size-8 "/>
                <p className="text-white size-16"> {props.label} </p>

            </div>
        </>
    )
}