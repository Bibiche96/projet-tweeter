import React from "react";
import { Iconmessage } from "./Iconmessage";
import { Iconretweet } from "./Iconretweet";
import { Iconlove } from "./Iconlove";
import { Iconload } from "./Iconload";

export function Icontweet() {
    return (
        <div className="flex px-8 py-8  gap-36">
            <Iconmessage srcmessage="/src/assets/Icons/Reply.svg"  nbrmes="19" />
            <Iconretweet srcretweet="/src/assets/Icons/Retweet.svg" nbretw="48"/>
            <Iconlove 
            
            srclove="/src/assets/Icons/Reply.svg" 
            nbrlove="0"
            />
            <Iconload srcload="/src/assets/Icons/Share.svg"/>
        </div>
    )
}