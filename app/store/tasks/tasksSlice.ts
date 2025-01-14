'use client';

import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: <any>[],
        loading: true,
        errors: '',
    },
    reducers: {
        onLoading: (state) => {
            state.loading = true;
        },
        onLoadErrors: (state, { payload }) => {
            state.errors = payload;
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
            state.tasks = state.tasks.filter((task: any) => task._id !== payload);
            state.loading = false;
        },
        onUpdateTask: (state, { payload }) => {
            state.tasks = state.tasks.map((task: any) => (task._id !== payload._id) ? task : payload)
            state.loading = false;
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
} = tasksSlice.actions