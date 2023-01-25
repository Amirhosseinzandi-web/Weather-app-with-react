import React from "react";




export default function OtherDetails({ weatherData }) {
    return (
        <div className="other-details col-12 d-flex flex-wrap justify-content-evenly">
            <div>
                <p>{weatherData.feelsLike}<sup>°C</sup></p>
                <p>Feels Like</p>
            </div>

            <div>
                <p>{weatherData.humidity}%</p>
                <p>Humidity</p>
            </div>

            <div>
                <p>{weatherData.windSpeed} m/s</p>
                <p>Wind Speed</p>
            </div>

            <div>
                <p>{weatherData.pressure} hPa</p>
                <p>Pressure</p>
            </div>

        </div>
    )
}