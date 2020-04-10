import { combineReducers } from "redux"
import projectsReducer from "./projectsReducer"
import contactMeReducer from "./contactMeReducer"

export default combineReducers({
    projects: projectsReducer,
    contactMe: contactMeReducer
})
