import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";
import { SETTING } from "@/app/app-config/urlConfig";
//import { BlogConverter } from "@/modals/BlogConverter";
import axios from "axios";
import {Blog} from "@/types/blog";
//import blogData from "@/components/Blog/blogData";

export type BlogNewType = {
  blogData : Blog
}
const initialState: BlogNewType = {
  blogData : {
          id: 0,
          title: "",
          paragraph: "",
          image: "",
          author: {
            name:'',
            designation:"",
            image:""
          },
          tags: [],
          publishDate: "",
          slugTitle:'',
       }
}

export const blogPostAction = createAsyncThunk(
    'user/getAllBlogs',
    async() => {
    const response = await axios.get(SETTING.APP_CONSTANT.API_URL+`public/getAllBlogPost`);
    return response.data  
  }
);
export const getBlogById = createAsyncThunk(
    'user/getBlogById',
    async(slugTitle:string) => {
    const response = await axios.get(SETTING.APP_CONSTANT.API_URL+`public/getBlogPost/${slugTitle}`);
    return response.data  
  }
);

// export const logout = createAsyncThunk(
//   'user/logout',
//   async(token:string) => {
//     const options = {
//       headers: {'Authorization': token}
//     };
//     const response = await axios.post(SETTING.APP_CONSTANT.API_URL+`authorize/logout`,{},options);
//     return response.data
//   }
// );

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(getBlogById.fulfilled, (state, action) => {
        //console.log("action.payloadaction.payload", action.payload)
        // Add user to the state array
        state.blogData = action.payload.data;
      })
    },
  });
  
  // export const { selectBlogState } = blogSlice.actions;
  
  export const selectBlogState = (state: RootState) => state.blog 
  export default blogSlice.reducer;