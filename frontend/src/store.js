import {configureStore} from "@reduxjs/toolkit";
// import { loginReducer } from "./reducers/UserReducer";
import cartvalue  from "./reducers/Sslice";

const store = configureStore({
  reducer:{
   cart: cartvalue,

  }
})

export default store;