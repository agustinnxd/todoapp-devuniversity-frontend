import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'

export const LoginPage = () => {

    const { user, error, isLoading } = useUser();

    return (
        <a href="/api/auth/login">login</a>
    )
}
