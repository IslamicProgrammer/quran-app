import { combineReducers, configureStore } from "@reduxjs/toolkit"
import entities from "./entities/entities"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  entities,
})

export default store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
})
