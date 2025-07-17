import React from 'react';
import { User } from 'lucide-react';
import { Candidate } from '../types';

interface Props {
  candidates: Candidate[];
  selectedCandidate: Candidate | null;
  onSelect: (candidate: Candidate | null) => void;
}

export const CandidateSelector: React.FC<Props> = ({
  candidates,
  selectedCandidate,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <User className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Select Candidate</h2>
      </div>
      
      <select
        value={selectedCandidate?.id || ''}
        onChange={(e) => {
          const candidate = candidates.find(c => c.id === e.target.value);
          onSelect(candidate || null);
        }}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Choose a candidate...</option>
        {candidates.map((candidate) => (
          <option key={candidate.id} value={candidate.id}>
            {candidate.name}
          </option>
        ))}
      </select>
      
      {selectedCandidate && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Candidate Availability</h4>
          <p className="text-blue-700 text-sm">
            <strong>{selectedCandidate.name}</strong> is available on{' '}
            <strong>{selectedCandidate.availableDay}</strong> from{' '}
            <strong>{selectedCandidate.startTime}</strong> to{' '}
            <strong>{selectedCandidate.endTime}</strong>
          </p>
          <p className="text-blue-600 text-xs mt-1">{selectedCandidate.email}</p>
        </div>
      )}
    </div>
  );
};