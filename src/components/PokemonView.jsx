import React from 'react';
import ProgressBar from "./ProgressBar.jsx";
import {TypeHelper} from "../utils/TypeHelper.jsx";
import {IconHelper} from "../utils/IconHelper.jsx";


// eslint-disable-next-line react/prop-types
const PokemonView = ({ pokemon }) => {
    // Check if pokemon is defined and has the required properties
    if (!pokemon) {
        return <div>Loading...</div>; // or some loading indicator
    }


    // eslint-disable-next-line react/prop-types
    const { name, id, type, move, base, profile, image } = pokemon;

    // Prepare stats for rendering
    const stats = [
        { name: 'HP', current: base.HP, max: 100, color: '#51c659' },
        { name: 'Attack', current: base.Attack, max: 100, color: '#eab73d' },
        { name: 'Defense', current: base.Defense, max: 100, color: '#ed7f0f' },
        // eslint-disable-next-line react/prop-types
        { name: 'Sp. Attack', current: base["Sp. Attack"], max: 100, color: '#56b0f1' },
        // eslint-disable-next-line react/prop-types
        { name: 'Sp. Defense', current: base["Sp. Defense"], max: 100, color: '#ad62f6' },
        { name: 'Speed', current: base.Speed, max: 100, color: '#f06ace' },
    ];


    return (
        <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800 border-8 bg-slate-800 rounded-2xl min-h-screen p-4">

            <div className="flex flex-col md:flex-row justify-between rounded-lg md:bg-slate-700 shadow-md bg-transparent">
                <div className="bg-slate-700 rounded-lg w-full p-4 md:w-1/3 mb-4 md:mb-0 px-4">
                    <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                        <div className="flex justify-between">
                            <div>
                                <img src={IconHelper[type[0]]} alt={`${type[0]} icon`} className="w-8 h-8 mt-2"/>
                            </div>
                            <div>
                                {type[1] && <img src={IconHelper[type[1]]} alt={`${type[1]} icon`} className="w-8 h-8 mt-2"/>}
                            </div>
                        </div>
                        <div className="rounded-lg p-4">
                            <img
                                src={image.hires}
                                alt={name.english}
                                className="viewImage mx-auto px-4 py-2 w-48 h-52"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-600 rounded-lg p-2 mt-2 md:shadow-md shadow-transparent">
                        <div
                            className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                            <h2 className="heading text-white text-center text-lg font-semibold">{name.english}</h2>
                        </div>
                        <div className="bg-slate-700 rounded flex justify-between px-2 mt-2">
                            <p className="text-gray-200 mt-3">Type:</p>
                            <div className="flex space-x-2 my-1">
                                {type.map((t, index) => (
                                    <div
                                        key={index}
                                        className={`${TypeHelper[t] || 'bg-slate-500'} rounded p-1 text-gray-200`}
                                    >
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mx-auto bg-slate-700 rounded-lg w-full md:w-2/3 p-4 shadow-transparent">
                    <div className="bg-slate-600 rounded text-center p-2">
                        <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                            <h2 className="text-white text-lg font-semibold">No: {id}</h2>
                        </div>
                    </div>
                    <div
                        className="flex flex-col md:flex-row justify-between mt-2 rounded-lg md:bg-slate-600 bg-transparent">
                        <div className="bg-slate-600 rounded-lg w-full p-4 mb-4 md:mb-0">
                            <div className="bg-slate-700 rounded-lg p-4 mt-2 shadow-md">
                                <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                                    <h2 className="text-white text-center text-lg font-semibold">Species</h2>
                                </div>
                                <div className="text-gray-200 px-3">
                                    <p>{pokemon.species}</p>
                                    {/*<ul className="text-gray-200 grid grid-cols-2 px-2">*/}
                                    {/*    {Array.isArray(move) && move.map((m, index) => (*/}
                                    {/*        <li key={index} className="py-1 text-shadow mx-1">{m}</li>*/}
                                    {/*    ))}*/}
                                    {/*</ul>*/}
                                </div>
                            </div>

                            <div className="bg-slate-700 rounded-lg p-2 mt-2">
                                <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                                    <h2 className="text-white text-center text-lg font-semibold">Size</h2>
                                </div>
                                <p className="text-gray-200 px-3">Weight: <span className="ml-20">{profile.weight}</span></p>
                                <p className="text-gray-200 px-4">Height: <span className="ml-20">{profile.height}</span></p>
                            </div>
                                <div className="bg-slate-700 rounded-lg p-4 mt-2 shadow-md">
                                    <div
                                        className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                                        <h2 className="text-white text-center text-lg font-semibold">Ability</h2>
                                    </div>
                                    <ul className="text-gray-200 px-4">
                                        {Array.isArray(profile.ability) && profile.ability.map(([abilityName, isHidden], index) => (
                                            <li key={index} className="py-1 text-shadow">
                                                {isHidden === "true" ? (
                                                    <>
                                                        {abilityName} <span className="ml-20">Hidden</span>
                                                    </>
                                                ) : abilityName}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                        </div>
                        <div className="bg-slate-600 rounded-lg w-full p-4">
                            <div className="bg-slate-700 rounded-lg w-full p-4 mt-2">
                                <div
                                    className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                                    <h2 className="text-white text-center text-lg font-semibold">Stats</h2>
                                </div>
                                {stats.map(stat => (
                                    <div key={stat.name} className="py-1">
                                        <p className="text-gray-200">{`${stat.name}: ${stat.current}`}</p>
                                        <ProgressBar currentValue={stat.current} maxValue={stat.max}
                                                     color={stat.color}/>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-700 rounded-lg flex p-4 my-4 shadow-md">
                <div className="w-full border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                    <p className="text-gray-100 p-2">{pokemon.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonView;
