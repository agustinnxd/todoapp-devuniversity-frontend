'use client';

import React from 'react'

import { LoginForm } from '../components/LoginForm';
import { useAuthStore } from '@/app/hooks/useAuthStore';

const LoginPage = () => {

    const {changeCurrentPage} = useAuthStore()
    
    return (
        <div className="flex flex-col justify-self-center w-1/4 mt-52 ">
            <h1 className="text-3xl justify-start w-full mb-8">Login</h1>
            <LoginForm />
            <p className='mt-2'>Don't have an account? <button onClick={() => changeCurrentPage('register')} className='text-blue-500'>SignUp!</button></p>
        </div>

    )
};

export default LoginPage;
