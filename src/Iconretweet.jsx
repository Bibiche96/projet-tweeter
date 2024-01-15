import React from "react";
export function Iconretweet(props) {
    return (
        <>
            <div className="flex gap-5">
                <img src={props.srcretweet} />
                <p className="text-gray-400">{props.nbretw} </p>
            </div >
        </>
    )
}