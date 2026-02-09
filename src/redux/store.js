import { createStore } from "redux";
import productReducer from "./reducer/productReducer";

let store = createStore(productReducer);

export default store;
