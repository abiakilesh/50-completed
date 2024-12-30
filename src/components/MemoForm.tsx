import React from 'react';
import { X, Save } from 'lucide-react';
import { MemoEntry } from '../types';
import { StartingDetailsSection } from './StartingDetailsSection';
import { EndingDetailsSection } from './EndingDetailsSection';
import { OtherChargesSection } from './OtherChargesSection';
import { FinancialSection } from './FinancialSection';

interface MemoFormProps {
  formData: MemoEntry;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MemoForm({ formData, onClose, onSubmit, onChange }: MemoFormProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Entry</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <StartingDetailsSection formData={formData} onChange={onChange} />
          <EndingDetailsSection formData={formData} onChange={onChange} />
          <OtherChargesSection formData={formData} onChange={onChange} />
          <FinancialSection formData={formData} onChange={onChange} />

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Save Entry
          </button>
        </form>
      </div>
    </div>
  );
}