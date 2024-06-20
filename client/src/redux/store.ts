import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "../reducers/root.reducer"


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer> //типизация стора 
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"] //типизация диспачей для асинхр запросов 








