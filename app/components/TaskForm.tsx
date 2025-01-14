'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTasksStore } from '../hooks/useTasksStore';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

type Inputs = {
    title: string
}

export default function TaskForm() {

    const { startAddingTask, errors: submitErrors } = useTasksStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        startAddingTask(data);
        console.log(errors);

    };

    useEffect(() => {
        if (submitErrors.length > 0) {
            Swal.fire('Something went wrong', submitErrors, 'error')
        }
    }, [submitErrors])


    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="What do you have planned?"
                    className="bg-slate-800 w-10/12 h-12 text-lg pl-2 rounded-lg mt-4 text-white"
                    {...register("title", { required: true, minLength: 4, maxLength: 20 })}
                />

                <button
                    className="ml-6 text-lg font-bold text-center text-purple-600"
                    type='submit'
                >
                    Add task
                </button>

                {
                    (errors.title && errors.title.type === 'minLength') && <p className='text-red-500'>Title must be at least 4 characters</p>
                }

                {
                    (errors.title && errors.title.type === 'maxLength') && <p className='text-red-500'>Title must be less than 20 characters</p>
                }

            </form>
        </div>
    )
}

