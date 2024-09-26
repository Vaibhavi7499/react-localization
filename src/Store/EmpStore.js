import { configureStore } from "@reduxjs/toolkit";
import EmpSlice from "./Slice/EmpSlice";

const Store = configureStore({
reducer:{
    employee:EmpSlice
}
})

export default Store;