import React from 'react';
import { Clock } from 'lucide-react';

interface Props {
  duration: number;
  onSelect: (duration: number) => void;
}

export const DurationSelector: React.FC<Props> = ({ duration, onSelect }) => {
  const durations = [
    { value: 15, label: '15 minutes' },
    { value: 30, label: '30 minutes' },
    { value: 60, label: '60 minutes' },
  ];

  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Clock className="h-5 w-5 text-purple-600" />
        <h2 className="text-lg font-semibold">Interview Duration</h2>
      </div>
      
      <div className="flex gap-2">
        {durations.map((d) => (
          <button
            key={d.value}
            onClick={() => onSelect(d.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              duration === d.value
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        <p className="text-purple-700 text-sm">
          Selected duration: <strong>{duration} minutes</strong>
        </p>
      </div>
    </div>
  );
};