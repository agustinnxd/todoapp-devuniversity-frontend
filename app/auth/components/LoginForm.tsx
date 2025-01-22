import { useAuthStore } from '@/app/hooks/useAuthStore';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    email: string,
    password: string
}

export const LoginForm = () => {

    const { startLogin } = useAuthStore();

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        startLogin(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder='email'
                className="bg-slate-800 w-full h-12 text-lg pl-2 rounded-lg text-white"
                {...register("email", { required: true })}
            />
            
            <input
                type="password"
                placeholder='password'
                className="bg-slate-800 w-full h-12 text-lg pl-2 rounded-lg mt-4 text-white"
                {...register("password", { required: true })}
            />

            <button className="mt-6 text-lg text-center text-white bg-purple-600 w-16 h-9 rounded-md">
                Login
            </button>
        </form>
    )
}
