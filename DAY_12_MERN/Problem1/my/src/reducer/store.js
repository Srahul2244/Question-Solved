// src/store.js
import { legacy_createStore } from "redux";
import todo from "./reducer";
const store = legacy_createStore(todo);

export default store;
