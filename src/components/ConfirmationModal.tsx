import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Candidate, Engineer } from '../types';

interface Props {
  isOpen: boolean;
  candidate: Candidate;
  availableEngineers: Engineer[];
  day: string;
  time: string;
  duration: number;
  onConfirm: (engineer: Engineer) => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<Props> = ({
  isOpen,
  candidate,
  availableEngineers,
  day,
  time,
  duration,
  onConfirm,
  onCancel,
}) => {
  const [selectedEngineer, setSelectedEngineer] = useState<Engineer | null>(
    availableEngineers.length > 0 ? availableEngineers[0] : null
  );

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (selectedEngineer) {
      onConfirm(selectedEngineer);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
      <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
      <CheckCircle className="h-6 w-6 text-green-600" />
      <h2 className="text-xl font-semibold">Confirm Interview</h2>
      <button onClick={onCancel} className="ml-auto hover:bg-gray-100 p-1 rounded">
        <X className="h-5 w-5 text-gray-500" />
      </button>
      </div>
      
      <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Candidate
        </label>
        <p className="text-gray-900">{candidate.name}</p>
        <p className="text-sm text-gray-500">{candidate.email}</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Engineer
        </label>
        <select
        value={selectedEngineer?.id || ''}
        onChange={(e) => {
        const engineer = availableEngineers.find(eng => eng.id === e.target.value);
        setSelectedEngineer(engineer || null);
        }}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
        {availableEngineers.map((engineer) => (
        <option key={engineer.id} value={engineer.id}>
        {engineer.name}
        </option>
        ))}
        </select>
        {selectedEngineer && (
        <p className="text-sm text-gray-500 mt-1">{selectedEngineer.email}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Schedule
        </label>
        <p className="text-gray-900">
        <strong>{day}</strong> at <strong>{time}</strong>
        </p>
        <p className="text-sm text-gray-500">Duration: {duration} minutes</p>
      </div>
      </div>
      
      <div className="flex gap-3">
      <button
        onClick={onCancel}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={handleConfirm}
        disabled={!selectedEngineer}
        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        Confirm Interview
      </button>
      </div>
      </div>
      </div>
    </div>
  );
};