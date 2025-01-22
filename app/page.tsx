'use client';

import React from 'react'
import { TasksApp } from './pages/TasksApp'
import { Provider } from 'react-redux'
import store from './store/store'

const page = () => {

    return (
        <Provider store={store}>
            <TasksApp />
        </Provider>
    )
}

export default page
