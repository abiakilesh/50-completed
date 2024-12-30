import React from 'react';
import { Eye } from 'lucide-react';
import { MemoEntry } from '../types';

interface MemoTableProps {
  entries: MemoEntry[];
}

export function MemoTable({ entries }: MemoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting KMs</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Diesel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ending Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ending KMs</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ending Diesel</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Labor Charge</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit/Loss</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {entries.map((entry, index) => (
            <tr key={entry.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.startingDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.startingKms}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.startingDieselLiter}L</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.endingDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.endingKms}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.endingDieselLiter}L</td>
              <td className="px-6 py-4 whitespace-nowrap">₹{entry.laborCharge}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${
                parseFloat(entry.profit) >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                ₹{entry.profit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-500 hover:text-blue-700">
                  <Eye size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}