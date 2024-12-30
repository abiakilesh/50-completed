import React from 'react';
import { MemoEntry } from '../types';

interface StartingDetailsSectionProps {
  formData: MemoEntry;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function StartingDetailsSection({ formData, onChange }: StartingDetailsSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-green-600">Starting Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700"> Date</label>
          <input
            type="date"
            name="startingDate"
            value={formData.startingDate}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> KMs</label>
          <input
            type="number"
            name="startingKms"
            value={formData.startingKms}
            onChange={onChange}
            placeholder="Enter starting KMs"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> Diesel Liter</label>
          <input
            type="number"
            name="startingDieselLiter"
            value={formData.startingDieselLiter}
            onChange={onChange}
            placeholder="Enter starting diesel liters"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> Diesel Amount</label>
          <input
            type="number"
            name="startingDieselAmount"
            value={formData.startingDieselAmount}
            onChange={onChange}
            placeholder="Enter starting diesel amount"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> Mileage</label>
          <input
            type="number"
            name="startingMileage"
            value={formData.startingMileage}
            onChange={onChange}
            placeholder="Enter starting mileage"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
}