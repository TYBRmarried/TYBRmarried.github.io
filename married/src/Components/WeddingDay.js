import React, { useEffect, useState } from "react";

export default function WeddingDay() {
    const [wDay, setWDay] = useState(0);

    useEffect(() => {
        const today = new Date();
        const dday = new Date("2023-5-13");
        const gap = dday.getTime() - today.getTime();
        setWDay(Math.ceil(gap / (1000 * 60 * 60 * 24)));
    }, []);

    return (
        <div id="wedding-day">
            {`Wedding Day - ${wDay}`}
        </div>
    );
};
