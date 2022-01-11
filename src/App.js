import React from "react"

import About from "./About"
import Home from "./Home"
import ContactMeContainer from "./ContactMeContainer"
import NavBar from "./common/NavBar"

const App = () => {
	return (
		<>
			<NavBar />
			<Home id="home" />
			<About id="about" />
			<ContactMeContainer id="contact" />
		</>
	)
}

export default App
