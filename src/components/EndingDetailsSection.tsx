import React from 'react';
import { MemoEntry } from '../types';

interface EndingDetailsSectionProps {
  formData: MemoEntry;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EndingDetailsSection({ formData, onChange }: EndingDetailsSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-green-600">Ending Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700"> Date</label>
          <input
            type="date"
            name="endingDate"
            value={formData.endingDate}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> KMs</label>
          <input
            type="number"
            name="endingKms"
            value={formData.endingKms}
            onChange={onChange}
            placeholder="Enter ending KMs"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> Diesel Liter</label>
          <input
            type="number"
            name="endingDieselLiter"
            value={formData.endingDieselLiter}
            onChange={onChange}
            placeholder="Enter ending diesel liters"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> Diesel Amount</label>
          <input
            type="number"
            name="endingDieselAmount"
            value={formData.endingDieselAmount}
            onChange={onChange}
            placeholder="Enter ending diesel amount"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700"> Mileage</label>
          <input
            type="number"
            name="endingMileage"
            value={formData.endingMileage}
            onChange={onChange}
            placeholder="Enter ending mileage"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
}