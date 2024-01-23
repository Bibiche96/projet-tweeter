import React from "react";
import { Header } from "./Header";
import { Userbio } from "./Userbio";





export function Profile() {
    return (
        <>

            <div className="w-2/5 border border-gray-500">
                <Header  label="user profile" />


                <div className="bg-neutral-700 h-44 relative">

                    <div className="absolute-bottom-16 left-4">
                        <img src="/src/assets/Icons/Profile-Fill.svg" className=" w-60 rounded-full" alt="logo" />


                    </div>
                </div>
                <Userbio />

            </div>
        </>
    )
}