'use client';

import { Provider } from 'react-redux';
import store from './store/store';
import { TaskPage } from './pages/TaskPage';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { LoginPage } from './pages/LoginPage';


const page = () => {

  return (
    <UserProvider>
      <Provider store={store}>
        {/* <TaskPage /> */}
        <LoginPage/>
      </Provider>
    </UserProvider>
  )
}

export default page
