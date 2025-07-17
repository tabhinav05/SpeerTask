import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { CandidateSelector } from './components/CandidateSelector';
import { EngineerFilter } from './components/EngineerFilter';
import { DurationSelector } from './components/DurationSelector';
import { Calendar as CalendarComponent } from './components/Calendar';
import { ConfirmationModal } from './components/ConfirmationModal';
import { InterviewList } from './components/InterviewList';
import { candidates, engineers } from './data';
import { Candidate, Engineer, Interview } from './types';

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [selectedEngineerId, setSelectedEngineerId] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(30);
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [pendingInterview, setPendingInterview] = useState<{
    day: string;
    time: string;
    availableEngineers: Engineer[];
  } | null>(null);

  const handleSchedule = (day: string, time: string, availableEngineers: Engineer[]) => {
    setPendingInterview({ day, time, availableEngineers });
    setShowModal(true);
  };

  const confirmInterview = (engineer: Engineer) => {
    if (!selectedCandidate || !pendingInterview) return;

    const newInterview: Interview = {
      id: `interview-${Date.now()}`,
      candidateId: selectedCandidate.id,
      engineerId: engineer.id,
      day: pendingInterview.day,
      time: pendingInterview.time,
      duration: duration,
    };

    setInterviews([...interviews, newInterview]);
    setShowModal(false);
    setPendingInterview(null);
  };

  const cancelInterview = () => {
    setShowModal(false);
    setPendingInterview(null);
  };

  const removeInterview = (id: string) => {
    setInterviews(interviews.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-xl">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SpeerCheck</h1>
              <p className="text-gray-600">Live Interview Scheduler</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <CandidateSelector
            candidates={candidates}
            selectedCandidate={selectedCandidate}
            onSelect={setSelectedCandidate}
          />
          
          <EngineerFilter
            engineers={engineers}
            selectedEngineerId={selectedEngineerId}
            onSelect={setSelectedEngineerId}
          />
          
          <DurationSelector
            duration={duration}
            onSelect={setDuration}
          />
        </div>

        {selectedCandidate ? (
          <div className="space-y-6">
            <CalendarComponent
              selectedCandidate={selectedCandidate}
              interviews={interviews}
              duration={duration}
              filterEngineerId={selectedEngineerId}
              onSchedule={handleSchedule}
            />
            
            <InterviewList
              interviews={interviews}
              candidates={candidates}
              engineers={engineers}
              onRemove={removeInterview}
            />
          </div>
        ) : (
          <div className="bg-white rounded-lg border p-12 text-center">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Select a Candidate to Get Started
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Choose a candidate from the dropdown above to view their availability 
              and schedule interviews with available engineers.
            </p>
          </div>
        )}
      </div>

      {showModal && pendingInterview && selectedCandidate && (
        <ConfirmationModal
          isOpen={showModal}
          candidate={selectedCandidate}
          availableEngineers={pendingInterview.availableEngineers}
          day={pendingInterview.day}
          time={pendingInterview.time}
          duration={duration}
          onConfirm={confirmInterview}
          onCancel={cancelInterview}
        />
      )}
    </div>
  );
}

export default App;