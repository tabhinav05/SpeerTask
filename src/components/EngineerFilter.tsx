import React from 'react';
import { Users } from 'lucide-react';
import { Engineer } from '../types';

interface Props {
  engineers: Engineer[];
  selectedEngineerId: string | null;
  onSelect: (engineerId: string | null) => void;
}

export const EngineerFilter: React.FC<Props> = ({
  engineers,
  selectedEngineerId,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Users className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-semibold">Filter by Engineer</h2>
      </div>
      
      <select
        value={selectedEngineerId || ''}
        onChange={(e) => onSelect(e.target.value || null)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
      >
        <option value="">All Engineers</option>
        {engineers.map((engineer) => (
          <option key={engineer.id} value={engineer.id}>
            {engineer.name}
          </option>
        ))}
      </select>
      
      {selectedEngineerId && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Filtered Engineer</h4>
          <p className="text-green-700 text-sm">
            Showing availability for{' '}
            <strong>{engineers.find(e => e.id === selectedEngineerId)?.name}</strong>
          </p>
        </div>
      )}
    </div>
  );
};