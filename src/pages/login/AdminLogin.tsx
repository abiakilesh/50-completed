import React from 'react';
import { LoginForm } from '../../components/shared/LoginForm';
import { Users } from 'lucide-react';

export function AdminLogin() {
  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log('Admin login:', credentials);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white">Admin Login</h2>
        <p className="text-gray-400 mt-2">Access the admin dashboard</p>
      </div>
      <LoginForm role="admin" onSubmit={handleLogin} />
    </div>
  );
}