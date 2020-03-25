import axios from "axios"

export const githubApi = () => {
    return axios
        .get("https://api.github.com/users/MelB-24/repos")
        .then(res => res)
}
