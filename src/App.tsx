import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ManagerDashboard } from './pages/ManagerDashboard';
import { DriverDashboard } from './pages/DriverDashboard';
import { AdminLogin } from './pages/login/AdminLogin';
import { ManagerLogin } from './pages/login/ManagerLogin';
import { DriverLogin } from './pages/login/DriverLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
  },
  {
    path: '/manager/login',
    element: <ManagerLogin />,
  },
  {
    path: '/manager',
    element: <ManagerDashboard />,
  },
  {
    path: '/driver/login',
    element: <DriverLogin />,
  },
  {
    path: '/driver',
    element: <DriverDashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;