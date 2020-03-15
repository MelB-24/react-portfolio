import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Projects from "./Projects"
import ContactMe from "./ContactMe"
import NavBar from "./common/NavBar"

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact-me">
                    <ContactMe />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
