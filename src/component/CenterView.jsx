import React from "react";



export default function CenterView({ weatherData }) {
    return (
        <>
            <p className="city-name">{weatherData.city}</p>

            <h1 className="degree">{weatherData.temperature}
                <sup>{weatherData.unit}</sup>
            </h1>

            <figure className="weather-icon"><img className="pic" src={weatherData.iconUrl} alt="" /></figure>
            <p className="sky-detail">{weatherData.desc}</p>
            
        </>
    )
}