import React from 'react';
import { MapPin, Clock, Fuel, AlertCircle } from 'lucide-react';

export function DriverDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Driver Dashboard</h1>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">On Duty</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Current Trip</h2>
              <CurrentTripCard {...currentTrip} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Vehicle Status</h2>
              <div className="grid grid-cols-2 gap-4">
                <VehicleStatusCard 
                  label="Fuel Level"
                  value="75%"
                  icon={<Fuel className="text-blue-500" />}
                />
                <VehicleStatusCard 
                  label="Next Service"
                  value="500 km"
                  icon={<AlertCircle className="text-yellow-500" />}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Trips</h2>
              <div className="space-y-4">
                {recentTrips.map((trip, index) => (
                  <TripHistoryCard key={index} {...trip} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <QuickActionButton 
                  label="Start Trip"
                  color="bg-green-500 hover:bg-green-600"
                />
                <QuickActionButton 
                  label="End Trip"
                  color="bg-red-500 hover:bg-red-600"
                />
                <QuickActionButton 
                  label="Report Issue"
                  color="bg-yellow-500 hover:bg-yellow-600"
                />
                <QuickActionButton 
                  label="Submit Report"
                  color="bg-blue-500 hover:bg-blue-600"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <NotificationCard key={index} {...notification} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrentTripCard({ destination, startTime, estimatedEnd, status }) {
  return (
    <div className="border rounded-lg p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={20} />
            <span className="font-medium">Destination</span>
          </div>
          <p className="text-lg font-semibold mt-1">{destination}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={20} />
            <span className="font-medium">Start Time</span>
          </div>
          <p className="text-lg font-semibold mt-1">{startTime}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={20} />
            <span className="font-medium">Estimated End</span>
          </div>
          <p className="text-lg font-semibold mt-1">{estimatedEnd}</p>
        </div>
        <div>
          <p className="text-gray-600 font-medium">Status</p>
          <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

function VehicleStatusCard({ label, value, icon }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-gray-600">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}

function TripHistoryCard({ date, destination, duration, earnings }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium">{destination}</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-green-600">₹{earnings}</p>
          <p className="text-sm text-gray-600">{duration}</p>
        </div>
      </div>
    </div>
  );
}

function QuickActionButton({ label, color }) {
  return (
    <button className={`w-full py-2 px-4 text-white rounded-lg transition-colors ${color}`}>
      {label}
    </button>
  );
}

function NotificationCard({ message, time, type }) {
  return (
    <div className={`p-3 rounded-lg ${
      type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
      type === 'info' ? 'bg-blue-50 text-blue-800' :
      'bg-green-50 text-green-800'
    }`}>
      <p className="text-sm">{message}</p>
      <p className="text-xs mt-1 opacity-75">{time}</p>
    </div>
  );
}

const currentTrip = {
  destination: 'Mumbai Central Station',
  startTime: '09:30 AM',
  estimatedEnd: '11:30 AM',
  status: 'In Progress'
};

const recentTrips = [
  { date: 'Mar 14, 2024', destination: 'Pune Station', duration: '2h 15m', earnings: '1,200' },
  { date: 'Mar 13, 2024', destination: 'Thane West', duration: '1h 45m', earnings: '950' },
  { date: 'Mar 13, 2024', destination: 'Navi Mumbai', duration: '1h 30m', earnings: '800' },
];

const notifications = [
  { message: 'Your next scheduled maintenance is due in 2 days', time: '2 hours ago', type: 'warning' },
  { message: 'Trip report for yesterday has been approved', time: '5 hours ago', type: 'success' },
  { message: 'New safety guidelines have been posted', time: '1 day ago', type: 'info' },
];