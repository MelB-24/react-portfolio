import {connect} from 'react-redux'
import Projects from './Projects'

const mapDispatchToProps = dispatch => {
    return {
        getGithubApiData: () => dispatch({ type: "GITHUB_API_REQUEST" })
    }
}

export default connect(null, mapDispatchToProps)(Projects)
