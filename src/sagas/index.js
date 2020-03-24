import { takeEvery, all } from "redux-saga/effects"
import { githubApiDataRequest } from "./githubApiDataSaga"

function* watchGithubApiDataRequest() {
    yield takeEvery("GITHUB_API_REQUEST", githubApiDataRequest)
}

export default function* rootSaga() {
    yield all([watchGithubApiDataRequest()])
}
