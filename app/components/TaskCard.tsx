'use client';

import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';

import { useTasksStore } from "../hooks/useTasksStore";

type Inputs = {
    title: string
}


const TaskCard = ({ task }: any) => {

    const [editing, setEditing] = useState(false)
    const { startDeletingTask, startUpdatingTask } = useTasksStore();

    const onEdit = () => {
        setEditing(!editing)
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        try {
            startUpdatingTask(task._id, data)
            setEditing(false)
        } catch (error) {
            throw error
        }

    };
    return (
        <>

            {
                editing
                    ?
                    (
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                className="bg-slate-900 w-10/12 h-12 text-lg pl-2 rounded-lg mt-4 text-white"
                                placeholder="Enter a new title"
                                {...register("title", { required: true })}
                            />
                            <button
                                className="font-bold text-purple-600 ml-6"
                                type="submit"
                            >
                                SAVE
                            </button>
                        </form>
                    )
                    :
                    (
                        <div className="flex flex-row bg-slate-900 mt-4 w-11/12 h-12 rounded-lg justify-between" key={task.title}>
                            <p className="text-white ml-4 self-center">{task.title}</p>



                            <div className="content-center">

                                <button
                                    className="font-bold text-purple-600 mr-6"
                                    onClick={onEdit}
                                >
                                    EDIT
                                </button>
                                <button
                                    className="font-bold  text-red-600 mr-4"
                                    onClick={() => startDeletingTask(task._id)}
                                >
                                    DELETE
                                </button>

                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default TaskCard;
