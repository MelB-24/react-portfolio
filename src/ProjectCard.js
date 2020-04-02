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
        const { repo } = this.props
        console.log(this.props.repo)
        return (
            <ProjectCardWrapper>
                <Heading>{repo.name}</Heading>
                <Language>{repo.language}</Language>
                <GitHubLink href={repo.html_url}>
                    <GitHubIcon />
                </GitHubLink>
            </ProjectCardWrapper>
        )
    }
}

export default ProjectCard
