import React from "react";
import "../css/Calendar.css"

export default function Calendar() {
    return (
        <div className="calendar">
            <img src={`${process.env.PUBLIC_URL}/calendar.png`} alt="" />
        </div>
    );
};
