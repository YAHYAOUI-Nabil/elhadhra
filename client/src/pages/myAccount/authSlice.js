import { createSlice } from '@reduxjs/toolkit';
import { signin, signup, logout, validateUser } from '../../api';

const initialState = {
  loading: false,
  updateState: false,
  error: "",
  response: "",
  user: {},
  isRegistered: false,
  isAuth: false,
  isValid: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
          .addCase(signin.pending, (state) => {
            state.loading = true;
          })
          .addCase(signin.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              user: action.payload,
              response: "signin",
              isAuth: true
            }
          })
          .addCase(signin.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              user: {}
            }
          })
          .addCase(signup.pending, (state) => {
            state.loading = true;
          })
          .addCase(signup.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              user: action.payload,
              response: "user registered and waiting for validation",
              isRegistered: true,
            }
          })
          .addCase(signup.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              user: {}
            }
          })
          .addCase(validateUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(validateUser.fulfilled, (state, action) => {
            return {
              ...state,
              loading: false,
              user: action.payload,
              response: "user registered and validated",
              isAuth: true,
              isValid: true,
            }
          })
          .addCase(validateUser.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              user: {},
              response: "user registered and not validated",
              isAuth: false,
              isValid: false,
            }
          })
          .addCase(logout.fulfilled, (state) => {
            return initialState
          })
  }
})

export const { changeStateTrue, changeStateFalse, clearResponse } = authSlice.actions

export default authSlice.reducer