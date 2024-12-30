import React from 'react';
import { BarChart3, Users, Truck, FileText } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard 
            title="Total Vehicles" 
            value="15"
            icon={<Truck className="text-blue-500" />}
          />
          <DashboardCard 
            title="Active Drivers" 
            value="12"
            icon={<Users className="text-green-500" />}
          />
          <DashboardCard 
            title="Total Trips" 
            value="156"
            icon={<FileText className="text-purple-500" />}
          />
          <DashboardCard 
            title="Monthly Revenue" 
            value="₹85,000"
            icon={<BarChart3 className="text-yellow-500" />}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <ActivityItem key={index} {...activity} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <QuickActionButton title="Add Vehicle" icon={<Truck />} />
              <QuickActionButton title="Add Driver" icon={<Users />} />
              <QuickActionButton title="View Reports" icon={<FileText />} />
              <QuickActionButton title="Analytics" icon={<BarChart3 />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

function ActivityItem({ title, time, status }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'completed' ? 'bg-green-100 text-green-800' :
        status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    </div>
  );
}

function QuickActionButton({ title, icon }) {
  return (
    <button className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
}

const recentActivities = [
  { title: 'New driver registered', time: '2 hours ago', status: 'completed' },
  { title: 'Vehicle maintenance due', time: '5 hours ago', status: 'pending' },
  { title: 'Trip report submitted', time: '1 day ago', status: 'completed' },
  { title: 'Fuel report pending', time: '2 days ago', status: 'delayed' },
];