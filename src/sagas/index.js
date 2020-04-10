import { takeEvery, all } from "redux-saga/effects"
import { projectApiDataRequest } from "./projectApiDataSaga"
import { contactMeEmailRequest } from "./contactMeSaga"

function* watchProjectApiDataRequest() {
    yield takeEvery("PROJECT_API_REQUEST", projectApiDataRequest)
}

function* watchContactMeEmailRequest() {
    yield takeEvery("SEND_EMAIL_REQUEST", contactMeEmailRequest)
}

export default function* rootSaga() {
    yield all([watchProjectApiDataRequest(), watchContactMeEmailRequest()])
}
