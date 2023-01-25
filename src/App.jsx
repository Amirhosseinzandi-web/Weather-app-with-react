import React, { useEffect, useState } from "react";
import "../src/style/style.css"
import Form from "./component/Form";
import CenterView from "./component/CenterView";
import OtherDetails from "./component/OtherDetails";
import axios from "axios";




export default function App() {
    const [inputData, setInputData] = useState("")
    const [weatherData, setWeatherData] = useState({
        city: "wait",
        temperature: "",
        unit: "",
        desc: "",
        feelsLike: "",
        humidity: "",
        windSpeed: "",
        pressure: "",
        iconUrl: ""
    })

    let key = "bcd6a1219a6f25507dc2a9a5bac29826"

    function GetData(url) {

        axios.get(url).then(res => {
            document.querySelector(".pic").style.opacity = "1"
            
                setWeatherData(prev => {
                    return { ...prev, city: `${res.data.name} (${res.data.sys.country})`, temperature: (Math.round(res.data.main.temp)), unit: "°C", desc: res.data.weather[0].description, feelsLike: (Math.round(res.data.main.feels_like)), humidity: res.data.main.humidity, windSpeed: res.data.wind.speed, pressure: res.data.main.pressure, iconUrl: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png` }
                })
            
        })
            .catch(err => setWeatherData(prev => ({...prev, city: "error" })))
    }



    useEffect(() => {
        document.querySelector(".pic").style.opacity = "0"
        let firstData = "tehran"
        let url = ` http://api.openweathermap.org/data/2.5/weather?q=${firstData},&APPID=${key}&units=metric `
        GetData(url)
    }, [key])


    const SerachHandler = () => {
        document.querySelector(".pic").style.opacity = "0"
        setWeatherData(prev => ({...prev, city: "wait" }))
        let url = ` http://api.openweathermap.org/data/2.5/weather?q=${inputData},&APPID=${key}&units=metric `
        GetData(url)
    }


    
    return (
        <div className="col-12 bg">
            <a href="https://github.com/Amirhosseinzandi-web/" target="_blank" className="developer">Developer: Amir Hossein Zandi</a>
            <div className="container-xxl d-flex justify-content-center h-100">
                <section className="d-flex flex-column align-items-center h-100 py-5">
                    <Form inputData={inputData} setInputData={setInputData} SerachHandler={SerachHandler} />
                    <CenterView weatherData={weatherData} />
                    <OtherDetails weatherData={weatherData} />
                </section>
            </div>
        </div>
    )
}