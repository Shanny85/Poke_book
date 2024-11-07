import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ currentPage, itemsPerPage, pokedex }) => {
    // Calculate the start and end indices for slicing the data
    const startIndex = currentPage * itemsPerPage;
    const displayedData = pokedex.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-3 gap-6 p-4">
            {displayedData.map(({ name, id, image }) => (

                <div
                    key={id}
                    className="border_shadow relative w-full border-4 border-s-slate-400 border-t-slate-400 border-e-slate-700 border-b-slate-700  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-xl p-4 flex justify-center items-center "
                >
                    <div className="hidden lg:block absolute inset-0 -z-10 justify-center items-center">
                        <div className="w-full h-full rounded-full"></div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img
                            src={image.thumbnail}
                            alt={`picture of ${name.english}`}
                            className="w-30 h-30 mb-2"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/150';
                            }}
                        />
                        <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                            <div
                                className="shadow-inner-md text-center flex items-center justify-center">
                                <p className="text-white font-bold text-lg mr-3 select-none">{id}</p>
                                <h2 className="text-white text-lg font-semibold  hover:text-lime-400">
                                    <Link to={`/pokemon_view/${id}`}>{name.english}</Link>
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
