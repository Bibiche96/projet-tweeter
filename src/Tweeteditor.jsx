import React from 'react'
import { Btntweet } from './Btntweet'
export function Tweeteditor() {
    return (
        <>
            <div className="flex flex-col gap-y-3.5 border border-gray-500 py-3 px-3">
                <div className="flex flex-row gap-3">
                    <img src="/src/assets/Icons/Profile-Fill.svg" className='w-12' alt="icon" />
                    <textarea name="" id="" cols="30" rows="1" placeholder="What's happening? " className='resize-none bg-black'></textarea>
                </div>

                <div className="flex flex-row justify-between ">
                    <div className="flex flex-row gap-x-3.5 px-24">
                        <img src="/src/assets/Icons/Media.svg" alt="icon" />
                        <img src="/src/assets/Icons/Gif.svg" alt="icon" />
                        <img src="/src/assets/Icons/Poll.svg" alt="icon" />
                        <img src="/src/assets/Icons/Emoji.svg" alt="icon" />
                        <img src="/src/assets/Icons/Schedule.svg" alt="icon" />
                    </div>
                    <Btntweet/>
                </div>

            </div >
        </>
    )
}