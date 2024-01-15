import React from "react";
export function Search(props) {
    return (

        <div className="h-12 ml-14">
            <div className="flex gap-4 rounded-3xl bg-gray-700">
                <img src="/src/assets/Icons/Search.svg" />
                <input type="text" placeholder="Search Twitter" className="outline h-12  bg-transparent rounded-3xl bg-gray-700" />

            </div>
        </div>
    )
}