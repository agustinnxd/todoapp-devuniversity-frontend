import React from 'react'
import TaskForm from '../components/TaskForm'
import TaskDisplay from '../components/TaskDisplay'
import { useTasksStore } from '../hooks/useTasksStore'

export const TaskPage = () => {

    const { loading } = useTasksStore();

    return (
        <div className="flex flex-col justify-self-center w-6/12 mt-12	">
            <h1 className="text-3xl justify-start w-full">Tasks List 2024</h1>
            <TaskForm />

            <TaskDisplay />
        </div>
    )
}
