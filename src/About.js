import React from "react"
import styled, { keyframes } from "styled-components"
// import { fadeInRight } from "react-animations"

// const fadeInRightAnimation = keyframes`${fadeInRight}`

const AboutWrapper = styled.div`
    height: 100vh;
    border-bottom: solid #fa8c83 6px;
`

const AboutHeading = styled.h1`
    margin: 0px;
    padding: 0px;
`

const ResumeDownloadLink = styled.a`
    text-decoration: none;
`

function About() {
    return (
        <AboutWrapper id="about">
            <AboutHeading>About</AboutHeading>
            Click{" "}
            <ResumeDownloadLink href="./Resume.pdf" target="_blank">
                here
            </ResumeDownloadLink>{" "}
            to download my resume
        </AboutWrapper>
    )
}

export default About
