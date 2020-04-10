import axios from "axios"

export const projectApi = () => {
    return axios
        .get(process.env.REACT_APP_BACKEND_URL + `projects`)
        .then(res => res)
}

export const emailContact = emailContents => {
    return axios
        .post(process.env.REACT_APP_BACKEND_URL + `send`, emailContents)
        .then(res => res)
}
