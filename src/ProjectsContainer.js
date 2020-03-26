import { connect } from "react-redux"
import Projects from "./Projects"

const mapStateToProps = state => {
    const { repos } = state.github
    return {
        githubRepos: repos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGithubApiData: () => dispatch({ type: "GITHUB_API_REQUEST" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
