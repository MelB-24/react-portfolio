const initalState = {
    repos: [],
    loading: false,
    error: null
}

export default function githubReducer(state = initalState, action) {
    switch (action.type) {
        case "GITHUB_API_SUCCESS":
            return {
                ...state,
                repos: action.data
            }
        case "GITHUB_API_FAILURE":
            return {
                ...state,
                error: action.err
            }
        default:
            return state
    }
}
