'use client';
import React from 'react'

import { RegisterForm } from '../components/RegisterForm';
import { useAuthStore } from '@/app/hooks/useAuthStore';

const RegisterPage = () => {

   const {changeCurrentPage} = useAuthStore()
    
    return (
        <div className="flex flex-col justify-self-center w-1/4 mt-52 ">
            <h1 className="text-3xl justify-start w-full mb-8">Register</h1>
            <RegisterForm />
            <p className='mt-2'>Already have an account? <button onClick={() => changeCurrentPage('login')} className='text-blue-500'>Login!</button></p>
        </div>
    )
};

export default RegisterPage;
