import React, { useEffect, useState } from 'react';

const CardStat = ({ label, value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(value / (duration / 30));

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="card-stat">
            <div className="stat-number">
                <span className="circle"></span>
                {count}
                {suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default CardStat;
