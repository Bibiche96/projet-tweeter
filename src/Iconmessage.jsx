import React from "react";
import { BiMessageRounded } from "react-icons/bi";


export function Iconmessage(props) {
    return (
        <>
            <div className="
            flex 
            items-center
             text-neutral-500
              gap-2 
              cursor-pointer transition hover:text-blue-900  ">
            <BiMessageRounded className="size-6"/>
                
                <p>0 </p>
            </div>
        </>
    )
}