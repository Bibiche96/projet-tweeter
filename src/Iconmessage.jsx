import React from "react";
export function Iconmessage(props) {
    return (
        <>
            <div className="flex gap-5">
                <img src={props.srcmessage} />
                <p className="text-gray-400"> {props.nbrmes} </p>
            </div>
        </>
    )
}