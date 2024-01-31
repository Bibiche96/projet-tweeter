import React from "react";

import { Header } from "./Header";
import { Userbio } from "./Userbio";





export function Profile() {
    return (
        <>

            <div className="w-2/5 border border-gray-500">
                <Header  label="user profile" />


                <div className="bg-neutral-700 h-44 relative">

                    <div className="absolute -bottom-16 left-4">
                        <img src="/src/assets/Icons/placeholder.png" className="w-36 rounded-full" alt="logo" />


                    </div>
                </div>
                <Userbio />

            </div>
        </>
    )
}