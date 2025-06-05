import React, { useState } from 'react';
import { Task } from '../types';
import { useGame } from '../context/GameContext';
import confetti from 'canvas-confetti';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { submitAnswer, requestHint } = useGame();
  const [answer, setAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normalisiere die Antwort (entferne Leerzeichen, Groß-/Kleinschreibung)
    const normalizedAnswer = answer.trim().toLowerCase().replace(/\s+/g, ' ');
    const normalizedCorrectAnswer = String(task.correctAnswer).trim().toLowerCase().replace(/\s+/g, ' ');
    
    const correct = normalizedAnswer === normalizedCorrectAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setAnswer('');
        setAttempts(0);
        setHint(null);
        setShowSolution(false);
        setIsCorrect(null);
      }, 1500);
    } else {
      setAttempts(prev => prev + 1);
      if (attempts < 2) {
        const newHint = requestHint();
        if (newHint) {
          setHint(newHint);
        }
      }
      setTimeout(() => setIsCorrect(null), 1500);
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setHint(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="space-y-6">
        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
          {task.category}
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{task.question}</h3>

          {/* Hint or Solution */}
          {hint && !showSolution && (
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <p className="text-amber-800 text-sm">{hint}</p>
                  {attempts >= 2 && (
                    <button
                      onClick={handleShowSolution}
                      className="mt-2 text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Lösung anzeigen
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-800">Die richtige Lösung ist:</p>
                  <p className="mt-1 text-blue-700">{task.correctAnswer}</p>
                  <p className="mt-2 text-sm text-blue-600">
                    Keine Sorge, beim nächsten Mal klappt es bestimmt! 💪
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Answer Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {task.type === 'multiple_choice' && task.options ? (
            <div className="grid gap-3">
              {task.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer
                    ${answer === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
                    }`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={answer === option}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center
                    ${answer === option
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                    }`}
                  >
                    {answer === option && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          ) : (
            <div className="relative">
              <input
                type={task.type === 'number' ? 'number' : 'text'}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Deine Antwort..."
                className={`w-full p-4 border-2 rounded-lg transition-all outline-none
                  ${isCorrect === true ? 'border-green-500 bg-green-50' :
                    isCorrect === false ? 'border-red-500 bg-red-50' :
                    'border-gray-200 focus:border-blue-500 focus:bg-blue-50/50'}`}
              />
              {isCorrect !== null && (
                <div className={`absolute right-4 top-1/2 -translate-y-1/2
                  ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    {isCorrect ? (
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    )}
                  </svg>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              className={`flex-1 p-4 rounded-lg font-medium transition-all
                ${answer
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              disabled={!answer}
            >
              Prüfen
            </button>
            {attempts === 0 && !showSolution && (
              <button
                type="button"
                onClick={() => {
                  const newHint = requestHint();
                  if (newHint) {
                    setHint(newHint);
                    setAttempts(1);
                  }
                }}
                className="flex-1 p-4 text-blue-600 bg-blue-50 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                Tipp
              </button>
            )}
          </div>
        </form>

        {/* Attempt Counter */}
        {attempts > 0 && !showSolution && (
          <div className="text-sm text-gray-500 text-center">
            {attempts === 1 ? 'Erster Versuch' : 'Zweiter Versuch'} - 
            {attempts >= 2 ? ' Du kannst dir die Lösung anzeigen lassen' : ' Noch ein Versuch'}
          </div>
        )}
      </div>
    </div>
  );
} 