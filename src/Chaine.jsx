import React from "react";
import { Icontweet } from "./Icontweet";


export function Chaine({tweets}) {
    let tab= {
        "author_avatar": "https://picsum.photos/200?random=1604299903000",
        "source": "Twitter",
        "date": 1604299903000,
        "favorites": "92746",
        "id": "1323155810910982145",
        "isVerified": true,
        "replies": "24785",
        "retweets": "16287",
        "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"
    }
    return (
        <>
            <div className="flex border border-gray-500 py-3 px-3 ">
                <img src={tweets.author_avatar} className="w-20 mb-70 self-start" />
                <div className="flex flex-col  ms-3  justify-center">
                    <div className="flex gap-2">
                        <p  className="text-white font-bold" > {tweets.source} </p>
                        <img src="/src/assets/Icons/Verified.svg"/>
                        <p className="text-gray-400"> {tweets.date} </p>
                    </div>
                    <p className="text-white"> {tweets.text} </p>
                    <img src= {tweets.image} className=" h-60 max-w-full rounded-lg mt-8 object-content"/>

                    <Icontweet/>
                </div>
            </div>
        </>
    )
}
