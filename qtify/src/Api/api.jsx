import React from 'react';
import axios from "axios";
export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

const TopAlbum= async() => { 
  try{
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
    return response.data;
    console.log(response.data)
}
catch(e){
  console.error(e);
}
}
 



export default FetchApi;
