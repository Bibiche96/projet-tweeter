import React from "react";


export function Header(props) {
    return (
        <>
            <div className=" h-20">
                <p className="text-white size-16"> {props.label} </p>

            </div>
        </>
    )
}