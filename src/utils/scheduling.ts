import { Candidate, Engineer, Interview, AvailabilitySlot } from '../types';
import { engineerAvailability, engineers } from '../data';

export const isTimeInRange = (time: string, startTime: string, endTime: string): boolean => {
  const [hour, minute] = time.split(':').map(Number);
  const [startH, startM] = startTime.split(':').map(Number);
  const [endH, endM] = endTime.split(':').map(Number);
  
  const timeMinutes = hour * 60 + minute;
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;
  
  return timeMinutes >= startMinutes && timeMinutes < endMinutes;
};

export const isCandidateAvailable = (candidate: Candidate, day: string, time: string): boolean => {
  if (candidate.availableDay !== day) return false;
  return isTimeInRange(time, candidate.startTime, candidate.endTime);
};

export const getAvailableEngineers = (day: string, time: string, filterEngineerId?: string): Engineer[] => {
  const availableEngineers: Engineer[] = [];
  const key = `${day}-${time}`;
  
  Object.entries(engineerAvailability).forEach(([engineerId, availability]) => {
    if (filterEngineerId && engineerId !== filterEngineerId) return;
    
    if (availability[key]) {
      const engineer = engineers.find(e => e.id === engineerId);
      if (engineer) {
        availableEngineers.push(engineer);
      }
    }
  });
  
  return availableEngineers;
};

export const isSlotBooked = (day: string, time: string, duration: number, interviews: Interview[]): boolean => {
  return interviews.some(interview => {
    if (interview.day !== day) return false;
    
    const [interviewHour, interviewMinute] = interview.time.split(':').map(Number);
    const [slotHour, slotMinute] = time.split(':').map(Number);
    
    const interviewStart = interviewHour * 60 + interviewMinute;
    const interviewEnd = interviewStart + interview.duration;
    const slotStart = slotHour * 60 + slotMinute;
    const slotEnd = slotStart + duration;
    
    // Check for overlap
    return (slotStart < interviewEnd && slotEnd > interviewStart);
  });
};

export const generateAvailabilitySlots = (
  candidate: Candidate | null,
  interviews: Interview[],
  duration: number,
  filterEngineerId?: string
): AvailabilitySlot[] => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', 
                 '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
  
  const slots: AvailabilitySlot[] = [];
  
  days.forEach(day => {
    times.forEach(time => {
      const candidateAvailable = candidate ? isCandidateAvailable(candidate, day, time) : false;
      const availableEngineers = getAvailableEngineers(day, time, filterEngineerId);
      const isBooked = isSlotBooked(day, time, duration, interviews);
      
      slots.push({
        day,
        time,
        candidateAvailable,
        availableEngineers,
        isBooked,
      });
    });
  });
  
  return slots;
};