const initalState = {
    isSuccessful: null,
    loading: false,
    error: null
}

export default function contactMeReducer(state = initalState, action) {
    switch (action.type) {
        case "SEND_EMAIL_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "SEND_EMAIL_SUCCESS":
            return {
                ...state,
                loading: false,
                isSuccessful: true
            }
        case "SEND_EMAIL_FAILED":
            return {
                isSuccessful: false,
                loading: false,
                error: action.err
            }
        default:
            return state
    }
}
