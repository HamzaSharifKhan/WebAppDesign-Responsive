
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./UserSlice"


export default configureStore({
     reducer:{
          user:userReducer,  // The User and its all reducers so we can access the Action

     }
})