export interface Question {
  id: string;
  question: string;
  prompt: string;
  author: string;
  from: string;
  difficulty: string;
  questionNumber: number;
}

export const questions: Question[] = [
  // Definition of Matter questions
  {
    id: "def-matter-1",
    question: "List three states of matter.",
    prompt: "Grade the student's answer for listing the three states of matter. If solid, liquid and gas is present, then say, Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1
  },
  {
    id: "def-matter-2",
    question: "Define Matter.",
    prompt: "Grade the students answer for saying that matter is anything that has mass and volume. They should specify the words volume and mass. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors They should not use synonyms. If not do not have these two words or they have synonyms instead then point this out nicely to them",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 2
  },

  // Chemical Properties questions
  {
    id: "chem-props-1",
    question: "What happens when something changes into another substance ? For example when wood burns.",
    prompt: "Grade the student for saying that a chemical reaction is happening. Atoms are rearranged and chemical bonds are broken and new ones are formed resulting in new substances being created. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors.",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 3
  },
  {
    id: "chem-props-2",
    question: "How can you tell if a chemical change is occuring ? For example of metal rusting.",
    prompt: "Grade the student for saying that you can identify a chemical change by observing a colour change, gas production, formation of a precipitate, a temperature change or light production. If the student does not have all then point this out nicely to them If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors.",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 4
  },

  // Subatomic Particles questions
  {
    id: "subatomic-1",
    question: "What are the three main subatomic particles found in an atom?",
    prompt: "Grade the student for correctly identifying the three main subatomic particles: protons, neutrons, and electrons. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line a say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors.",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 5
  }
];

// Helper function to get questions by ID array
export const getQuestionsByIds = (ids: string[]): Question[] => {
  return questions.filter(q => ids.includes(q.id));
};

// Helper function to get a specific question by ID
export const getQuestionById = (id: string): Question | undefined => {
  return questions.find(q => q.id === id);
};

// Helper function to get all questions
export const getAllQuestions = (): Question[] => {
  return questions;
}; 