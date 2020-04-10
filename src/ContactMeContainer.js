import { connect } from "react-redux"
import ContactMe from "./ContactMe"

const mapStateToProps = state => {
    const { contactMe } = state
    return contactMe
}

const mapDispatchToProps = dispatch => {
    return {
        handleContactEmail: emailContents =>
            dispatch({ type: "SEND_EMAIL_REQUEST", payload: emailContents })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)
