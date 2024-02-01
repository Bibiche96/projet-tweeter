import React from "react";
import { Iconmessage } from "./Iconmessage";
import { Iconretweet } from "./Iconretweet";
import { Iconlove } from "./Iconlove";
import { Iconload } from "./Iconload";

export function Icontweet() {
    return (
        <div className="flex px-8 py-8  gap-36">
            <Iconmessage />
            <Iconretweet/>
            <Iconlove/>
            <Iconload />
        </div>
    )
}