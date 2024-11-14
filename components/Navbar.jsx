import React from "react"
import ReactDOM from "react-dom/client"


export default function Navbar() {
    return (
        <>
            <nav>
                <img src="../images/react-icon-small.png" />
                <div className="nav--logo_text">ReactFacts</div>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </>
    )
}