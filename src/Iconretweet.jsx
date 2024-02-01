import React from "react";
import { AiOutlineRetweet } from "react-icons/ai";

export function Iconretweet() {
    return (
        <>
            <div className="
            flex 
            items-center 
              text-neutral-500 gap-2 
              cursor-pointer 
              transition 
               hover:text-green-900">
                <AiOutlineRetweet className="size-6"  />
                <p>0</p>
            </div >
        </>
    )
}