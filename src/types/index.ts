export interface Task {
  id: string;
  type: 'multiple_choice' | 'text' | 'number' | 'formula';
  category: string;
  question: string;
  correctAnswer: string | number;
  options?: string[];
  hints: string[];
  points: number;
  difficulty: 'easy' | 'hard';
}

export interface User {
  level: number;
  points: number;
  currentStreak: number;
  highestStreak: number;
  badges: Badge[];
  completedTasks: string[];
  difficulty: 'easy' | 'hard';
  availableTasks: string[]; // IDs der noch nicht gelösten Aufgaben
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  earned: boolean;
}

export interface GameState {
  currentTask: Task | null;
  timeStarted: number | null;
  attempts: number;
  streak: number;
} 