import React, { useEffect } from 'react'
import LoginPage from '../auth/pages/LoginPage'
import { useAuthStore } from '../hooks/useAuthStore'
import TasksPage from '../tasks/pages/TasksPage';
import RegisterPage from '../auth/pages/RegisterPage';

export const TasksApp = () => {

    const { status, checkAuthToken, currentPage } = useAuthStore();

    useEffect(() => {
        checkAuthToken()
    }, []);

    if (status === 'checking') {
        return (
            <h3 className='text-lg'>Loading...</h3>
        )
    }

    return (
        <div>
            {
                (status === 'authenticated')
                    ?
                    <TasksPage />
                    :
                    (currentPage === 'login')
                        ?
                        <LoginPage />
                        :
                        <RegisterPage />
            }
        </div>
    )
}
