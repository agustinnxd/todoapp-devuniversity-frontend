import { useAuthStore } from '@/app/hooks/useAuthStore'



export const Navbar = () => {

    const { currentUser, startLogout } = useAuthStore();
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className='text-white font-semibold text-2xl'>Hi, {currentUser.name}!</h1>

                <button className="flex md:block md:w-auto">
                    <p className='text-red-600 text-xl' onClick={startLogout}>Logout</p>
                </button>
            </div>
        </nav>
    )
}
