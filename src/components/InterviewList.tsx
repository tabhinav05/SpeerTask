import React from 'react';
import { Calendar, Trash2, User, Users } from 'lucide-react';
import { Interview, Candidate, Engineer } from '../types';

interface Props {
  interviews: Interview[];
  candidates: Candidate[];
  engineers: Engineer[];
  onRemove: (id: string) => void;
}

export const InterviewList: React.FC<Props> = ({
  interviews,
  candidates,
  engineers,
  onRemove,
}) => {
  const getCandidate = (id: string) => candidates.find(c => c.id === id);
  const getEngineer = (id: string) => engineers.find(e => e.id === id);

  if (interviews.length === 0) {
    return (
      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="h-5 w-5 text-orange-600" />
          <h2 className="text-lg font-semibold">Scheduled Interviews</h2>
        </div>
        <div className="text-center py-8">
          <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No interviews scheduled yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Select a candidate and click on available time slots to schedule interviews
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="flex items-center gap-3 p-6 border-b">
        <Calendar className="h-5 w-5 text-orange-600" />
        <h2 className="text-lg font-semibold">Scheduled Interviews</h2>
        <span className="ml-auto bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
          {interviews.length} interview{interviews.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      <div className="p-6 space-y-3">
        {interviews.map((interview) => {
          const candidate = getCandidate(interview.candidateId);
          const engineer = getEngineer(interview.engineerId);
          
          return (
            <div key={interview.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-gray-900">{candidate?.name}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-600">with {engineer?.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>
                    <strong>{interview.day}</strong> at <strong>{interview.time}</strong>
                  </span>
                  <span>•</span>
                  <span>{interview.duration} minutes</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(interview.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Cancel interview"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};