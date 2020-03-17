import React from "react"
import styled from "@emotion/styled"
import About from "./About"

const HomeContainer = styled.div`
    background: linear-gradient(rgba(45, 51, 52, 0.6), rgba(45, 51, 52, 0.6)),
        url("../images/code-background.jpg");
    height: 80vh;
    background-size: cover;
    display: flex;
    align-items: center;
`

const HomeContent = styled.div`
    width: 50%;
    margin: 24px;
    font-family: "Lato";
`

const Heading = styled.div`
    color: #fa8c83;
    font-size: 36px;
`

const SubHeading = styled.div`
    color: white;
    font-size: 24px;
`

function Home() {
    return (
        <>
            <HomeContainer id="home">
                <HomeContent>
                    <Heading>
                        Hello, My name is Melissa Bykersma and I'm a Junior
                        Software Developer.
                    </Heading>
                    <br />
                    <SubHeading>
                        You can check out my projects I've completed so far in
                        the project tab! Feel free to contact me via the online
                        form, email or phone.
                    </SubHeading>
                </HomeContent>
            </HomeContainer>
            <About />
        </>
    )
}

export default Home
