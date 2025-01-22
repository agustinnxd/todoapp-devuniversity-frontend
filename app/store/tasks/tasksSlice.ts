'use client';

import { Task } from "@/app/interfaces/task.interface";
import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: <any>[],
        loading: true,
        errorMessage: '', // used for managing tasks related errors
    },
    reducers: {
        onLoading: (state) => {
            state.loading = true;
        },
        onNotLoading: (state) => {
            state.loading = false;
        },
        onLoadErrors: (state, { payload }) => {
            state.errorMessage = payload;
            state.loading = false;
        },
        onLoadTasks: (state, { payload }) => {
            state.tasks = payload;
            state.loading = false;
        },
        onAddTask: (state, { payload }) => {
            state.tasks.push(payload)
            state.loading = false;
        },
        onDeleteTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((task: Task) => task._id !== payload);
            state.loading = false;
        },
        onUpdateTask: (state, { payload }) => {
            state.tasks = state.tasks.map((task: Task) => (task._id !== payload._id) ? task : payload)
            state.loading = false;
        },
        onLogoutTasks: (state) => {
            state.loading = false
            state.tasks = []
            state.errorMessage = ''
        }
    }
})

export const {
    onLoading,
    onLoadTasks,
    onAddTask,
    onDeleteTask,
    onUpdateTask,
    onLoadErrors,
    onLogoutTasks,
    onNotLoading
} = tasksSlice.actions