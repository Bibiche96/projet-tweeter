import React from "react";
import { Trend } from "./Trend";
import { Follow } from "./Follow";
import { Search } from "./Search";


export function Searchtweet() {
    return (
        <div className="w-1/5 mr-20 hidden md:block">
            <div className="fixed">
                <div>
                    <Search />
                </div>
                <div className="bg-gray-900 mt-8 ml-14 rounded-lg  w-96 h-auto">

                    <div className="flex justify-between items-start py-5 px-4">
                        <h3 className="text-white font-bold ">Trends for you</h3>
                        <img src="/src/assets/Icons/Settings.svg" alt="icon" />
                    </div>
                    <div>
                        <Trend country="Turquey" trends="#SQUID" nbrtweet="2,066 Tweets" />
                        <Trend country="Turquey" trends="#SQUID" nbrtweet="2,066 Tweets" />
                        <Trend country="Turquey" trends="#SQUID" nbrtweet="2,066 Tweets" />
                        <Trend country="Turquey" trends="#SQUID" nbrtweet="2,066 Tweets" />

                        <button className="text-blue-500 text-xl font-bold py-16 px-3  ">show More</button>
                    </div>
                </div>
                <div className="bg-gray-900 mt-8 ml-14 rounded-lg h-auto w-96 items-start py-5 px-4">
                    <h2 className="text-white font-bold">Who to follow</h2>
                    <div>
                        <Follow
                            srcfollow="/src/assets/Icons/Tweet-Profile-Photo.svg"
                            chainefollow="The New York Times"
                            srcverify="/src/assets/Icons/Verified.svg"
                            tag="@nytimes ." />
                        <button className="text-blue-500 text-xl font-bold py-16 px-3  ">show More</button>
                    </div>
                </div>



            </div >
        </div>
    )
}