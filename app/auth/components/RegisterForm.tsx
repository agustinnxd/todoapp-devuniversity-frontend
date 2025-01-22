import { useAuthStore } from '@/app/hooks/useAuthStore';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    email: string,
    name: string,
    password: string
}

export const RegisterForm = () => {

    const { startRegister } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        startRegister(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder='email'
                className="bg-slate-800 w-full h-12 text-lg pl-2 rounded-lg text-white"
                {...register("email", { required: true, })}
            />
            <input
                type="text"
                placeholder='name'
                className="bg-slate-800 w-full h-12 text-lg pl-2 rounded-lg mt-4 text-white"
                {...register("name", { required: true, minLength: 4, maxLength: 15 })}
            />
            {
                (errors.name && errors.name.type === 'minLength') && <p className='text-red-500'>Name must be at least 4 characters</p>
            }
            {
                (errors.name && errors.name.type === 'maxLength') && <p className='text-red-500'>Name must be less than 16 characters</p>
            }
            <input
                type="password"
                placeholder='password'
                className="bg-slate-800 w-full h-12 text-lg pl-2 rounded-lg mt-4 text-white"
                {...register("password", { required: true, minLength: 6 })}
            />
            {
                (errors.password && errors.password.type === 'minLength') && <p className='text-red-500'>Password must be at least 6 characters</p>
            }
            <button className="mt-4 text-lg text-center text-white bg-purple-600 w-20 h-9 rounded-md">
                Register
            </button>
        </form>
    )
}
