import React from "react";



export default function Form({ inputData, setInputData, SerachHandler }) {
    const InputHandler = (e) => {
        setInputData(e.target.value)
    }
    const ClickHandler = (e) => {
        e.preventDefault()
        SerachHandler()
    }
    return (
        <form className="d-flex flex-column align-items-center">
            <input className="inp my-3" type="text" placeholder="Location ..." onChange={InputHandler} />
            <button id="btn" onClick={ClickHandler}>Search</button>
        </form>
    )
}