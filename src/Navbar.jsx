import React from "react";
import { Iconav } from "./Iconav";


export function Navbar() {
    return (

        <>
            <div className="w-1/5 flex flex-col ml-100 mr-20  ">
                <div className="fixed">

                    <Iconav  active="bg-blue-300" imgnav="/src/assets/Icons/Twitter.svg" />
                    <Iconav to="/"imgnav="/src/assets/Icons/Home-Fill.svg" name="Home" />

                    <Iconav to="/Messages" imgnav="/src/assets/Icons/Messages.svg" name="Messages" />

                    <Iconav  to="/Bookmaks"imgnav="/src/assets/Icons/Bookmarks.svg" name="Bookmaks" />

                    <Iconav to="/Lists"imgnav="/src/assets/Icons/Lists.svg" name="Lists" />

                    <Iconav to="/Profile" imgnav="/src/assets/Icons/Profile.svg" name="Profile" />

                    <Iconav to="/More" imgnav="/src/assets/Icons/More.svg" name="More" />
                    <button className="rounded-full w-60 h-16 py-3 px-6 text-white bg-blue-500">Tweet</button>
                </div>

            </div>



        </>

    )
}