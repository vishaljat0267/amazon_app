
import  rootService  from "../../services/index";
import axios from "axios";
const  { endpoints, postRequest,BASE_URL } = rootService;
const { addToCart } = endpoints;

export const addNewItemToCart = async(newItem)=> {
    console.log(newItem.payload);

    return await axios.post(`${BASE_URL}/addtocart`,newItem.payload)
}

export const   getAllCartItems = async () =>{
    return await axios.get(`${BASE_URL}/cardShow`)
}

export const deleteNewItemToCart = async (id) =>{
    console.log(id.payload);
    return await axios.delete(`${BASE_URL}/deleteitem/${id.payload}`)
}

export const updateNewItemToCart = async (id) =>{
    console.log(id);
    return await axios.patch(`${BASE_URL}/updatequantity/${id.payload.id}`,id.payload)
}
export const getitmesList1 = async (data) =>{
    return await axios.get(`${BASE_URL}/card`)
}


export const getitmesList2= async () =>{
    return await axios.get(`${BASE_URL}/card2`,)
}

export const  getitmesList3= async () =>{
    return await axios.get(`${BASE_URL}/card3`)
}

export const getitmesList4 = async () =>{
    return await axios.get(`${BASE_URL}/card4`)
}
