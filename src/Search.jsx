import React from "react";
export function Search(props) {
    return (
        <>
            <div className="h-12 ml-14">
                <div className="flex gap-2 rounded-full bg-gray-900 ">
                    <img src="/src/assets/Icons/Search.svg" />
                    <input type="text" placeholder="Search Twitter" className="outline-none h-12  bg-transparent rounded-3xl bg-gray-700" />

                </div>
            </div>
        </>
    )
}