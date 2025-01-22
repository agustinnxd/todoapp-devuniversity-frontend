'use client';

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    status: string,
    currentUser: {
        name: string,
        email: string,
        uid: string
    },
    currentPage: string
}

const initialState: AuthState = {
    status: 'checking', // 'authenticated' 'not-athenticated'
    currentUser: {
        name: '',
        email: '',
        uid: '',
    },
    currentPage: 'login' // register
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
        },
        onLogin: (state, { payload }) => {
            state.currentUser = payload;
            state.status = 'authenticated';
        },
        onLogout: (state) => {
            state.status = 'not-authenticated';
            state.currentUser = {
                name: '',
                email: '',
                uid: '',
            };
        },
        onChangeCurrentPageRegister: (state) => {
            state.currentPage = 'register'
        },
        onChangeCurrentPageLogin: (state) => {
            state.currentPage = 'login'
        },
    }
})

export const {
    onChecking,
    onLogin,
    onLogout,
    onChangeCurrentPageRegister,
    onChangeCurrentPageLogin
} = authSlice.actions