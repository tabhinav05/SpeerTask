import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Candidate, Engineer, Interview } from '../types';
import { generateAvailabilitySlots } from '../utils/scheduling';

interface Props {
  selectedCandidate: Candidate | null;
  interviews: Interview[];
  duration: number;
  filterEngineerId: string | null;
  onSchedule: (day: string, time: string, engineers: Engineer[]) => void;
}

export const Calendar: React.FC<Props> = ({
  selectedCandidate,
  interviews,
  duration,
  filterEngineerId,
  onSchedule,
}) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', 
                 '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

  const availabilitySlots = generateAvailabilitySlots(
    selectedCandidate,
    interviews,
    duration,
    filterEngineerId || undefined
  );

  const getSlotData = (day: string, time: string) => {
    return availabilitySlots.find(slot => slot.day === day && slot.time === time);
  };

  const getSlotStatus = (day: string, time: string) => {
    const slot = getSlotData(day, time);
    if (!slot || !selectedCandidate) return 'disabled';
    
    if (slot.isBooked) return 'booked';
    if (slot.candidateAvailable && slot.availableEngineers.length > 0) return 'available';
    return 'unavailable';
  };

  const handleSlotClick = (day: string, time: string) => {
    const slot = getSlotData(day, time);
    if (!slot || !selectedCandidate) return;
    
    if (slot.candidateAvailable && slot.availableEngineers.length > 0 && !slot.isBooked) {
      onSchedule(day, time, slot.availableEngineers);
    }
  };

  const getSlotColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 border-green-300 hover:bg-green-200 cursor-pointer text-green-800';
      case 'booked': return 'bg-red-100 border-red-300 text-red-800';
      case 'unavailable': return 'bg-gray-100 border-gray-300 text-gray-500';
      default: return 'bg-gray-50 border-gray-200 text-gray-400';
    }
  };

  const getSlotContent = (day: string, time: string) => {
    const slot = getSlotData(day, time);
    const status = getSlotStatus(day, time);
    
    if (status === 'booked') return '✓';
    if (status === 'available' && slot) {
      return `${slot.availableEngineers.length} eng`;
    }
    return '';
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="flex items-center gap-3 p-6 border-b">
        <CalendarIcon className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold">Weekly Calendar</h2>
        <span className="text-sm text-gray-500">
          ({duration} min slots)
        </span>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-6 gap-2 mb-6">
          <div></div>
          {days.map(day => (
            <div key={day} className="font-medium text-center text-sm p-2 text-gray-700">
              {day}
            </div>
          ))}
          
          {times.map(time => (
            <React.Fragment key={time}>
              <div className="text-xs text-gray-500 p-2 text-right font-mono">
                {time}
              </div>
              {days.map(day => {
                const status = getSlotStatus(day, time);
                const content = getSlotContent(day, time);
                
                return (
                  <button
                    key={`${day}-${time}`}
                    onClick={() => handleSlotClick(day, time)}
                    className={`h-12 text-xs border rounded transition-colors ${getSlotColor(status)}`}
                    disabled={status !== 'available'}
                    title={
                      status === 'available' 
                        ? `Available - ${getSlotData(day, time)?.availableEngineers.map(e => e.name).join(', ')}`
                        : status === 'booked' 
                        ? 'Already booked'
                        : 'Not available'
                    }
                  >
                    <div className="font-medium">{content}</div>
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
            <span>Available (shows engineer count)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
            <span>Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  );
};