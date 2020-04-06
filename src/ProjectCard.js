import React from "react"
import styled from "styled-components"
import { Github } from "@styled-icons/boxicons-logos/Github"

const Heading = styled.a`
    display: none;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin: 0;
`

const GitHubIcon = styled(Github)`
    height: 50px;
    display: none;
    color: white;
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
    background: rgba(45, 51, 52, 0.05);
    background-image: linear-gradient(
            rgba(45, 51, 52, 0.05),
            rgba(45, 51, 52, 0.05)
        ),
        url(${props => props.image});
    background-size: contain;
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
`

const GitHubLink = styled.a``

const LanguageWrapper = styled.div``

class ProjectCard extends React.Component {
    handleLanguagesRender = languages =>
        languages.map(language => <Language>{language}</Language>)

    render() {
        const { project } = this.props
        console.log(project)
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
