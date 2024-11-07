import React, { useState } from 'react';
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import pokedex from '../local-json/pokedex.json'; // Import the pokedex data

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const itemsPerPage = 20;

    // Filter pokedex based on the search term
    const filteredPokedex = pokedex.filter(pokemon => {
        const name = typeof pokemon.name === 'object' && pokemon.name.english
            ? pokemon.name.english.toLowerCase()
            : '';
        const id = pokemon.id ? pokemon.id.toString() : '';
        return name.includes(searchTerm.toLowerCase()) || id.includes(searchTerm);
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredPokedex.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage + 1 < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Create an array of pages to display
    const createPageArray = () => {
        const pages = [];
        const startPage = Math.max(0, currentPage - 4);
        const endPage = Math.min(totalPages, startPage + 10);

        for (let i = startPage; i < endPage; i++) {
            pages.push(i);
        }

        // Add ellipses as needed
        if (startPage > 0) {
            if (startPage > 1) pages.unshift('...');
            pages.unshift(0);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push('...');
            pages.push(totalPages - 1);
        }

        return pages;
    };

    const pageNumbers = createPageArray();

    return (
        <>
            <div className="w-full">
                <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className="p-8">
                    <Card
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        pokedex={filteredPokedex}
                    />
                    <div className="flex items-center justify-between mt-10 px-5">
                        <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                            <button
                                onClick={handlePrev}
                                className="font-bold text-white hover:text-red-400"
                                disabled={currentPage === 0}
                            >
                                Prev
                            </button>
                        </div>
                        <div className="border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-4 m-1 rounded-3xl border-2 border-s-600 border-t-600 border-e-slate-800 border-b-slate-800">
                            <button
                                onClick={handleNext}
                                className="font-bold text-white hover:text-lime-400"
                                disabled={currentPage + 1 >= totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        {pageNumbers.map((number, index) => (
                            <button
                                key={index}
                                onClick={() => typeof number === 'number' && handlePageClick(number)}
                                className={`border_shadow bg-gradient-to-b from-slate-300 to-slate-600 px-3 m-1 rounded-3xl text-white ${currentPage === number ? 'bg-blue-500' : ''}`}
                                disabled={typeof number === 'string'} // Disable ellipsis buttons
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
