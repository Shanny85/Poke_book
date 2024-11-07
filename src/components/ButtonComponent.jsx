import React from 'react';

const ButtonComponent = () => {
    return (
        <>
            <div className="flex items-center justify-between mt-10">
                <button className="font-bold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-1 w-20 rounded">Prev</button>
                <button className="font-bold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-1 w-20 rounded">Next</button>
            </div>
        </>
    );
};

export default ButtonComponent;
