const initalState = {
    projects: [],
    loading: false,
    error: null
}

export default function projectsReducer(state = initalState, action) {
    switch (action.type) {
        case "PROJECT_API_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "PROJECT_API_SUCCESS":
            return {
                ...state,
                loading: false,
                projects: action.data
            }
        case "PROJECT_API_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.err
            }
        default:
            return state
    }
}
