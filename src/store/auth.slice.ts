import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  user: null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

interface LoginRequest {
  username: string;
  password: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = authSlice.actions;

export default authSlice.reducer;
