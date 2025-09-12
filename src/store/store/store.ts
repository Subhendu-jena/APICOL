import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import apiReducer from "../slices/strapiSlices";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
