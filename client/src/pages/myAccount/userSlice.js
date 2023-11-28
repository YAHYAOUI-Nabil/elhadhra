import { createSlice } from '@reduxjs/toolkit';
import { signin, signup, logout, deleteAccount, editInfos } from '../../api';

const initialState = {
  loading: false,
  updateState: false,
  error: "",
  response: "",
  user: {},
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
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
              response: "signup",
              isAuth: true
            }
          })
          .addCase(signup.rejected, (state, action) => {
            return {
              ...state,
              error: action.error.message,
              user: {}
            }
          })
          .addCase(logout.pending, (state) => {
            return {
              ...state,
              loading: true,
            }
          })
          .addCase(logout.fulfilled, (state) => {
            return initialState
          })
          .addCase(logout.rejected, (state) => {
            return {
              ...state,
            }
          })
          .addCase(deleteAccount.pending, (state) => {
            return {
              ...state,
              loading: true,
            }
          })
          .addCase(deleteAccount.fulfilled, (state) => {
            return initialState
          })
          .addCase(deleteAccount.rejected, (state) => {
            return {
              ...state,
            }
          })
          .addCase(editInfos.pending, (state) => {
            return {
              ...state,
              loading: true,
            }
          })
          .addCase(editInfos.fulfilled, (state, action) => {
            return {
              ...state,
              user: action.payload,
              response: "user infos updated successfully"
            }
          })
          .addCase(editInfos.rejected, (state) => {
            return {
              ...state,
              response: "user infos not updated",
            }
          })
  }
})

export const { changeStateTrue, changeStateFalse, clearResponse } = userSlice.actions

export default userSlice.reducer