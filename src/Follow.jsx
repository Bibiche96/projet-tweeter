import React from "react";
export function Follow(props) {
    return (
        <div className="flex justify-between">
            <img src={props.srcfollow} />
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-white"> {props.chainefollow} </p>
                    <img src={props.srcverify} />
                </div>
                <p className="text-gray-500"> {props.tag} </p>
            </div>
            <button className="text-black bg-white rounded-full w-15 py-3 px-6">Follow</button>

        </div>
    )
}