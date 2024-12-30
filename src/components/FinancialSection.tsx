import React from 'react';
import { MemoEntry } from '../types';
import { calculateProfit, calculateTotalExpenses } from '../utils/calculations';

interface FinancialSectionProps {
  formData: MemoEntry;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FinancialSection({ formData, onChange }: FinancialSectionProps) {
  const totalExpenses = calculateTotalExpenses(
    formData.endingDieselAmount,
    formData.laborCharge,
    formData.drSalary,
    formData.rtoPC,
    formData.miscellaneous
  );
  
  const profit = calculateProfit(formData.totalCollection, totalExpenses);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-green-600">Financial Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Collection</label>
          <input
            type="number"
            name="totalCollection"
            value={formData.totalCollection}
            onChange={onChange}
            placeholder="Enter total collection"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Expenses</label>
          <input
            type="text"
            value={totalExpenses}
            readOnly
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profit/Loss
          </label>
          <input
            type="text"
            value={profit}
            readOnly
            className={`mt-1 block w-full rounded-md border px-3 py-2 ${
              parseFloat(profit) >= 0 
                ? 'text-green-600 border-green-300 bg-green-50' 
                : 'text-red-600 border-red-300 bg-red-50'
            }`}
          />
        </div>
      </div>
    </div>
  );
}