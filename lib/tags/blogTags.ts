import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";
import { SETTING } from "@/app/app-config/urlConfig";
import axios from "axios";
import {excelTags} from "@/app/services/helper";
import {BlogTag} from "@/types/blogTags";
const tagsLabels= [...excelTags]
export type BlogTagType = {
  tags : BlogTag
}
const initialState: BlogTagType = {
  tags : {
    value: '', 
    label: '', 
    id: 0, 
    name: ''
  }
}

export const blogTagsAction = createAsyncThunk(
    'user/getAllBlogsTags',
    async() => {
    //const response = await axios.get(SETTING.APP_CONSTANT.API_URL+`public/getAllBlogTags`);
    //return response.data  
    return  tagsLabels
  }
);

export const blogTagSlice = createSlice({
    name: "Tags",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(blogTagsAction.fulfilled, (state, action) => {
        // Add user to the state array
        //state.tags=  action.payload;
      })
    },
  });
  
  // export const { selectBlogState } = blogSlice.actions;
  
  export const selectTagsState = (state: RootState) => state.blogTag
  
  export default blogTagSlice.reducer;