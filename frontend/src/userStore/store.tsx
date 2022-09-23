import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userStore/userSlice"

export const store = configureStore({
  reducer: {
    userazti : userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;