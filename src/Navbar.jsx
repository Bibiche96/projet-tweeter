import React from "react";
import { Iconav } from "./Iconav";
import { Btntweet } from "./Btntweet";

export function Navbar() {
    return (

        <>
            <div className="w-1/5 flex flex-col gap-6  ml-100">
                <div className="fixed">

                    <Iconav imgnav="/src/assets/Icons/Twitter.svg" />
                    <Iconav imgnav="/src/assets/Icons/Home-Fill.svg" name="Home" />

                    <Iconav imgnav="/src/assets/Icons/Messages.svg" name="Messages" />

                    <Iconav imgnav="/src/assets/Icons/Bookmarks.svg" name="Bookmaks" />

                    <Iconav imgnav="/src/assets/Icons/Lists.svg" name="Lists" />

                    <Iconav imgnav="/src/assets/Icons/Profile.svg" name="Profile" />

                    <Iconav imgnav="/src/assets/Icons/More.svg" name="More" />
                    <Btntweet />
                </div>

            </div>



        </>

    )
}