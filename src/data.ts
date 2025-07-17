import { Engineer, Candidate } from './types';

export const engineers: Engineer[] = [
  {
    id: 'eng-1',
    name: 'Sarah Chen',
    email: 'sarah.chen@speer.com',
    color: '#3B82F6',
  },
  {
    id: 'eng-2',
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@speer.com',
    color: '#10B981',
  },
  {
    id: 'eng-3',
    name: 'Maya Patel',
    email: 'maya.patel@speer.com',
    color: '#8B5CF6',
  },
];

export const candidates: Candidate[] = [
  {
    id: 'cand-1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    availableDay: 'Tuesday',
    startTime: '14:00',
    endTime: '17:00',
  },
  {
    id: 'cand-2',
    name: 'Emily Johnson',
    email: 'emily.johnson@email.com',
    availableDay: 'Wednesday',
    startTime: '10:00',
    endTime: '15:00',
  },
  {
    id: 'cand-3',
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    availableDay: 'Thursday',
    startTime: '09:00',
    endTime: '12:00',
  },
  {
    id: 'cand-4',
    name: 'Lisa Wang',
    email: 'lisa.wang@email.com',
    availableDay: 'Friday',
    startTime: '13:00',
    endTime: '16:30',
  },
];

// Engineer availability - true means available
export const engineerAvailability: Record<string, Record<string, boolean>> = {
  'eng-1': {
    'Monday-09:00': true, 'Monday-09:30': true, 'Monday-10:00': false, 'Monday-10:30': true,
    'Monday-11:00': true, 'Monday-11:30': false, 'Monday-12:00': false, 'Monday-12:30': false,
    'Monday-13:00': true, 'Monday-13:30': true, 'Monday-14:00': true, 'Monday-14:30': true,
    'Monday-15:00': true, 'Monday-15:30': false, 'Monday-16:00': true, 'Monday-16:30': true,
    'Monday-17:00': false, 'Monday-17:30': false,
    
    'Tuesday-09:00': false, 'Tuesday-09:30': true, 'Tuesday-10:00': true, 'Tuesday-10:30': true,
    'Tuesday-11:00': true, 'Tuesday-11:30': true, 'Tuesday-12:00': false, 'Tuesday-12:30': false,
    'Tuesday-13:00': true, 'Tuesday-13:30': true, 'Tuesday-14:00': true, 'Tuesday-14:30': true,
    'Tuesday-15:00': true, 'Tuesday-15:30': true, 'Tuesday-16:00': false, 'Tuesday-16:30': true,
    'Tuesday-17:00': true, 'Tuesday-17:30': false,
    
    'Wednesday-09:00': true, 'Wednesday-09:30': true, 'Wednesday-10:00': true, 'Wednesday-10:30': false,
    'Wednesday-11:00': true, 'Wednesday-11:30': true, 'Wednesday-12:00': false, 'Wednesday-12:30': false,
    'Wednesday-13:00': false, 'Wednesday-13:30': true, 'Wednesday-14:00': true, 'Wednesday-14:30': true,
    'Wednesday-15:00': false, 'Wednesday-15:30': true, 'Wednesday-16:00': true, 'Wednesday-16:30': true,
    'Wednesday-17:00': true, 'Wednesday-17:30': false,
    
    'Thursday-09:00': true, 'Thursday-09:30': true, 'Thursday-10:00': true, 'Thursday-10:30': true,
    'Thursday-11:00': false, 'Thursday-11:30': true, 'Thursday-12:00': false, 'Thursday-12:30': false,
    'Thursday-13:00': true, 'Thursday-13:30': false, 'Thursday-14:00': true, 'Thursday-14:30': true,
    'Thursday-15:00': true, 'Thursday-15:30': true, 'Thursday-16:00': true, 'Thursday-16:30': false,
    'Thursday-17:00': true, 'Thursday-17:30': false,
    
    'Friday-09:00': false, 'Friday-09:30': true, 'Friday-10:00': true, 'Friday-10:30': true,
    'Friday-11:00': true, 'Friday-11:30': true, 'Friday-12:00': false, 'Friday-12:30': false,
    'Friday-13:00': true, 'Friday-13:30': true, 'Friday-14:00': true, 'Friday-14:30': false,
    'Friday-15:00': true, 'Friday-15:30': true, 'Friday-16:00': true, 'Friday-16:30': false,
    'Friday-17:00': false, 'Friday-17:30': false,
  },
  'eng-2': {
    'Monday-09:00': false, 'Monday-09:30': true, 'Monday-10:00': true, 'Monday-10:30': false,
    'Monday-11:00': true, 'Monday-11:30': true, 'Monday-12:00': false, 'Monday-12:30': false,
    'Monday-13:00': false, 'Monday-13:30': true, 'Monday-14:00': true, 'Monday-14:30': true,
    'Monday-15:00': true, 'Monday-15:30': true, 'Monday-16:00': false, 'Monday-16:30': true,
    'Monday-17:00': true, 'Monday-17:30': false,
    
    'Tuesday-09:00': true, 'Tuesday-09:30': false, 'Tuesday-10:00': true, 'Tuesday-10:30': true,
    'Tuesday-11:00': false, 'Tuesday-11:30': true, 'Tuesday-12:00': false, 'Tuesday-12:30': false,
    'Tuesday-13:00': true, 'Tuesday-13:30': true, 'Tuesday-14:00': true, 'Tuesday-14:30': false,
    'Tuesday-15:00': true, 'Tuesday-15:30': true, 'Tuesday-16:00': true, 'Tuesday-16:30': true,
    'Tuesday-17:00': false, 'Tuesday-17:30': false,
    
    'Wednesday-09:00': true, 'Wednesday-09:30': true, 'Wednesday-10:00': true, 'Wednesday-10:30': true,
    'Wednesday-11:00': false, 'Wednesday-11:30': true, 'Wednesday-12:00': false, 'Wednesday-12:30': false,
    'Wednesday-13:00': true, 'Wednesday-13:30': false, 'Wednesday-14:00': true, 'Wednesday-14:30': true,
    'Wednesday-15:00': true, 'Wednesday-15:30': false, 'Wednesday-16:00': true, 'Wednesday-16:30': true,
    'Wednesday-17:00': false, 'Wednesday-17:30': false,
    
    'Thursday-09:00': false, 'Thursday-09:30': true, 'Thursday-10:00': true, 'Thursday-10:30': false,
    'Thursday-11:00': true, 'Thursday-11:30': false, 'Thursday-12:00': false, 'Thursday-12:30': false,
    'Thursday-13:00': true, 'Thursday-13:30': true, 'Thursday-14:00': false, 'Thursday-14:30': true,
    'Thursday-15:00': true, 'Thursday-15:30': true, 'Thursday-16:00': true, 'Thursday-16:30': true,
    'Thursday-17:00': false, 'Thursday-17:30': false,
    
    'Friday-09:00': true, 'Friday-09:30': true, 'Friday-10:00': false, 'Friday-10:30': true,
    'Friday-11:00': true, 'Friday-11:30': false, 'Friday-12:00': false, 'Friday-12:30': false,
    'Friday-13:00': true, 'Friday-13:30': true, 'Friday-14:00': true, 'Friday-14:30': true,
    'Friday-15:00': false, 'Friday-15:30': true, 'Friday-16:00': true, 'Friday-16:30': true,
    'Friday-17:00': true, 'Friday-17:30': false,
  },
  'eng-3': {
    'Monday-09:00': true, 'Monday-09:30': false, 'Monday-10:00': true, 'Monday-10:30': true,
    'Monday-11:00': false, 'Monday-11:30': true, 'Monday-12:00': false, 'Monday-12:30': false,
    'Monday-13:00': true, 'Monday-13:30': true, 'Monday-14:00': false, 'Monday-14:30': true,
    'Monday-15:00': true, 'Monday-15:30': true, 'Monday-16:00': true, 'Monday-16:30': false,
    'Monday-17:00': true, 'Monday-17:30': false,
    
    'Tuesday-09:00': true, 'Tuesday-09:30': true, 'Tuesday-10:00': false, 'Tuesday-10:30': true,
    'Tuesday-11:00': true, 'Tuesday-11:30': false, 'Tuesday-12:00': false, 'Tuesday-12:30': false,
    'Tuesday-13:00': false, 'Tuesday-13:30': true, 'Tuesday-14:00': false, 'Tuesday-14:30': true,
    'Tuesday-15:00': true, 'Tuesday-15:30': false, 'Tuesday-16:00': true, 'Tuesday-16:30': false,
    'Tuesday-17:00': true, 'Tuesday-17:30': false,
    
    'Wednesday-09:00': false, 'Wednesday-09:30': true, 'Wednesday-10:00': false, 'Wednesday-10:30': true,
    'Wednesday-11:00': true, 'Wednesday-11:30': false, 'Wednesday-12:00': false, 'Wednesday-12:30': false,
    'Wednesday-13:00': true, 'Wednesday-13:30': true, 'Wednesday-14:00': true, 'Wednesday-14:30': false,
    'Wednesday-15:00': true, 'Wednesday-15:30': true, 'Wednesday-16:00': false, 'Wednesday-16:30': true,
    'Wednesday-17:00': true, 'Wednesday-17:30': false,
    
    'Thursday-09:00': true, 'Thursday-09:30': false, 'Thursday-10:00': false, 'Thursday-10:30': true,
    'Thursday-11:00': true, 'Thursday-11:30': true, 'Thursday-12:00': false, 'Thursday-12:30': false,
    'Thursday-13:00': false, 'Thursday-13:30': true, 'Thursday-14:00': true, 'Thursday-14:30': false,
    'Thursday-15:00': true, 'Thursday-15:30': false, 'Thursday-16:00': true, 'Thursday-16:30': true,
    'Thursday-17:00': false, 'Thursday-17:30': false,
    
    'Friday-09:00': true, 'Friday-09:30': true, 'Friday-10:00': true, 'Friday-10:30': false,
    'Friday-11:00': false, 'Friday-11:30': true, 'Friday-12:00': false, 'Friday-12:30': false,
    'Friday-13:00': false, 'Friday-13:30': true, 'Friday-14:00': false, 'Friday-14:30': true,
    'Friday-15:00': true, 'Friday-15:30': false, 'Friday-16:00': false, 'Friday-16:30': true,
    'Friday-17:00': true, 'Friday-17:30': false,
  },
};