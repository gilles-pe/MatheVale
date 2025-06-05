'use client';

import React, { useState, useEffect } from 'react';
import { GameProvider, useGame } from '../context/GameContext';
import { DifficultyProvider, useDifficulty } from '../context/DifficultyContext';
import { TaskCard } from '../components/TaskCard';
import { UserStats } from '../components/UserStats';
import { tasks } from '../data/tasks';

function MainContent() {
  const [showCategories, setShowCategories] = useState(true);
  const { difficulty } = useDifficulty();
  const { gameState, startTask, user } = useGame();
  
  // Get all unique categories regardless of difficulty
  const allCategories = Array.from(new Set(tasks.map(task => task.category)));

  // Wenn der Schwierigkeitsgrad geändert wird, zurück zur Kategorieauswahl
  useEffect(() => {
    setShowCategories(true);
  }, [difficulty]);

  const handleTaskSelect = (category: string) => {
    const availableTasks = tasks.filter(t => 
      t.category === category && 
      t.difficulty === difficulty &&
      !user.completedTasks.includes(t.id)
    );
    
    // Wenn keine ungelösten Aufgaben mehr da sind, alle Aufgaben der Kategorie verwenden
    const taskPool = availableTasks.length > 0 
      ? availableTasks 
      : tasks.filter(t => t.category === category && t.difficulty === difficulty);

    if (taskPool.length > 0) {
      const randomTask = taskPool[Math.floor(Math.random() * taskPool.length)];
      startTask(randomTask.id);
      setShowCategories(false);
    }
  };

  const handleRandomTask = () => {
    startTask(); // Die startTask Funktion wählt selbst eine zufällige Aufgabe aus
    setShowCategories(false);
  };

  const handleBackToCategories = () => {
    setShowCategories(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-4 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          MatheVale
        </h1>

        <UserStats />

        {showCategories ? (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Wähle ein Thema ({difficulty === 'easy' ? 'Einfach' : 'Schwer'})
            </h2>
            <div className="grid gap-3">
              {allCategories.map((category) => {
                const categoryTasks = tasks.filter(t => 
                  t.category === category && t.difficulty === difficulty
                );
                const unsolvedTasks = categoryTasks.filter(t => !user.completedTasks.includes(t.id));
                
                return (
                  <button
                    key={category}
                    onClick={() => handleTaskSelect(category)}
                    className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all transform hover:scale-102 shadow-sm hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{category}</span>
                      <span className="text-sm text-gray-500">
                        {unsolvedTasks.length}/{categoryTasks.length} übrig
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleRandomTask}
              className="w-full mt-4 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-102 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Zufällige Aufgabe
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={handleBackToCategories}
              className="mb-4 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zur Übersicht
            </button>
            {gameState.currentTask && <TaskCard task={gameState.currentTask} />}
          </div>
        )}
      </div>
    </main>
  );
}

function AppContent() {
  return (
    <DifficultyProvider>
      <GameProvider>
        <MainContent />
      </GameProvider>
    </DifficultyProvider>
  );
}

export default AppContent; 