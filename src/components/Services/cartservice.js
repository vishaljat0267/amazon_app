
import rootService from "../../services/index";
import axios from "axios";
const { endpoints, postRequest, BASE_URL } = rootService;
const { addToCart } = endpoints;

export const addNewItemToCart = async (newItem) => {
    console.log(newItem.payload);

    return await axios.post(`${BASE_URL}/addtocart`, newItem.payload)
}

export const getAllCartItems = async () => {
    const token = sessionStorage.getItem('token');

    return await axios.get(`${BASE_URL}/cardShow`, { headers: { "Authorization": `${token}` } })


}

export const deleteNewItemToCart = async (item1) => {
    console.log("pppppppppppppppppp", item1);
    const { payload } = item1
    const { email, product_id } = payload
    // const {product_id,email}=payload1.payload
    return await axios.delete(`${BASE_URL}/deleteitem/${product_id}/${email}`, payload)
}

export const updateNewItemToCart = async (item) => {
    const { payload } = item
    const { email, product_id, update, quantity } = payload
    console.log("=====>>>jjjjjjlll", product_id, email, update, quantity);
    return await axios.patch(`${BASE_URL}/updatequantity/${product_id}/${email}`, payload)
}
export const getitmesList1 = async () => {
    return await axios.get(`${BASE_URL}/card`)
}


export const getitmesList2 = async () => {
    return await axios.get(`${BASE_URL}/card2`,)
}

export const getitmesList3 = async () => {
    return await axios.get(`${BASE_URL}/card3`)
}

export const getitmesList4 = async () => {
    return await axios.get(`${BASE_URL}/card4`)
}


export const getsignupDataList3 = async (newItem) => {
    console.log(newItem.payload);

    return await axios.post(`${BASE_URL}/signup`, newItem.payload)


}


export const getloginDataList3 = async (newItem) => {
    console.log(newItem.payload);

    return await axios.post(`${BASE_URL}/login`, newItem.payload)


}
