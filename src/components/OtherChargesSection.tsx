import React from 'react';
import { MemoEntry } from '../types';

interface OtherChargesSectionProps {
  formData: MemoEntry;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function OtherChargesSection({
  formData,
  onChange,
}: OtherChargesSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-green-600">Other Charges</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Labor Charge
          </label>
          <input
            type="number"
            name="laborCharge"
            value={formData.laborCharge}
            onChange={onChange}
            placeholder="Enter labor charge"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Driver Salary
          </label>
          <input
            type="number"
            name="drSalary"
            value={formData.drSalary}
            onChange={onChange}
            placeholder="Enter driver salary"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            RTO/PC
          </label>
          <input
            type="number"
            name="rtoPC"
            value={formData.rtoPC}
            onChange={onChange}
            placeholder="Enter RTO/PC charges"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            miscellaneous
          </label>
          <input
            type="number"
            name="miscellaneous"
            value={formData.miscellaneous}
            onChange={onChange}
            placeholder="Enter miscellaneous charges"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
}
