'use client';

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated' 'not-athenticated'
        currentUser: {}
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
        },
        onLogin: (state, {payload}) => {
            state.currentUser = payload;
            state.status = 'autheticated';
        },
        onLogout: (state) => {
            state.status = 'not-authenticated'
        }
    }
})