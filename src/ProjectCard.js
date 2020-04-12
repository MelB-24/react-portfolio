import React from "react"
import styled from "styled-components"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { device } from "./deviceSizes"

const Heading = styled.a`
    display: none;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin: 0;

    @media ${device.mobileL} {
        font-size: 20px;
    }
`

const GitHubIcon = styled(Github)`
    height: 50px;
    display: none;
    color: white;

    @media ${device.mobileL} {
        height: 30px;
    }
`

const Language = styled.p`
    color: white;
    margin: 4px;
    display: none;
`

const ProjectCardWrapper = styled.div`
    width: 400px;
    height: 200px;
    font-family: "Lato";

    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    margin: 4px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &:hover {
        background: #2d3334;
    }

    &:hover ${Heading} {
        display: inline;
    }

    &:hover ${GitHubIcon} {
        display: inline;
    }

    &:hover ${Language} {
        display: inline;
    }

    @media ${device.mobileL} {
        width: 70vw;
        height: 153px;
    }
`

const GitHubLink = styled.a``

const LanguageWrapper = styled.div``

class ProjectCard extends React.Component {
    handleLanguagesRender = languages =>
        languages.map((language, index) => (
            <Language key={index}>{language}</Language>
        ))

    render() {
        const { project } = this.props
        return (
            <ProjectCardWrapper image={project.photoUrl}>
                <Heading href={"http://" + project.url} target="_blank">
                    {project.title}
                </Heading>
                <LanguageWrapper>
                    {this.handleLanguagesRender(project.languages)}
                </LanguageWrapper>
                <GitHubLink href={project.githubLink}>
                    <GitHubIcon />
                </GitHubLink>
            </ProjectCardWrapper>
        )
    }
}

export default ProjectCard
