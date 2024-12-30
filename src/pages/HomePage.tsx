import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Users, UserCircle } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">Transportation & Logistics</h1>
        <p className="text-xl text-center text-gray-300 mb-16">Management System</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <RoleCard 
            title="Admin"
            description="Manage vehicles, drivers, and overall system"
            icon={<Users size={48} />}
            to="/admin/login"
          />
          <RoleCard 
            title="Manager"
            description="Monitor trips and handle approvals"
            icon={<UserCircle size={48} />}
            to="/manager/login"
          />
          <RoleCard 
            title="Driver"
            description="View assignments and update trip status"
            icon={<Truck size={48} />}
            to="/driver/login"
          />
        </div>
      </div>
    </div>
  );
}

function RoleCard({ title, description, icon, to }) {
  return (
    <Link 
      to={to}
      className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </Link>
  );
}