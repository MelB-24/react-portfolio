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

class Projects extends React.Component {
    componentDidMount() {
        const { getGithubApiData } = this.props
        getGithubApiData()
    }

    render() {
        return (
            <ProjectWrapper id="projects">
                <Heading>Projects</Heading>
            </ProjectWrapper>
        )
    }
}

export default Projects
