import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import restoReducer from "./restoSlice"
import userInfoSlice from "./userInfoSlice"
import recomSlice from "./recomSlice"

// // persist
// import { persistReducer } from "redux-persist"; // load
// import storageSession from "redux-persist/lib/storage/session";  // sessionStorage

// const persistConfig: any = {
//   key: "root",
//   storage: storageSession, // 사용할 스토리지를 정의해요.
//   whitelist: ["userReducer","restoReducer","userInfoSlice","recomSlice"], // 유지 할 데이터를 정의해요
//   // whitelist: [userReducer,restoReducer,userInfoSlice,recomSlice], // 유지 할 데이터를 정의해요
// };

export const store = configureStore({
  reducer: {
    userazti: userReducer,
    resto: restoReducer,
    userInfo: userInfoSlice,
    recom: recomSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
