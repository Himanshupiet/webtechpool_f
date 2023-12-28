import authReducer from "./auth/authSlice"
import BlogReducer from "./blog/blogPost"
import BlogTagReducer from "./tags/blogTags"

const rootReducers = {
    auth: authReducer,
    blog: BlogReducer,
    blogTag: BlogTagReducer
}

export default rootReducers