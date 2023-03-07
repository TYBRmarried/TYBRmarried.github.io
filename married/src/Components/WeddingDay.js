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
        <div className="wedding-day">
            <div style={{ lineHeight: "0.5" }}>태용 <span style={{ color: "red" }}>❤</span> 보라</div>
            {/* <br /> */}
            <span style={{ color: "#bcd8db", fontSize: "12px" }}>{`Wedding Day`}</span>
            {/* <br /> */}
            <div style={{ lineHeight: "1" }}>{`D - ${wDay}`}</div>
        </div>
    );
};
