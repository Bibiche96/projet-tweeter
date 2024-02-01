import React from "react";
import { Iconav } from "./Iconav";


export function Navbar() {
    return (

        <>
            <div className="w-1/5 flex flex-col">
                <div className="fixed">

                    <Iconav imgnav="/src/assets/Icons/Twitter.svg" />
                    <Iconav to="/" imgnav="/src/assets/Icons/Home-Fill.svg" name="Home" />

                    <Iconav to="/Messages" imgnav="/src/assets/Icons/Messages.svg" name="Messages" />

                    <Iconav to="/Bookmaks" imgnav="/src/assets/Icons/Bookmarks.svg" name="Bookmaks" />

                    <Iconav to="/Lists" imgnav="/src/assets/Icons/Lists.svg" name="Lists" />

                    <Iconav to="/Profile" imgnav="/src/assets/Icons/Profile.svg" name="Profile" />

                    <Iconav to="/More" imgnav="/src/assets/Icons/More.svg" name="More" />
                    <button className="rounded-full bg-blue-500 text-white font-semibold  items-center ml-36 py-3 px-20 w-60">Tweet</button>
                </div>
                
            </div>



        </>

    )
}