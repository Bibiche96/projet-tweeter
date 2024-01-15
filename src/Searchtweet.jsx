import React from "react";
import { Trend } from "./Trend";
import { Follow } from "./Follow";
import { Search } from "./Search";


export function Searchtweet() {
    return (
        <div className="w-1/5">
            <div className="fixed">
                <div>
                    <Search />
                </div>
                <div className="bg-gray-700 mt-10 ml-14 rounded-lg h-60 w-96">



                    <div className="flex justify-between">
                        <h2 className="text-white font-bold size-12">Trends for you</h2>
                        <img src="/src/assets/Icons/Settings.svg" alt="" />
                    </div>
                    <Trend
                        country="Turquey"
                        trends="#SQUID"
                        nbrtweet="2,066 Tweets"
                    />
                    <div />
                </div>
                <div className="bg-gray-700 mt-10 ml-14 rounded-lg h-60 w-96">
                    <h2 className="text-white font-bold size-12">Who to follow</h2>
                    <Follow
                        srcfollow="/src/assets/Icons/Tweet-Profile-Photo.svg"
                        chainefollow="The New York Times"
                        srcverify="/src/assets/Icons/Verified.svg"
                        tag="@nytimes ." />
                </div>



            </div >
        </div>
    )
}