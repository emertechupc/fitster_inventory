import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userStatus") ? JSON.parse(localStorage.getItem("userStatus")) : null,
    error: null,
    loading: false,
    isLoggedIn: localStorage.getItem("loginStatus") ? localStorage.getItem("loginStatus") : false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("userStatus", JSON.stringify(action.payload));
      localStorage.setItem("loginStatus", true);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userStatus");
      state.error = null;
      state.loading = false;
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("accion");
      localStorage.removeItem("accionSSHH");
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;