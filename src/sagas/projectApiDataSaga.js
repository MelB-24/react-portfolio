import { call, put } from "redux-saga/effects"
import { projectApi } from "../api/data"

export function* projectApiDataRequest() {
    try {
        let { data } = yield call(projectApi)
        yield put({ type: "PROJECT_API_SUCCESS", data })
    } catch (err) {
        yield put({ type: "PROJECT_API_FAILURE", err: err.message })
    }
}
