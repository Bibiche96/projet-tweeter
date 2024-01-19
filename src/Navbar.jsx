import React from "react";
import { Iconav } from "./Iconav";
import { Btntweet } from "./Btntweet";

export function Navbar() {
    return (

        <>
            <div className="w-1/5 flex flex-col ml-100 ">
                <div className="fixed">

                    <Iconav  active="bg-blue-300" imgnav="/src/assets/Icons/Twitter.svg" />
                    <Iconav to="/"imgnav="/src/assets/Icons/Home-Fill.svg" name="Home" />

                    <Iconav to="/Messages" imgnav="/src/assets/Icons/Messages.svg" name="Messages" />

                    <Iconav  to="/Bookmaks"imgnav="/src/assets/Icons/Bookmarks.svg" name="Bookmaks" />

                    <Iconav to="/Lists"imgnav="/src/assets/Icons/Lists.svg" name="Lists" />

                    <Iconav to="/Profile" imgnav="/src/assets/Icons/Profile.svg" name="Profile" />

                    <Iconav to="/More" imgnav="/src/assets/Icons/More.svg" name="More" />
                    <Btntweet />
                </div>

            </div>



        </>

    )
}