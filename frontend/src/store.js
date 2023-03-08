import {configureStore} from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/UserReducer";

const store = configureStore({
  reducer:{
    user:loginReducer,
  }
})

export default store;