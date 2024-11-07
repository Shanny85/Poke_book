// NavBar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ searchTerm, setSearchTerm }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="w-full bg-gradient-to-b from-slate-400 to-slate-800 h-24 flex justify-between items-center px-10 sticky top-0 z-50">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="logo font-s text-center text-white text-3xl px-6">PokE Guide</h1>
                    <p className="logo_small font-bold text-gray-800 text-xs">Gotta See Em All</p>
                </div>

                <div className="hidden md:flex items-center">
                    <div className="flex">
                        <input
                            type="search"
                            placeholder="Find em all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="rounded p-2 mx-2 w-80"
                        />
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        className="text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-slate-500 w-full p-4">
                    <div className="flex flex-col items-center">
                        <div className="flex mb-4">
                            <input
                                type="search"
                                placeholder="Find em all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="rounded p-2 mx-2 w-80"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
