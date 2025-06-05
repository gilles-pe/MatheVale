import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, Task, GameState } from '../types';
import { tasks } from '../data/tasks';
import { useDifficulty } from './DifficultyContext';

interface GameContextType {
  user: User;
  gameState: GameState;
  startTask: (taskId?: string) => void;
  submitAnswer: (answer: string | number) => boolean;
  requestHint: () => string | null;
}

const initialUser: User = {
  level: 1,
  points: 0,
  currentStreak: 0,
  highestStreak: 0,
  badges: [],
  completedTasks: [],
  difficulty: 'easy',
  availableTasks: tasks.map(t => t.id)
};

const initialGameState: GameState = {
  currentTask: null,
  timeStarted: null,
  attempts: 0,
  streak: 0,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

type Action =
  | { type: 'START_TASK'; payload: { task: Task } }
  | { type: 'SUBMIT_ANSWER'; payload: { correct: boolean } }
  | { type: 'REQUEST_HINT' }
  | { type: 'UPDATE_USER'; payload: Partial<User> };

function gameReducer(state: { user: User; gameState: GameState }, action: Action) {
  switch (action.type) {
    case 'START_TASK':
      return {
        ...state,
        gameState: {
          ...initialGameState,
          currentTask: action.payload.task,
          timeStarted: Date.now(),
        },
      };
    case 'SUBMIT_ANSWER':
      const newStreak = action.payload.correct ? state.gameState.streak + 1 : 0;
      const taskId = state.gameState.currentTask?.id;
      
      // Nur wenn die Antwort richtig ist und die Aufgabe noch nicht gelöst wurde
      const isNewCompletion = action.payload.correct && 
        taskId && 
        !state.user.completedTasks.includes(taskId);

      // Level-Up alle 1000 Punkte
      const currentLevel = Math.floor(state.user.points / 1000) + 1;
      const newPoints = state.user.points + (isNewCompletion ? (state.gameState.currentTask?.points || 0) * (1 + newStreak * 0.1) : 0);
      const newLevel = Math.floor(newPoints / 1000) + 1;

      return {
        ...state,
        user: {
          ...state.user,
          points: newPoints,
          level: newLevel,
          currentStreak: newStreak,
          highestStreak: Math.max(state.user.highestStreak, newStreak),
          completedTasks: isNewCompletion ? [...state.user.completedTasks, taskId] : state.user.completedTasks,
          availableTasks: isNewCompletion 
            ? state.user.availableTasks.filter(id => id !== taskId)
            : state.user.availableTasks
        },
        gameState: {
          ...state.gameState,
          attempts: state.gameState.attempts + 1,
          streak: newStreak,
        },
      };
    case 'REQUEST_HINT':
      return {
        ...state,
        gameState: {
          ...state.gameState,
          attempts: state.gameState.attempts + 1,
        },
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, {
    user: initialUser,
    gameState: initialGameState,
  });

  const { difficulty } = useDifficulty();

  useEffect(() => {
    const savedUser = localStorage.getItem('mathevale-user');
    if (savedUser) {
      dispatch({
        type: 'UPDATE_USER',
        payload: JSON.parse(savedUser),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mathevale-user', JSON.stringify(state.user));
  }, [state.user]);

  const getRandomTask = (excludeCompleted: boolean = true, category?: string) => {
    // Filter tasks by difficulty and optionally by category
    let availableTasks = tasks.filter(task => 
      task.difficulty === difficulty &&
      (!category || task.category === category)
    );

    if (excludeCompleted) {
      availableTasks = availableTasks.filter(task => 
        !state.user.completedTasks.includes(task.id)
      );
    }

    // If no tasks available with current filters, remove the completed filter
    if (availableTasks.length === 0) {
      availableTasks = tasks.filter(task => 
        task.difficulty === difficulty &&
        (!category || task.category === category)
      );
    }

    // If still no tasks, return null
    if (availableTasks.length === 0) {
      return null;
    }

    // Get random task from available tasks
    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    return availableTasks[randomIndex];
  };

  const startTask = (taskId?: string) => {
    let task;
    if (taskId) {
      // Wenn eine spezifische Aufgabe angefordert wurde
      task = tasks.find((t) => t.id === taskId && t.difficulty === difficulty);
    }
    if (!task) {
      // Wenn keine spezifische Aufgabe gefunden wurde oder keine angefordert wurde
      task = getRandomTask(true);
    }
    if (task) {
      dispatch({ type: 'START_TASK', payload: { task } });
    }
  };

  const submitAnswer = (answer: string | number) => {
    if (!state.gameState.currentTask) return false;

    const normalizedAnswer = String(answer).trim().toLowerCase().replace(/\s+/g, ' ');
    const normalizedCorrectAnswer = String(state.gameState.currentTask.correctAnswer)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    const isCorrect = normalizedAnswer === normalizedCorrectAnswer;
    dispatch({ type: 'SUBMIT_ANSWER', payload: { correct: isCorrect } });
    
    if (isCorrect) {
      // Automatisch neue Aufgabe nach kurzer Verzögerung starten
      setTimeout(() => {
        const nextTask = getRandomTask(true, state.gameState.currentTask?.category);
        if (nextTask) {
          dispatch({ type: 'START_TASK', payload: { task: nextTask } });
        }
      }, 1500);
    }
    
    return isCorrect;
  };

  const requestHint = () => {
    if (!state.gameState.currentTask) return null;
    dispatch({ type: 'REQUEST_HINT' });
    return state.gameState.currentTask.hints[Math.min(state.gameState.attempts - 1, state.gameState.currentTask.hints.length - 1)] || null;
  };

  return (
    <GameContext.Provider
      value={{
        user: state.user,
        gameState: state.gameState,
        startTask,
        submitAnswer,
        requestHint,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
} 