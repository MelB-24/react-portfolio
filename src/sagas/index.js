import { takeEvery, all } from "redux-saga/effects"
import { projectApiDataRequest } from "./projectApiDataSaga"

function* watchProjectApiDataRequest() {
    yield takeEvery("PROJECT_API_REQUEST", projectApiDataRequest)
}

export default function* rootSaga() {
    yield all([watchProjectApiDataRequest()])
}
