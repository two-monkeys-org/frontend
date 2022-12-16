import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { AuthState } from "../types/types";

const initialState: AuthState = {
  shouldDisplayAuthModal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state.shouldDisplayAuthModal = action.payload.shouldDisplayAuthModal;
      state.authType = action.payload.authType;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthModalState = (state: AppState) => state.auth;

export default authSlice.reducer;
