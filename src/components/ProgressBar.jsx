import React, { useState, useEffect } from 'react';

const ProgressBar = ({ currentValue, maxValue, color }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Calculate progress and clamp it to a maximum of 100
        const calculatedProgress = (currentValue / maxValue) * 100;
        setProgress(Math.min(calculatedProgress, 100)); // Ensure it doesn't exceed 100%
    }, [currentValue, maxValue]);

    return (
        <div className="w-full bg-slate-950 rounded-full h-2.5">
            <div
                className="h-2.5 rounded-full"
                style={{
                    width: `${progress}%`,
                    backgroundColor: color,
                    boxShadow: `0 0 5px ${color}, 0 0 15px ${color}`
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
