import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserModel from '../models/user_model';
import { RootState } from './../app/store';

export  interface AuthState{
    user?: UserModel | null;
}
 const initialState: AuthState = {
    user: null,
 }
export const authSlice =  createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state)=>{
            state.user = null;
        },
        updateUser: (state, action: PayloadAction<UserModel>)=>{
            state.user = action.payload;
        }
    }
});


export const { logOut, updateUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;