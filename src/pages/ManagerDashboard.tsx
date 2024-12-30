import React from 'react';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

export function ManagerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Manager Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Active Trips</h2>
              <div className="space-y-4">
                {activeTrips.map((trip, index) => (
                  <TripCard key={index} {...trip} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
              <div className="space-y-4">
                {pendingApprovals.map((approval, index) => (
                  <ApprovalCard key={index} {...approval} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Alerts</h2>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <AlertCard key={index} {...alert} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <StatItem label="Active Drivers" value="8/12" />
                <StatItem label="Vehicles in Use" value="6/10" />
                <StatItem label="Pending Reports" value="3" />
                <StatItem label="Today's Trips" value="15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TripCard({ driverName, destination, startTime, status }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{driverName}</h3>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <MapPin size={16} />
            <span>{destination}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Clock size={16} />
            <span>{startTime}</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === 'on-time' ? 'bg-green-100 text-green-800' : 
          'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function ApprovalCard({ type, requestedBy, date }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{type}</h3>
          <p className="text-sm text-gray-600">Requested by: {requestedBy}</p>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
            Approve
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

function AlertCard({ message, type }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${
      type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
      type === 'error' ? 'bg-red-50 text-red-800' :
      'bg-blue-50 text-blue-800'
    }`}>
      <AlertCircle size={20} />
      <p className="text-sm">{message}</p>
    </div>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

const activeTrips = [
  { driverName: 'John Doe', destination: 'Mumbai Central', startTime: '09:30 AM', status: 'on-time' },
  { driverName: 'Mike Smith', destination: 'Pune Station', startTime: '10:15 AM', status: 'delayed' },
];

const pendingApprovals = [
  { type: 'Leave Request', requestedBy: 'Alex Johnson', date: '2024-03-15' },
  { type: 'Overtime Hours', requestedBy: 'Sarah Williams', date: '2024-03-14' },
];

const alerts = [
  { message: 'Vehicle maintenance due for TN-01-AB-1234', type: 'warning' },
  { message: 'Driver license expiring in 15 days', type: 'info' },
  { message: 'Fuel consumption above threshold', type: 'error' },
];