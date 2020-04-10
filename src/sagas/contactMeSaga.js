import { call, put } from "redux-saga/effects"
import { emailContact } from "../api/data"

export function* contactMeEmailRequest(action) {
    try {
        const { emailContents } = action.payload
        let { data } = yield call(emailContact, emailContents)
        yield put({ type: "SEND_EMAIL_SUCCESS", data })
    } catch (err) {
        yield put({ type: "SEND_EMAIL_FAILED", err: err.message })
    }
}
