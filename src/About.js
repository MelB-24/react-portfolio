import React from "react"
import styled, { keyframes } from "styled-components"
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
    top: -150px;

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

function About() {
    return (
        <AboutWrapper id="about">
            <AboutTextWrapper>
                <AboutHeading>About</AboutHeading>
                <AboutText>
                    After recently completing Coder Academy's 6 months bootcamp,
                    I have found a real passion in Software Development.
                    <br />
                    <br />
                    I am currently working on side projects but I am eager to
                    start my career and be immersed in the industry.
                    <br />
                    <br />
                    I am an easy going, confident person who loves to take on a
                    challenge.
                    <br />
                    My hobbies include drinking a lot of coffee, hanging out
                    with my two dogs and, without sounding too cliche, coding.
                    <br />
                    <br />
                    Tech Stack:
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Ruby on Rails</li>
                    </ul>
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
