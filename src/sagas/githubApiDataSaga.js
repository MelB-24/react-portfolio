import { call, put } from "redux-saga/effects"
import { githubApi } from "../api/data"

export function* githubApiDataRequest() {
    try {
        let { data } = yield call(githubApi)
        yield put({ type: "GITHUB_API_SUCCESS", data })
    } catch (err) {
        yield put({ type: "GITHUB_API_FAILURE", err: err.message })
    }
}
