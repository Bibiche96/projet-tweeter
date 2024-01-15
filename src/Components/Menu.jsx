import React from "react"

export default function Menu(props) {
    return (
        <>
            <div className=" flex flex-row">
                <img src={props.src} className="w-5" alt="icon" />
                <p className="text-white font-bold"> {props.children} </p>
            </div>
        </>
    )
}