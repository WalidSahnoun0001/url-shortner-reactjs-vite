import axios from "axios"

function fetchData(link) {
    const data = axios.get(`
    https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html
    `).then(res => res.data)
    return data
}
export default fetchData
