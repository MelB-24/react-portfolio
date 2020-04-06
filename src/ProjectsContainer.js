import { connect } from "react-redux"
import Projects from "./Projects"

const mapStateToProps = state => {
    const { projects, loading } = state.projects
    return { projects, loading }
}

const mapDispatchToProps = dispatch => {
    return {
        getProjectApiData: () => dispatch({ type: "PROJECT_API_REQUEST" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
