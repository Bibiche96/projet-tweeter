
import React, { useState } from "react";
// import { AiFillHeart, AioutlineHeart } from 'react-icons'
import { BsFillHeartFill, BsHeart } from "react-icons/bs";



export function Iconlove(props) {

    const [state, setState] = useState(false)
    const [value, setValue] = useState(0)

    function handleClik() {

        setState(!state)
        state ? setValue(value - 1) : setValue(value + 1)



    }
    const LikeIcon = state ? BsFillHeartFill : BsHeart
    return (

        <>
            <div
                onClick={handleClik}
                className="
            flex 
             items-center 
              text-neutral-500 gap-2 
              cursor-pointer 
              transition 
               hover:text-red-500">
               
                <LikeIcon color={state? 'red' : ''} size={20} />
                {/* <img src={props.srclove} /> */}
                <p className="text-gray-400">{value} </p>
            </div>
        </>
    )
}