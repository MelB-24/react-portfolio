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
        const { getGithubApiData } = this.props
        getGithubApiData()
    }

    handleProjectCardRender = () => {
        const { githubRepos } = this.props

        return githubRepos.map((repo, index) => {
            return <ProjectCard key={index} repo={repo} />
        })
    }

    render() {
        return (
            <ProjectWrapper id="projects">
                <Heading>Projects</Heading>
                <ProjectCardsWrapper>
                    {this.handleProjectCardRender()}
                    <ProjectCard
                        repo={{
                            name: "More Coming Soon",
                            language: null,
                            html_url: null
                        }}
                    />
                </ProjectCardsWrapper>
            </ProjectWrapper>
        )
    }
}

export default Projects
