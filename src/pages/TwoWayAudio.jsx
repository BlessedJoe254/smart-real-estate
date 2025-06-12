import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TwoWayAudio = () => {
  const navigate = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const streamRef = useRef(null);

  const startSpeaking = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setIsSpeaking(true);
      console.log('Microphone activated');
    } catch (err) {
      console.error('Microphone access denied or error:', err);
      alert('Microphone access denied.');
    }
  };

  const stopSpeaking = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      console.log('Microphone stopped');
    }
    setIsSpeaking(false);
  };

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-bold mb-4 text-orange-400">Two-Way Audio Communication</h1>
      <p className="mb-6 text-gray-300">Communicate with visitors using your microphone.</p>

      <div className="flex gap-4 mb-8">
        <button
          onClick={startSpeaking}
          disabled={isSpeaking}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            isSpeaking
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          Start Speaking
        </button>

        <button
          onClick={stopSpeaking}
          disabled={!isSpeaking}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            !isSpeaking
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          Stop Speaking
        </button>
      </div>

      <button
        onClick={() => navigate('/doorbell')}
        className="mt-4 px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded text-gray-300"
      >
        Back to Doorbell
      </button>
    </div>
  );
};

export default TwoWayAudio;
