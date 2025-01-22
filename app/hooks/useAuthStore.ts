'use client';

import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { onChecking, onLogin, onLogout, onChangeCurrentPageRegister, onChangeCurrentPageLogin } from "../store/auth/authSlice";
import usersApi from "../api/users/usersApi";
import taskApi from "../api/tasks/tasksApi";
import { onLogoutTasks } from "../store/tasks/tasksSlice";
import { Login } from "../interfaces/login.interface";
import { Register } from "../interfaces/register.interface";
import { useAppSelector } from "../store/hooks";

// custom hook for auth related functions

export const useAuthStore = () => {
    const dispatch = useDispatch();
    const { status, currentUser, currentPage } = useAppSelector(state => state.auth);

    const startLogin = async (user: Login) => {
        dispatch(onChecking())

        try {
            const { data } = await usersApi.post('http://localhost:4000/api/users/login', user);
            localStorage.setItem('token', data.access_token);
            dispatch(onLogin({ name: data.name, email: data.email, uid: data._id }));
        } catch (error: any) {
            if (error.response.data?.message) {
                if (error.response.data?.message[0].message) {
                    Swal.fire('Something went wrong', error.response.data?.message[0].message, 'error');
                } else {
                    Swal.fire('Something went wrong', error.response.data?.message, 'error');
                }
            }
            dispatch(onLogout(error.response.data?.message || 'Something went wrong'));
        }
    };

    const startRegister = async (user: Register) => {
        dispatch(onChecking())

        try {
            const { data } = await usersApi.post('http://localhost:4000/api/users/register', user);
            localStorage.setItem('token', data.access_token);
            console.log(data.newUser);
            dispatch(onLogin({ name: data.newUser.name, uid: data.newUser._id }));
        } catch (error: any) {
            if (error.response.data?.message) {
                if (error.response.data?.message[0].message) {
                    Swal.fire('Something went wrong', error.response.data?.message[0].message, 'error');
                } else {
                    Swal.fire('Something went wrong', error.response.data?.message, 'error');
                }
            }
            dispatch(onLogout(error.response.data?.message || 'Something went wrong'));
            throw error
        }
    }

    // Clears both localStorage and auth state
    const startLogout = async () => {
        localStorage.clear();
        dispatch(onLogout())
    }

    // Checks token in localStorage. If there's not a token, it logouts the user and cleans auth and tasks state. If there's a token, it refreshes it
    const checkAuthToken = async () => {
        dispatch(onChecking())
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await taskApi.get('http://localhost:4000/api/users/renew');
            localStorage.setItem('token', data.access_token);
            dispatch(onLogin({ name: data.name, email: data.email, _id: data._id }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
            dispatch(onLogoutTasks());
        }
    }

    // Used for alternating between LoginPage and RegiterPage
    const changeCurrentPage = (page: string) => {
        if (page === 'login') {
            dispatch(onChangeCurrentPageLogin())
        }
        if (page === 'register') {
            dispatch(onChangeCurrentPageRegister())
        }
    }

    return {
        // Props
        status,
        currentUser,
        currentPage,

        // Methods
        startLogin,
        checkAuthToken,
        startLogout,
        startRegister,
        changeCurrentPage,
    }
}