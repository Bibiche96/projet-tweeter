
import React from "react";
export function Iconlove(props) {
    return (
        <>
            <div className="flex gap-5">
                <img src={props.srclove} />
                <p className="text-gray-400">{props.nbrlove} </p>
            </div>
        </>
    )
}