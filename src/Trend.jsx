import React from "react";
export function Trend(props) {
    return (
        <>
            <div className=" flex justify-between ">
                <div className="flex flex-col px-6 items-start justify-between py-1">
                    <p className="text-gray-600"> {props.country} </p>

                    <p className="text-white font-semibold"> {props.trends} </p>
                    <p className="text-gray-600"> {props.nbrtweet} </p>

                </div>

                <img src="/src/assets/Icons/More-2.svg" alt="icon" />
            </div>
            
        </>
    )
}