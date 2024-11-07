import React, { useEffect, useState } from 'react';
import PokemonView from "../components/PokemonView.jsx";
import pokedex_icon from '../../public/assets/images/pokedex-48.png';
import { Link, useParams, useNavigate } from "react-router-dom";
import pokedex from '../local-json/pokedex.json';
import right from '../../public/assets/images/right.png';
import left from '../../public/assets/images/left.png';

const PokemonViewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchedPokemon = pokedex.find(poke => poke.id === parseInt(id));
        setPokemon(fetchedPokemon);
    }, [id]);

    if (!pokemon) return <div>Loading...</div>;

    const hasPrev = pokemon.evolution?.prev;
    const hasNext = pokemon.evolution?.next;

    const handlePrevClick = () => {
        if (hasPrev) {
            navigate(`/pokemon/${hasPrev[0]}`);
        }
    };

    const handleNextClick = () => {
        if (hasNext) {
            navigate(`/pokemon/${hasNext[0][0]}`);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-grow flex justify-center items-start md:items-center">
                <div className="mx-auto w-4/5 mt-4 md:mt-0">
                    <PokemonView pokemon={pokemon} />
                </div>
            </div>

            <div className="flex justify-center mb-4">
                <div className="relative">
                    <button
                        onClick={handlePrevClick}
                        className={`text-white font-bold text-3xl mr-6 mt-2 ${hasPrev ? '' : 'invisible'}`}
                        style={{ pointerEvents: hasPrev ? 'auto' : 'none' }}
                    >
                        <img src={left} alt="left_arrow_icon" className="w-8 h-8" />
                    </button>
                </div>

                <Link to="/">
                    <img src={pokedex_icon} alt="Pokedex" className="text-3xl text-white" />
                </Link>

                <div className="relative">
                    <button
                        onClick={handleNextClick}
                        className={`text-white font-bold text-3xl ml-6 mt-2 ${hasNext ? '' : 'invisible'}`}
                        style={{ pointerEvents: hasNext ? 'auto' : 'none' }}
                    >
                        <img src={right} alt="right_arrow_icon" className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokemonViewPage;
