import React from "react"
import styled from "@emotion/styled"

import { device } from "./deviceSizes"

const HomeContainer = styled.div`
	background: linear-gradient(rgba(45, 51, 52, 0.6), rgba(45, 51, 52, 0.6)),
		url("../images/code-background.jpg");
	height: 100vh;
	background-size: cover;
	display: flex;
	align-items: center;
	border-bottom: solid #fa8c83 6px;

	@media ${device.mobileS} {
		height: 100vh;
	}
`

const HomeContent = styled.div`
	width: 50%;
	margin: 24px;
	font-family: "Lato";

	@media ${device.tablet} {
		width: 90%;
	}
`

const Heading = styled.div`
	color: #fa8c83;
	font-size: 36px;

	@media ${device.mobileS} {
		font-size: 30px;
	}
`

const SubHeading = styled.div`
	color: white;
	font-size: 24px;

	@media ${device.mobileS} {
		font-size: 20px;
	}
`

const Home = () => {
	return (
		<HomeContainer id="home">
			<HomeContent>
				<Heading>
					Hello, My name is Melissa Bykersma and I'm a Software Developer.
				</Heading>
				<br />
				<SubHeading>
					Feel free to contact me via the online form, email or
					LinkedIn.
				</SubHeading>
			</HomeContent>
		</HomeContainer>
	)
}

export default Home
