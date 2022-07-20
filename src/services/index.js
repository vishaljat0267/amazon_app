import axios from 'axios'
import endpoints from './endpoint'
// const BASE_URL = ' https://herokuawataar.herokuapp.com'
const BASE_URL = 'http://localhost:8080'


const postRequest = async (key, data) => {
    return await axios.post(BASE_URL + endpoints[key], data)

}
export default {
    BASE_URL,
    endpoints,
    postRequest


}