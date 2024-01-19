import React from "react";
import { Header } from "./Header";





export function Profile() {
    return (
        <>

        
            <Header showBackArrow label="user profile" />
            <div>

                <div className="bg-neutral-700 h-44 relative">

                    <div className="absolute-bottom-16 left-4">
                        <img src="/src/assets/Icons/Profile-Fill.svg" alt="logo" />
                        <h1 className="text-white">Bonjour</h1>

                    </div>
                </div>
            </div>
        </>
    )
}