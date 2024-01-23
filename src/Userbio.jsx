import React from "react";
import { Calendar } from "./Calendar";

export function Userbio() {
    return (
        <div className="border-b- {1px} border-neutral-800 pb-4 ">

            <div className="flex justify-end p-2">
                <button className="text-black rounded-full bg-white w-28 h-9">Edit profile</button>

            </div>
            <div className=" mt-8 px-4">
                <div className=" flex flex-col">
                    <p className=" text-white text-2xl font-semibold"> user profile </p>
                    <p className=" text-md text-neutral-500">@username</p>

                </div>

            </div>
            <div className=" flex flex-col mt-4">
                <p className=" text-white">Bio</p>

            </div>
            <div className=" flex items-center gap-2 mt-4 text-neutral-500">
                <Calendar size={8} />
                <p>joined january 2024</p>
            </div>
            <div className=" flex items-center mt-4 gap-6">
                <div className="flex items-center gap-1">
                    <p className="text-white">0</p>
                    <p className="text-neutral-500">Following</p>
                </div>
                <div className="flex items-center gap-1">
                    <p className="text-white">0</p>
                    <p className="text-neutral-500">Followers</p>
                </div>
            </div>
        </div>
    )
}