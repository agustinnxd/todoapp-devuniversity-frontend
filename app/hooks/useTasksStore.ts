'use client';

import { useDispatch } from "react-redux"
import { useAppSelector } from "../store/hooks";
import { onAddTask, onDeleteTask, onLoadErrors, onLoading, onLoadTasks, onUpdateTask } from "../store/tasks/tasksSlice";
import taskApi from "../api/tasks/tasksApi"; 

export const useTasksStore = () => {
    const dispatch = useDispatch();
    const { tasks, errors, loading } = useAppSelector(state => state.task);

    const startLoadingTasks = async () => {
        dispatch(onLoading());

        try {
            const { data } = await taskApi.get('http://localhost:4000/api/tasks');
            dispatch(onLoadTasks(data))

        } catch (error) {
            console.log(error);
        }
    }

    const startAddingTask = async (title: any) => {
        dispatch(onLoading());

        try {
            const { data } = await taskApi.post('http://localhost:4000/api/tasks', title);
            const { __v: _, ...rest } = data
            dispatch(onAddTask(rest))
        } catch (error: any) {
            const { response } = error;
            dispatch(onLoadErrors(response.data.message))
            setTimeout(() => { dispatch(onLoadErrors(''))}), 3000;
        }
    }

    const startDeletingTask = async (id: any) => {
        try {
            dispatch(onLoading());
            await taskApi.delete(`http://localhost:4000/api/tasks/${id}`);
            dispatch(onDeleteTask(id))
        } catch (error) {
            throw error
        }

    }

    const startUpdatingTask = async (id: any, payload: any) => {
        dispatch(onLoading());

        try {
            const res = await taskApi.put(`http://localhost:4000/api/tasks/${id}`, payload)
            dispatch(onUpdateTask(res.data));
        } catch (error) {
            throw error
        }
    }

    return {
        // Props
        tasks,
        errors,
        loading,

        // Methods
        startLoadingTasks,
        startAddingTask,
        startDeletingTask,
        startUpdatingTask,
    }
}