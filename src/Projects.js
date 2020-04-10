import React from "react"
import styled from "styled-components"

import ProjectCard from "./ProjectCard"

const ProjectWrapper = styled.div`
    background: #fa8c83;
    height: calc(100vh - 95px);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.h1`
    font-family: "Lato";
    margin: 0;
    color: #2d3334;
    margin: 36px 36px 0 36px;
`

const ProjectCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 36px;
`

const ComingSoonBox = styled.h2`
    background: #2d3334;
    display: inline;
    color: white;
    padding: 24px;
    font-family: "Lato";
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
                <ComingSoonBox>More Coming Soon</ComingSoonBox>
            </ProjectWrapper>
        )
    }
}

export default Projects
