import React from "react";
export function Trend(props) {
    return (
        <div className="mt-8 flex justify-between">
            <div className="flex flex-col">
                <p className="text-gray-400"> {props.country} </p>

                <p className="text-white"> {props.trends} </p>
                <p className="text-gray-400"> {props.nbrtweet} </p>
                <div>
                    <button className="text-blue">show More</button>
                </div>
            </div>
            <img src="/src/assets/Icons/More-2.svg" alt="icon" />
        </div>
    )
}