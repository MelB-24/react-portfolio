import React from "react"
import styled from "styled-components"
import image from "./about-illustration.svg"
import { device } from "./deviceSizes"
// import { fadeInRight } from "react-animations"

// const fadeInRightAnimation = keyframes`${fadeInRight}`

const AboutWrapper = styled.div`
	height: max-content;
	font-family: "Lato";
	color: #2d3334;
	display: flex;
	align-items: center;
	justify-content: center;
`

const AboutTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 900px;
	margin: 36px;

	@media ${device.tablet} {
		max-width: 700px;
	}
`

const AboutHeading = styled.h1`
	margin: 0px;
	padding: 0px;
	font-size: 36px;
`

const ResumeDownloadLink = styled.a`
	text-decoration: none;
	color: #2d3334;
	cursor: pointer;

	&:hover {
		color: #99edcc;
	}
`

const AboutText = styled.p`
	font-size: 20px;
	margin: 20px 0;

	@media ${device.tablet} {
		font-size: 18px;
	}

	@media ${device.mobileL} {
		font-size: 16px;
	}
`

const StyledImage = styled.img`
	height: 200px;
	float: right;
	position: relative;
	top: -230px;
	left: 40px;

	@media ${device.tablet} {
		float: unset;
		position: unset;
		top: unset;
		display: block;
		margin: 0 auto;
		padding: 24px;
		height: 140px;
	}
`

const About = () => {
	return (
		<AboutWrapper id="about">
			<AboutTextWrapper>
				<AboutHeading>About</AboutHeading>
				<AboutText>
					In 2020 I completed Coder Academy's 6 month intensive
					bootcamp.
					<br />
					<br />
					I am currently working for Web and App design agency
					AppNative, formally Cognativ, completing projects in:
					<br />
					<ul>
							<li>TypeScript React</li>
							<li>React Native</li>
							<li>NodeJS and GraphQL</li>
					</ul>
					<br />
					I am an easy going, confident person who loves to take on a
					challenge.
					<br />
					<br />
					My hobbies include drinking too much coffee, hanging out
					<br />
					with my two beagles and admiring my freshly mowed lawn.
					<br />
					<br />
					Click{" "}
					<ResumeDownloadLink href="./Resume.pdf" target="_blank">
						here
					</ResumeDownloadLink>{" "}
					to download my resume
					<StyledImage src={image} />
				</AboutText>
			</AboutTextWrapper>
		</AboutWrapper>
	)
}

export default About
