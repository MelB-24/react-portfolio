import React from "react"
import styled from "styled-components"

const ProjectWrapper = styled.div`
    height: 100vh;
    background: #fa8c83;
`

const Heading = styled.h1`
    font-family: "Lato";
    margin: 0;
    padding: 36px;
`

function Projects() {
    return (
        <ProjectWrapper id="projects">
            <Heading>Projects</Heading>
        </ProjectWrapper>
    )
}

export default Projects
