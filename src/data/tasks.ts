import { Task } from '../types';

export const tasks: Task[] = [
  // Einfache Aufgaben
  {
    id: 'rational-1',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche der folgenden Zahlen ist irrational?',
    correctAnswer: '√2',
    options: ['0.75', '√2', '-2.5', '3/4'],
    hints: [
      'Rationale Zahlen können als Bruch dargestellt werden',
      'Irrationale Zahlen haben unendlich, nicht periodische Dezimalstellen'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'rational-2',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche Zahl ist rational?',
    correctAnswer: '0.25',
    options: ['π', '0.25', '√3', 'e'],
    hints: [
      'Eine rationale Zahl kann als Bruch geschrieben werden',
      'Schau, ob die Zahl endlich oder periodisch ist'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'rational-4',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche Zahl ist rational?',
    correctAnswer: '0.333...',
    options: ['π', '0.333...', '√5', 'ln(2)'],
    hints: [
      'Eine rationale Zahl kann als Bruch geschrieben werden',
      '0.333... ist gleich 1/3'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'rational-5',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche Zahl ist irrational?',
    correctAnswer: '√7',
    options: ['0.5', '√7', '2.75', '-4/3'],
    hints: [
      'Rationale Zahlen können als Bruch dargestellt werden',
      'Wurzeln aus Primzahlen sind immer irrational'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'rational-6',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche Aussage ist richtig?',
    correctAnswer: 'Jede rationale Zahl ist als Dezimalzahl endlich oder periodisch',
    options: [
      'Jede rationale Zahl ist als Dezimalzahl endlich oder periodisch',
      'Alle Wurzeln sind irrational',
      'π ist rational',
      'Negative Zahlen sind immer irrational'
    ],
    hints: [
      'Denk an die Definition rationaler Zahlen',
      'Betrachte Beispiele wie 1/3 = 0.333...'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'number-range-1',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'Zu welchem Zahlenbereich gehört -5?',
    correctAnswer: 'Ganze Zahlen (ℤ)',
    options: ['Natürliche Zahlen (ℕ)', 'Ganze Zahlen (ℤ)', 'Rationale Zahlen (ℚ)', 'Irrationale Zahlen'],
    hints: [
      'Natürliche Zahlen sind positiv',
      'Ganze Zahlen können negativ sein'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'number-range-2',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'Welche Zahl gehört zu den natürlichen Zahlen?',
    correctAnswer: '42',
    options: ['-7', '0.5', '42', '-3.14'],
    hints: [
      'Natürliche Zahlen sind positive, ganze Zahlen',
      'Dezimalzahlen sind keine natürlichen Zahlen'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'number-range-3',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'Zu welchem Zahlenbereich gehört 0.75?',
    correctAnswer: 'Rationale Zahlen (ℚ)',
    options: ['Natürliche Zahlen (ℕ)', 'Ganze Zahlen (ℤ)', 'Rationale Zahlen (ℚ)', 'Irrationale Zahlen'],
    hints: [
      '0.75 kann als Bruch geschrieben werden',
      '0.75 = 3/4'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'number-range-4',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'Welcher Zahlenbereich enthält alle anderen?',
    correctAnswer: 'Reelle Zahlen (ℝ)',
    options: ['Natürliche Zahlen (ℕ)', 'Ganze Zahlen (ℤ)', 'Rationale Zahlen (ℚ)', 'Reelle Zahlen (ℝ)'],
    hints: [
      'Denk an die Mengenbeziehungen',
      'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-1',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √16',
    correctAnswer: 4,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 16?',
      '2 * 2 = 4, 4 * 4 = 16'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-2',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √25',
    correctAnswer: 5,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 25?',
      '5 * 5 = 25'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-3',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √81',
    correctAnswer: 9,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 81?',
      '9 * 9 = 81'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-4',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √100',
    correctAnswer: 10,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 100?',
      '10 * 10 = 100'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-5',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √144',
    correctAnswer: 12,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 144?',
      '12 * 12 = 144'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-6',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √49',
    correctAnswer: 7,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 49?',
      '7 * 7 = 49'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-7',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √36',
    correctAnswer: 6,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 36?',
      '6 * 6 = 36'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-8',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √64',
    correctAnswer: 8,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 64?',
      '8 * 8 = 64'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-9',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √121',
    correctAnswer: 11,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 121?',
      '11 * 11 = 121'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'sqrt-calc-10',
    type: 'number',
    category: 'Wurzelziehen',
    question: 'Berechne √169',
    correctAnswer: 13,
    hints: [
      'Welche Zahl mit sich selbst multipliziert ergibt 169?',
      '13 * 13 = 169'
    ],
    points: 100,
    difficulty: 'easy'
  },

  // Schwere Aufgaben
  {
    id: 'rational-3',
    type: 'text',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Beweise, dass √2 irrational ist. Welcher Widerspruch entsteht, wenn √2 = p/q wäre? (Antworte mit: "Wenn p²=2q², dann...")',
    correctAnswer: 'Wenn p²=2q², dann müssten p und q beide gerade sein, was im Widerspruch zur gekürzten Darstellung steht',
    hints: [
      'Nimm an, √2 = p/q wäre ein gekürzter Bruch',
      'Quadriere beide Seiten: 2 = p²/q²'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'rational-7',
    type: 'text',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Erkläre, warum die Summe einer rationalen und einer irrationalen Zahl immer irrational ist.',
    correctAnswer: 'Wäre die Summe rational, könnte man durch Subtraktion der rationalen Zahl eine rationale Darstellung der irrationalen Zahl erhalten',
    hints: [
      'Nimm an, r (rational) + i (irrational) = q (rational)',
      'Was passiert, wenn man r von beiden Seiten subtrahiert?'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'rational-8',
    type: 'text',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Ist das Produkt zweier irrationaler Zahlen immer irrational? Begründe mit einem Gegenbeispiel.',
    correctAnswer: 'Nein, √2 * √2 = 2 ist rational',
    hints: [
      'Denk an das Quadrat einer irrationalen Zahl',
      'Was ist √2 * √2?'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'rational-9',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche der folgenden Zahlen ist rational?',
    correctAnswer: '0.666...',
    options: ['π', '0.666...', '√7', 'e'],
    hints: [
      'Eine rationale Zahl kann als Bruch geschrieben werden',
      '0.666... = 2/3'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'rational-10',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche der folgenden Zahlen ist irrational?',
    correctAnswer: '√3',
    options: ['0.8', '√3', '15/7', '-1.25'],
    hints: [
      'Rationale Zahlen können als Bruch dargestellt werden',
      'Wurzeln aus Primzahlen sind immer irrational'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'rational-11',
    type: 'text',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Warum ist die Summe zweier rationaler Zahlen immer rational?',
    correctAnswer: 'Weil die Summe zweier Brüche wieder als Bruch dargestellt werden kann',
    hints: [
      'Was passiert, wenn man zwei Brüche addiert?',
      'Man kann sie auf einen gemeinsamen Nenner bringen'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'rational-12',
    type: 'multiple_choice',
    category: 'Rationale/Irrationale Zahlen',
    question: 'Welche Aussage ist FALSCH?',
    correctAnswer: 'Alle Dezimalzahlen sind rational',
    options: [
      'Alle Dezimalzahlen sind rational',
      'Alle Brüche sind rational',
      'Alle ganzen Zahlen sind rational',
      'Alle rationalen Zahlen sind als Bruch darstellbar'
    ],
    hints: [
      'Denk an π als Dezimalzahl',
      'Nicht alle Dezimalzahlen sind periodisch oder endlich'
    ],
    points: 150,
    difficulty: 'hard'
  },
  {
    id: 'number-range-7',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'Welche Zahl gehört NICHT zu den natürlichen Zahlen?',
    correctAnswer: '0',
    options: ['1', '42', '0', '7'],
    hints: [
      'Natürliche Zahlen sind positive, ganze Zahlen',
      'Die 0 ist keine natürliche Zahl'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'number-range-8',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'In welchem Zahlenbereich liegt -2.5?',
    correctAnswer: 'Rationale Zahlen (ℚ)',
    options: ['Natürliche Zahlen (ℕ)', 'Ganze Zahlen (ℤ)', 'Rationale Zahlen (ℚ)', 'Nur in Reellen Zahlen (ℝ)'],
    hints: [
      '-2.5 kann als Bruch geschrieben werden',
      '-2.5 = -5/2'
    ],
    points: 100,
    difficulty: 'easy'
  },
  {
    id: 'number-range-9',
    type: 'text',
    category: 'Zahlenbereiche',
    question: 'Erkläre den Unterschied zwischen ℕ und ℤ.',
    correctAnswer: 'ℕ enthält nur positive ganze Zahlen, ℤ enthält auch negative Zahlen und Null',
    hints: [
      'Denk an negative Zahlen',
      'Was ist mit der 0?'
    ],
    points: 150,
    difficulty: 'hard'
  },
  {
    id: 'number-range-10',
    type: 'multiple_choice',
    category: 'Zahlenbereiche',
    question: 'Welche Aussage ist richtig?',
    correctAnswer: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ',
    options: [
      'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ',
      'ℕ ⊂ ℚ ⊂ ℤ ⊂ ℝ',
      'ℤ ⊂ ℕ ⊂ ℚ ⊂ ℝ',
      'ℚ ⊂ ℤ ⊂ ℕ ⊂ ℝ'
    ],
    hints: [
      'Jede natürliche Zahl ist auch eine ganze Zahl',
      'Jede ganze Zahl ist auch eine rationale Zahl'
    ],
    points: 150,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-def-1',
    type: 'text',
    category: 'Wurzeln Definition',
    question: 'Was ist die Definition der Quadratwurzel? Vervollständige: Die Quadratwurzel aus a ist die Zahl b, für die gilt: b * ... = a',
    correctAnswer: 'b',
    hints: [
      'Denk an die Umkehrung der Quadrierung',
      'Wenn b die Quadratwurzel von a ist, dann ist b² = a'
    ],
    points: 150,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-def-2',
    type: 'text',
    category: 'Wurzeln Definition',
    question: 'Warum hat jede positive reelle Zahl genau eine positive Quadratwurzel?',
    correctAnswer: 'Die Funktion f(x)=x² ist für x>0 streng monoton steigend und damit umkehrbar',
    hints: [
      'Betrachte die Funktion f(x)=x²',
      'Was bedeutet streng monoton steigend?'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-def-3',
    type: 'text',
    category: 'Wurzeln Definition',
    question: 'Erkläre, warum negative Zahlen keine reelle Quadratwurzel haben.',
    correctAnswer: 'Das Quadrat einer reellen Zahl ist immer positiv oder null',
    hints: [
      'Was ist das Quadrat einer negativen Zahl?',
      'Was ist das Quadrat einer positiven Zahl?'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-def-4',
    type: 'text',
    category: 'Wurzeln Definition',
    question: 'Was bedeutet es, wenn wir schreiben: x = √a?',
    correctAnswer: 'x ist die nicht-negative Zahl, für die gilt: x² = a',
    hints: [
      'Die Quadratwurzel ist die Umkehrung des Quadrierens',
      'Wir suchen immer die positive Lösung'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-def-5',
    type: 'text',
    category: 'Wurzeln Definition',
    question: 'Warum gibt es keine reelle Quadratwurzel aus -4?',
    correctAnswer: 'Das Quadrat einer reellen Zahl ist immer positiv oder null, kann also nie -4 ergeben',
    hints: [
      'Was passiert, wenn man eine positive Zahl quadriert?',
      'Was passiert, wenn man eine negative Zahl quadriert?'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-def-6',
    type: 'text',
    category: 'Wurzeln Definition',
    question: 'Warum ist √(a²) = |a| und nicht einfach a?',
    correctAnswer: 'Die Quadratwurzel ist per Definition nicht-negativ, und sowohl a als auch -a ergeben quadriert a²',
    hints: [
      'Was ist das Quadrat von -a?',
      'Die Quadratwurzel muss eindeutig sein'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-1',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √8 (Schreibe als a√b)',
    correctAnswer: '2√2',
    hints: [
      'Zerlege 8 in Faktoren: 8 = 4 * 2',
      '√8 = √(4 * 2) = √4 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-2',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √18 (Schreibe als a√b)',
    correctAnswer: '3√2',
    hints: [
      'Zerlege 18 in Faktoren: 18 = 9 * 2',
      '√18 = √(9 * 2) = √9 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-3',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √50 (Schreibe als a√b)',
    correctAnswer: '5√2',
    hints: [
      'Zerlege 50 in Faktoren: 50 = 25 * 2',
      '√50 = √(25 * 2) = √25 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-4',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √72 (Schreibe als a√b)',
    correctAnswer: '6√2',
    hints: [
      'Zerlege 72 in Faktoren: 72 = 36 * 2',
      '√72 = √(36 * 2) = √36 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-5',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √98 (Schreibe als a√b)',
    correctAnswer: '7√2',
    hints: [
      'Zerlege 98 in Faktoren: 98 = 49 * 2',
      '√98 = √(49 * 2) = √49 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-6',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √32 (Schreibe als a√b)',
    correctAnswer: '4√2',
    hints: [
      'Zerlege 32 in Faktoren: 32 = 16 * 2',
      '√32 = √(16 * 2) = √16 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-7',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √200 (Schreibe als a√b)',
    correctAnswer: '10√2',
    hints: [
      'Zerlege 200 in Faktoren: 200 = 100 * 2',
      '√200 = √(100 * 2) = √100 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-8',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √128 (Schreibe als a√b)',
    correctAnswer: '8√2',
    hints: [
      'Zerlege 128 in Faktoren: 128 = 64 * 2',
      '√128 = √(64 * 2) = √64 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'sqrt-simplify-9',
    type: 'formula',
    category: 'Terme vereinfachen',
    question: 'Vereinfache √162 (Schreibe als a√b)',
    correctAnswer: '9√2',
    hints: [
      'Zerlege 162 in Faktoren: 162 = 81 * 2',
      '√162 = √(81 * 2) = √81 * √2'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'equation-1',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² = 9',
    correctAnswer: 'x = 3 oder x = -3',
    hints: [
      'Eine quadratische Gleichung kann zwei Lösungen haben',
      'Denk an positive und negative Wurzeln'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'equation-2',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² - 4x + 4 = 0',
    correctAnswer: 'x = 2',
    hints: [
      'Dies ist eine quadratische Gleichung',
      'Versuche die linke Seite als Quadrat zu schreiben: (x-?)²'
    ],
    points: 250,
    difficulty: 'hard'
  },
  {
    id: 'equation-3',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² + 6x + 9 = 0',
    correctAnswer: 'x = -3',
    hints: [
      'Dies ist eine quadratische Gleichung',
      'Versuche die linke Seite als Quadrat zu schreiben: (x+?)²'
    ],
    points: 250,
    difficulty: 'hard'
  },
  {
    id: 'equation-4',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² - 9 = 0',
    correctAnswer: 'x = 3 oder x = -3',
    hints: [
      'Bringe alle Terme auf eine Seite',
      'Faktorisiere: x² - 9 = (x+3)(x-3)'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'equation-5',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² - 2x - 3 = 0',
    correctAnswer: 'x = 3 oder x = -1',
    hints: [
      'Verwende die pq-Formel',
      'p = -2, q = -3'
    ],
    points: 250,
    difficulty: 'hard'
  },
  {
    id: 'equation-6',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² + 4x + 4 = 0',
    correctAnswer: 'x = -2',
    hints: [
      'Dies ist eine quadratische Gleichung',
      'Versuche die linke Seite als Quadrat zu schreiben: (x+?)²'
    ],
    points: 250,
    difficulty: 'hard'
  },
  {
    id: 'equation-7',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² - 16 = 0',
    correctAnswer: 'x = 4 oder x = -4',
    hints: [
      'Bringe alle Terme auf eine Seite',
      'Faktorisiere: x² - 16 = (x+4)(x-4)'
    ],
    points: 200,
    difficulty: 'hard'
  },
  {
    id: 'equation-8',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² + 2x - 8 = 0',
    correctAnswer: 'x = 2 oder x = -4',
    hints: [
      'Verwende die pq-Formel',
      'p = 2, q = -8'
    ],
    points: 250,
    difficulty: 'hard'
  },
  {
    id: 'equation-9',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² - 5x + 6 = 0',
    correctAnswer: 'x = 2 oder x = 3',
    hints: [
      'Verwende die pq-Formel',
      'p = -5, q = 6'
    ],
    points: 250,
    difficulty: 'hard'
  },
  {
    id: 'equation-10',
    type: 'formula',
    category: 'Gleichungen lösen',
    question: 'Löse die Gleichung: x² + x - 12 = 0',
    correctAnswer: 'x = 3 oder x = -4',
    hints: [
      'Verwende die pq-Formel',
      'p = 1, q = -12'
    ],
    points: 250,
    difficulty: 'hard'
  }
]; 