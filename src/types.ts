export interface Engineer {
  id: string;
  name: string;
  email: string;
  color: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  availableDay: string;
  startTime: string;
  endTime: string;
}

export interface TimeSlot {
  day: string;
  time: string;
  hour: number;
  minute: number;
}

export interface Interview {
  id: string;
  candidateId: string;
  engineerId: string;
  day: string;
  time: string;
  duration: number;
}

export interface AvailabilitySlot {
  day: string;
  time: string;
  candidateAvailable: boolean;
  availableEngineers: Engineer[];
  isBooked: boolean;
}