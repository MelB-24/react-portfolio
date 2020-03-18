import React from "react"

import About from "./About"
import Home from "./Home"
import Projects from "./Projects"
import ContactMe from "./ContactMe"
import NavBar from "./common/NavBar"
import Footer from './common/Footer'

function App() {
    return (
        <>
            <NavBar />
            <Home id='home'/>
            <Footer />
            <About id='about'/>
            <Projects id='projects'/>
            <ContactMe id='contact'/>
        </>
    )
}

export default App
