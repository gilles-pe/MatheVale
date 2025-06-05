import React, { createContext, useContext, useState } from 'react';

type Difficulty = 'easy' | 'hard';

interface DifficultyContextType {
  difficulty: Difficulty;
  toggleDifficulty: () => void;
}

const DifficultyContext = createContext<DifficultyContextType | undefined>(undefined);

export function DifficultyProvider({ children }: { children: React.ReactNode }) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  const toggleDifficulty = () => {
    setDifficulty(prev => prev === 'easy' ? 'hard' : 'easy');
  };

  return (
    <DifficultyContext.Provider value={{ difficulty, toggleDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
}

export function useDifficulty() {
  const context = useContext(DifficultyContext);
  if (context === undefined) {
    throw new Error('useDifficulty must be used within a DifficultyProvider');
  }
  return context;
} 