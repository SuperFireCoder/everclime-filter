import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "../components/darkModeSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import impactCardsReducer from '../features/impactCards/impactCardsSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    impactCards: impactCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
