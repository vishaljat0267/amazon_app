import axios from "axios"
import RootService from "../index";
const { BASE_URL } = RootService;
export const cardApi1 = async () =>{
    return await axios.get(`${BASE_URL}/card`)
}


export const cardApi2 = async () =>{
    return await axios.get(`${BASE_URL}/card2`)
}

export const cardApi3 = async () =>{
    return await axios.get(`${BASE_URL}/card3`)
}

export const cardApi4 = async () =>{
    return await axios.get(`${BASE_URL}/card4`)
}

export const cardApi5 = async () =>{
    return await axios.get(`${BASE_URL}/cardShow`)
}
export const cardApi6 = async (id) =>{
    return await axios.delete(`${BASE_URL}/deleteitem/${id}`)
}

// export const getsignupDataList3 = async(newItem)=> {
//     console.log(newItem.payload);

//     return await axios.post(`${BASE_URL}/signup`,newItem.payload)
// }

