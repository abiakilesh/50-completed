import React from 'react';
import { LoginForm } from '../../components/shared/LoginForm';
import { UserCircle } from 'lucide-react';

export function ManagerLogin() {
  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log('Manager login:', credentials);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <UserCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white">Manager Login</h2>
        <p className="text-gray-400 mt-2">Access the manager dashboard</p>
      </div>
      <LoginForm role="manager" onSubmit={handleLogin} />
    </div>
  );
}