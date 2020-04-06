import React from "react"
import styled from "styled-components"
import { Github } from "@styled-icons/boxicons-logos/Github"

const ProjectCardWrapper = styled.div`
    width: 300px;
    height: 150px;
    font-family: "Lato";
    background: white;
    margin: 4px;
    padding: 12px;

    &:hover {
        background: #99edcc;
    }
`

const Heading = styled.h2`
    color: #2d3334;
`
const Language = styled.p`
    color: #2d3334;
`

const GitHubIcon = styled(Github)`
    height: 40px;
    color: #2d3334;
`

const GitHubLink = styled.a``

class ProjectCard extends React.Component {
    render() {
        const { project } = this.props
        return (
            <ProjectCardWrapper>
                <Heading>{project.title}</Heading>
                <Language>{project.language}</Language>
                <GitHubLink href={project.githubLink}>
                    <GitHubIcon />
                </GitHubLink>
            </ProjectCardWrapper>
        )
    }
}

export default ProjectCard
