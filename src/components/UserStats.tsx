import React from 'react';
import { useGame } from '../context/GameContext';
import { useDifficulty } from '../context/DifficultyContext';

export function UserStats() {
  const { user } = useGame();
  const { difficulty, toggleDifficulty } = useDifficulty();
  const levelProgress = (user.points % 1000) / 1000;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-3 mb-4 sticky top-0 z-10">
      <div className="flex items-center justify-between gap-2">
        {/* Level and Points */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-500">Lvl</span>
            <span className="text-lg font-bold text-blue-600">{user.level}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-lg font-bold text-yellow-500">{user.points}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Difficulty Toggle */}
          <button
            onClick={toggleDifficulty}
            className="relative inline-flex items-center gap-2"
            role="switch"
            aria-checked={difficulty === 'hard'}
          >
            <div className={`
              w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out
              ${difficulty === 'hard' ? 'bg-red-100' : 'bg-green-100'}
            `}>
              <div className={`
                w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out
                ${difficulty === 'hard' ? 'translate-x-7 bg-red-500' : 'translate-x-0 bg-green-500'}
              `} />
            </div>
            <span className={`text-sm font-medium ${
              difficulty === 'hard' ? 'text-red-600' : 'text-green-600'
            }`}>
              {difficulty === 'hard' ? 'Schwer' : 'Einfach'}
            </span>
          </button>

          {/* Streak */}
          <div className="flex items-center">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
            </svg>
            <span className="text-lg font-bold text-orange-500 ml-1">{user.currentStreak}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg font-bold text-purple-500 ml-1">{user.highestStreak}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-2">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${levelProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
} 