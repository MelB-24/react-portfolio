import React from "react"
import styled from "styled-components"

import ProjectCard from "./ProjectCard"

const ProjectWrapper = styled.div`
    background: #fa8c83;
    height: calc(100vh - 95px);
`

const Heading = styled.h1`
    font-family: "Lato";
    margin: 0;
    padding: 36px;
`

const ProjectCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 36px;
`

class Projects extends React.Component {
    componentDidMount() {
        const { getProjectApiData } = this.props
        getProjectApiData()
    }

    handleProjectCardRender = () => {
        const { projects, loading } = this.props

        if (!loading) {
            return projects.map((project, index) => {
                return <ProjectCard key={index} project={project} />
            })
        } else {
            return <h1>loading</h1>
        }
    }

    render() {
        return (
            <ProjectWrapper id="projects">
                <Heading>Projects</Heading>
                <ProjectCardsWrapper>
                    {this.handleProjectCardRender()}
                </ProjectCardsWrapper>
            </ProjectWrapper>
        )
    }
}

export default Projects
