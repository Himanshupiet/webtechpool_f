import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";
import { SETTING } from "@/app/app-config/urlConfig";
import axios from "axios";

interface AuthState {
    user: any;
    token: string;
}
const initialState:AuthState={
    user:null,
    token: ''
}
export const loginAction = createAsyncThunk(
  'user/Login',
  async( payload:any) => {
    const response = await axios.post(SETTING.APP_CONSTANT.API_URL+`public/userlogin`, payload);
    return response.data
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async(token:string) => {
    const options = {
      headers: {'Authorization': token}
    };
    const response = await axios.post(SETTING.APP_CONSTANT.API_URL+`authorize/logout`,{},options);
    return response.data
  }
);
export const ExpireToken = createAsyncThunk(
  'user/expireToken',
  async() => {
  //   const options = {
  //     headers: {'Authorization': token}
  //   };
  //   const response = await axios.post(SETTING.APP_CONSTANT.API_URL+`authorize/logout`,{},options);
    return 
  }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUser: (state, action) => {
        return {
          ...state,
          user: action.payload,
        };
      },
      setToken: (state, action) => {
        return {
          ...state,
          token: action.payload,
        };
      },
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(loginAction.fulfilled, (state, action) => {
        // Add user to the state array
        state.token = action.payload?.data?.token|| ""
        state.user = action.payload?.data?.user
      })
      builder.addCase(logout.fulfilled, (state, action) => {
        // Add user to the state array
        return initialState;
      })
      builder.addCase(ExpireToken.fulfilled, (state, action) => {
        // Add user to the state array
        return initialState;
      })
    },
  });
  
  export const { setUser, setToken } = authSlice.actions;
  
  export const selectAuthState = (state: RootState) => state.auth;
  
  export default authSlice.reducer;