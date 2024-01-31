import React from "react";
import { useState, useEffect } from "react";
import { Icontweet } from "./Icontweet";
import axios from "axios";


export function Chaine({ props }) {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        try {
            axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users/" + props.userId) 
            .then((resp) => {
               setUser(resp.data)
            });
        }
        catch (err) {
        return err;
    }

 }, [])

console.log(user);
return (
    <>
        <div className="flex border border-gray-500 py-3 px-3 ">
            <img src={user.thumbnailProfil} className="w-20 mb-70 self-start" />
            <div className="flex flex-col  ms-3  justify-center">
                <div className="flex gap-2">
                    <p className="text-white font-bold" >{user.name}</p>
                    <img src="/src/assets/Icons/Verified.svg" />
                    <p className="text-gray-400">{user.email}</p>
                </div>
                <p className="text-white">{props.body}</p>
                {props.url && <img src={props.url} className=" h-60 max-w-full rounded-lg mt-8 object-content" />}

                <Icontweet />
            </div>
        </div>
    </>
)
}
