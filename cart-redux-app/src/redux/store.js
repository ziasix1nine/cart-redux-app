import { configureStore } from "@reduxjs/toolkit";
import CartItemSlicer from "./CartItemSlicer";
 
const store = configureStore({

    reducer: CartItemSlicer,
})


export default store;