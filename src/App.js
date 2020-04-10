import React from "react"

import About from "./About"
import Home from "./Home"
import ProjectsContainer from "./ProjectsContainer"
import ContactMeContainer from "./ContactMeContainer"
import NavBar from "./common/NavBar"

function App() {
    return (
        <>
            <NavBar />
            <Home id="home" />
            <About id="about" />
            <ProjectsContainer id="projects" />
            <ContactMeContainer id="contact" />
        </>
    )
}

export default App
