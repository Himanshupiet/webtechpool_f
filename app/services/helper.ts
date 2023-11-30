import { useCallback, useEffect, useRef } from 'react'
import axios from "axios";


export const uploadFile =
  async (file: File) => {
    console.log("REACT_APP_IMAGE_UPLOAD_BASE_URL",process.env.REACT_APP_IMAGE_UPLOAD_BASE_URL)
    //const url = 'http://192.168.1.20:3010/api/admin/uploadImage';
    const url = 'https://yaduwanshiback.cyclic.app/api/admin/uploadImage';
    const formData = new FormData();
    formData.append('file', file)
    formData.append('fileName', `blogImage${Math.floor(100000 + Math.random() * 900000)}`)
    const config = {
      headers: {
        'Content-Type':"multipart/form-data",
      }
    };
    const response = await axios.post(url, formData, config);
    console.log("response", response.data.data.url)
    return response.data.data.url
  }
