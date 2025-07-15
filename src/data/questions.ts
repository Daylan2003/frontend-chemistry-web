export interface Question {
  id: string;
  question: string;
  prompt: string;
  author: string;
  from: string;
  difficulty: string;
  questionNumber: number;
  subSection: string;
}

export const questions: Question[] = [
  // Definition of Matter questions
  {
    id: "def-matter-1",
    question: "List three states of matter.",
    prompt: "Grade the student's answer for listing the three states of matter. If solid, liquid and gas is present, then say, Your answer is correct! Then put the rest of text on a new line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1,
    subSection: "definition of matter"
  },
  {
    id: "def-matter-2",
    question: "Define Matter.",
    prompt: "Grade the students answer for saying that matter is anything that has mass and volume. They should specify the words volume and mass. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors They should not use synonyms. If not do not have these two words or they have synonyms instead then point this out nicely to them Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 2,
    subSection: "definition of matter"
  },
  {
    id: "def-matter-3",
    question: "Describe how particles behave in a gas compared to a solid.",
    prompt: "Grade the student's answer by checking if they describe gas particles as far apart and moving freely, and solid particles as closely packed and vibrating in place. Only say Your answer is correct! if both parts are described properly.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "states of matter"
  },
  {
    id: "def-matter-4",
    question: "Name two physical properties of matter.",
    prompt: "Grade the student's answer. Common physical properties include color, mass, volume, density, boiling point, melting point, etc.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. \n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 4,
    subSection: "properties of matter"
  },
  {
    id: "def-matter-5",
    question: "What is the difference between a physical and chemical property?",
    prompt: "Grade the student's answer. A correct answer should say that physical properties can be observed without changing the substance, while chemical properties involve the ability to change into a new substance. \n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. \n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 5,
    subSection: "properties of matter"
  },
  {
    id: "def-matter-6",
    question: "Is density a physical or chemical property? Explain your answer.",
    prompt: "Grade the student's answer. Density is a physical property. Look for the explanation that density can be measured without changing the substance.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. \n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 6,
    subSection: "properties of matter"
  },
  {
    id: "def-matter-8",
    question: "What is the difference between an element and a compound?",
    prompt: "Grade the student's answer. Elements are made of one type of atom. Compounds are made of two or more elements chemically bonded. Look for both parts.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. \n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 7,
    subSection: "classification of matter"
  },
  {
    id: "def-matter-10",
    question: "What is a physical change? Give one example.",
    prompt: "Grade the student's answer. A physical change does not produce a new substance. Examples include melting, boiling, breaking, etc.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. \n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 8,
    subSection: "changes in matter"
  },
  
  
  {
    id: "atomic-structure-4",
    question: "What is the relative mass of an electron compared to a proton?",
    prompt: "Grade the student's answer. An electron is about 1/1836 the mass of a proton. Accept explanations that say it is much smaller or negligible.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 4,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-5",
    question: "What does the atomic number of an element represent?",
    prompt: "Grade the student's answer. The atomic number represents the number of protons in an atom. This defines the element.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 5,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-6",
    question: "What is the mass number of an atom?",
    prompt: "Grade the student's answer. The mass number is the total number of protons and neutrons in the nucleus.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 6,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-7",
    question: "How do you calculate the number of neutrons in an atom?",
    prompt: "Grade the student's answer. Subtract the atomic number from the mass number: neutrons = mass number - atomic number.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 7,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-8",
    question: "What is an isotope?",
    prompt: "Grade the student's answer. An isotope is an atom with the same number of protons but a different number of neutrons.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 8,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-9",
    question: "What particle determines the identity of an element?",
    prompt: "Grade the student's answer. The correct answer is protons, as the number of protons (atomic number) defines the element.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 9,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-10",
    question: "Why is an atom electrically neutral?",
    prompt: "Grade the student's answer. Atoms are neutral because they have equal numbers of protons and electrons. Check for understanding.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 10,
    subSection: "atomic structure"
  },
  {
    id: "atomic-structure-12",
    question: "What happens when an electron gains energy?",
    prompt: "Grade the student's answer. The correct idea is that the electron jumps to a higher energy level. If they mention excited state or leaving the ground state, that's excellent.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 11,
    subSection: "atomic structure"
  },
  
  
  {
    id: "periodic-table-1",
    question: "What is the periodic table?",
    prompt: "Grade the student's answer. A good answer describes the periodic table as an arrangement of elements based on their atomic number and properties. Accept simple definitions but correct inaccurate or off-topic information.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-3",
    question: "What do elements in the same group (column) have in common?",
    prompt: "Grade the student's answer. Elements in the same group have similar chemical properties and the same number of valence electrons.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 2,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-5",
    question: "Where are the metals located on the periodic table?",
    prompt: "Grade the student's answer. Metals are mostly found on the left and center of the periodic table. Accept general descriptions but correct major errors.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-6",
    question: "Where are the nonmetals located on the periodic table?",
    prompt: "Grade the student's answer. Nonmetals are mostly found on the right side of the periodic table (except hydrogen). Make sure they identify this general area.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 4,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-7",
    question: "What is a group on the periodic table?",
    prompt: "Grade the student's answer. A group is a vertical column of elements with similar properties and the same number of valence electrons.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 5,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-8",
    question: "What are valence electrons?",
    prompt: "Grade the student's answer. Valence electrons are the outermost electrons of an atom and are involved in chemical bonding.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 6,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-9",
    question: "What are metalloids and where are they found on the periodic table?",
    prompt: "Grade the student's answer. Metalloids have properties of both metals and nonmetals and are found along the staircase line dividing metals and nonmetals.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 7,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-10",
    question: "What is the general trend for reactivity in Group 1 elements?",
    prompt: "Grade the student's answer. Group 1 (alkali metals) become more reactive as you move down the group.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 8,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-11",
    question: "What is the general trend in atomic size across a period?",
    prompt: "Grade the student's answer. Atomic size decreases from left to right across a period due to increased nuclear charge pulling electrons in closer.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 9,
    subSection: "periodic table"
  },
  {
    id: "periodic-table-12",
    question: "What is the general trend in electronegativity across a period?",
    prompt: "Grade the student's answer. Electronegativity increases across a period from left to right. Accept explanations that describe attraction to electrons or chemical bonding.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 10,
    subSection: "periodic table"
  },
  

  {
    id: "chemical-bonding-1",
    question: "What is a chemical bond?",
    prompt: "Grade the student's answer. A chemical bond is a force that holds atoms together in compounds. Accept basic definitions but clarify inaccuracies or vague wording.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-4",
    question: "What is the difference between ionic and covalent bonds?",
    prompt: "Grade the student's answer. Ionic bonds involve transfer of electrons while covalent bonds involve sharing of electrons. Accept concise summaries.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 2,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-5",
    question: "What types of elements form ionic bonds?",
    prompt: "Grade the student's answer. Ionic bonds form between metals and nonmetals. Be sure they recognize this specific pairing.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 3,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-6",
    question: "What types of elements form covalent bonds?",
    prompt: "Grade the student's answer. Covalent bonds form between nonmetal atoms. Accept this concept if phrased clearly.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 4,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-7",
    question: "Why do atoms bond with each other?",
    prompt: "Grade the student's answer. Atoms bond to achieve a full outer shell of electrons and become more stable. Mention of stability or octet rule is acceptable.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 5,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-8",
    question: "What is a molecule?",
    prompt: "Grade the student's answer. A molecule is a group of atoms bonded together, typically by covalent bonds. Accept clear and concise answers.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 6,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-9",
    question: "What is a compound?",
    prompt: "Grade the student's answer. A compound is a substance made of two or more different elements chemically bonded together. Clarify if the explanation is too vague.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 7,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-10",
    question: "What is the octet rule?",
    prompt: "Grade the student's answer. The octet rule states that atoms tend to bond in a way that they each have eight electrons in their outer shell. Accept general explanations if they refer to stability or full outer shells.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 8,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-11",
    question: "What is a polar covalent bond?",
    prompt: "Grade the student's answer. A polar covalent bond is when electrons are shared unequally between atoms, causing partial charges. Accept answers that mention unequal sharing or polarity.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 9,
    subSection: "chemical bonding"
  },
  {
    id: "chemical-bonding-12",
    question: "What is a metallic bond?",
    prompt: "Grade the student's answer. A metallic bond is the attraction between free-floating valence electrons and positively charged metal ions. Accept simplified versions that mention 'electron sea' or sharing among metal atoms.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 10,
    subSection: "chemical bonding"
  },



  {
    id: "chemical-reactions-1",
    question: "What is a chemical reaction?",
    prompt: "Grade the student's answer. A chemical reaction is a process where substances change to form new substances with different properties. Accept variations if the core idea is clear.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-2",
    question: "What are some signs that a chemical reaction has occurred?",
    prompt: "Grade the student's answer. Common signs include color change, gas production, temperature change, formation of a precipitate, or light emission. Accept two or more correct signs.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 2,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-3",
    question: "What is the difference between a physical change and a chemical change?",
    prompt: "Grade the student's answer. A chemical change forms new substances, while a physical change does not. Accept concise or basic versions of this distinction.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-5",
    question: "What is a chemical equation?",
    prompt: "Grade the student's answer. A chemical equation represents a chemical reaction using symbols and formulas for reactants and products. Accept brief explanations if accurate.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 4,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-6",
    question: "Why do chemical reactions need to be balanced?",
    prompt: "Grade the student's answer. Chemical equations must be balanced to follow the Law of Conservation of Mass. The number of atoms of each element must be the same on both sides.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 5,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-7",
    question: "What is the Law of Conservation of Mass?",
    prompt: "Grade the student's answer. The Law of Conservation of Mass states that mass is neither created nor destroyed in a chemical reaction. Accept basic but correct definitions.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 6,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-8",
    question: "What is an exothermic reaction?",
    prompt: "Grade the student's answer. An exothermic reaction releases heat or energy to the surroundings. Accept examples like combustion.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 7,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-9",
    question: "What is an endothermic reaction?",
    prompt: "Grade the student's answer. An endothermic reaction absorbs energy from its surroundings. Accept examples like photosynthesis or melting ice.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 8,
    subSection: "chemical reactions"
  },
  {
    id: "chemical-reactions-10",
    question: "What are catalysts and what do they do in a reaction?",
    prompt: "Grade the student's answer. A catalyst speeds up a chemical reaction without being used up in the process. Accept simple versions that mention speed or reaction rate.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 9,
    subSection: "chemical reactions"
  },


  {
    id: "mole-stoich-3",
    question: "How do you calculate molar mass?",
    prompt: "Grade the student's answer. Molar mass is calculated by adding the atomic masses of all atoms in a compound. Accept responses that involve adding up atomic weights from the periodic table.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 1,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-4",
    question: "How do you convert from grams to moles?",
    prompt: "Grade the student's answer. To convert grams to moles, divide the mass by the molar mass of the substance. Accept simplified calculations or examples.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 2,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-5",
    question: "What is the molar volume of a gas at STP?",
    prompt: "Grade the student's answer. At standard temperature and pressure (STP), the molar volume of a gas is 22.4 L per mole. Accept brief but correct answers.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-6",
    question: "What does a balanced chemical equation tell you about moles?",
    prompt: "Grade the student's answer. A balanced equation shows the mole ratio of reactants and products. Accept answers that mention proportions or stoichiometric coefficients.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 4,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-7",
    question: "How do you use mole ratios to solve stoichiometry problems?",
    prompt: "Grade the student's answer. Use the coefficients in the balanced equation to set up mole ratios and solve for unknowns. Accept partial answers that show clear understanding.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 5,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-8",
    question: "What is the empirical formula of a compound?",
    prompt: "Grade the student's answer. The empirical formula is the simplest whole-number ratio of atoms in a compound. Accept examples to support explanation.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 6,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-9",
    question: "What is the molecular formula and how is it different from the empirical formula?",
    prompt: "Grade the student's answer. The molecular formula shows the actual number of atoms of each element, while the empirical formula is the simplest ratio. Accept responses that compare the two.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 7,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-10",
    question: "How do you calculate percent composition of a compound?",
    prompt: "Grade the student's answer. Divide the total mass of each element by the molar mass of the compound and multiply by 100%. Accept correct examples and simplified methods.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 8,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-11",
    question: "What is a limiting reactant?",
    prompt: "Grade the student's answer. The limiting reactant is the substance that runs out first and limits the amount of product formed. Accept examples that clearly show this.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 9,
    subSection: "mole concept and stoichiometry"
  },
  {
    id: "mole-stoich-12",
    question: "How do you calculate theoretical yield?",
    prompt: "Grade the student's answer. Theoretical yield is calculated from the limiting reactant using stoichiometric ratios. Accept explanations that follow correct steps.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 10,
    subSection: "mole concept and stoichiometry"
  },

  {
    id: "acids-bases-2",
    question: "What are common properties of acids?",
    prompt: "Grade the student's answer. Acids typically taste sour, turn blue litmus paper red, and react with metals and carbonates. Accept examples or mentions of pH values below 7.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-3",
    question: "What are common properties of bases?",
    prompt: "Grade the student's answer. Bases usually taste bitter, feel slippery, turn red litmus paper blue, and have a pH above 7. Accept examples like soap or baking soda.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 2,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-4",
    question: "What is pH and what does it measure?",
    prompt: "Grade the student's answer. pH is a scale that measures the concentration of hydrogen ions in a solution. It ranges from 0 to 14, with acids having low pH and bases having high pH.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-5",
    question: "How does litmus paper indicate acidity or basicity?",
    prompt: "Grade the student's answer. Blue litmus turns red in acidic solutions, and red litmus turns blue in basic solutions. Accept simple explanations that show this understanding.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 4,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-7",
    question: "What are strong and weak acids?",
    prompt: "Grade the student's answer. Strong acids completely dissociate in water, while weak acids only partially dissociate. Accept examples like HCl for strong and acetic acid for weak.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 5,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-8",
    question: "What are strong and weak bases?",
    prompt: "Grade the student's answer. Strong bases completely dissociate in water, while weak bases only partially dissociate. Examples include NaOH (strong) and NH₃ (weak).\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 6,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-9",
    question: "How do you calculate pH from H+ concentration?",
    prompt: "Grade the student's answer. pH is calculated using the formula pH = -log[H+]. Accept examples of calculation or simplified explanations if correct.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 7,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-10",
    question: "How does dilution affect the pH of an acid?",
    prompt: "Grade the student's answer. Diluting an acid decreases its concentration and increases its pH (making it less acidic). Accept correct general reasoning.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 8,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-11",
    question: "What is a buffer solution and what does it do?",
    prompt: "Grade the student's answer. A buffer solution resists changes in pH when small amounts of acid or base are added. Accept examples like blood or acetic acid and sodium acetate.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 9,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-12",
    question: "What is the difference between concentration and strength of an acid?",
    prompt: "Grade the student's answer. Strength refers to how completely an acid dissociates, while concentration refers to how much acid is present in a solution. Accept clear comparisons.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 10,
    subSection: "acids and bases"
  },

  {
    id: "gases-laws-4",
    question: "State the ideal gas law equation and define each variable.",
    prompt: "Grade the student's answer. The ideal gas law is PV = nRT, where P = pressure, V = volume, n = moles of gas, R = gas constant, and T = temperature in Kelvin.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 1,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-5",
    question: "What is the combined gas law?",
    prompt: "Grade the student's answer. The combined gas law is (P1×V1)/T1 = (P2×V2)/T2. It combines Boyle's, Charles's, and Gay-Lussac's laws and shows the relationship between pressure, volume, and temperature.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 2,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-6",
    question: "What conditions cause real gases to deviate from ideal gas behavior?",
    prompt: "Grade the student's answer. Real gases deviate at high pressure and low temperature, where intermolecular forces and the volume of gas particles become significant.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-7",
    question: "What is the relationship between temperature and kinetic energy of gas particles?",
    prompt: "Grade the student's answer. The kinetic energy of gas particles increases with temperature. This means faster movement and more collisions at higher temperatures.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 4,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-8",
    question: "What is Avogadro's Law?",
    prompt: "Grade the student's answer. Avogadro's Law states that equal volumes of gases at the same temperature and pressure contain the same number of particles (or moles).\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 5,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-9",
    question: "How does gas pressure change when volume is decreased?",
    prompt: "Grade the student's answer. As volume decreases, gas particles collide more often with the container walls, increasing pressure, assuming temperature is constant (Boyle's Law).\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 6,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-10",
    question: "What units are typically used in gas law calculations?",
    prompt: "Grade the student's answer. Units include pressure in atm or kPa, volume in liters (L), temperature in Kelvin (K), and quantity in moles.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 7,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-11",
    question: "How is the ideal gas constant (R) chosen based on units?",
    prompt: "Grade the student's answer. The value of R depends on the units used: 0.0821 L·atm/mol·K for atm and liters, or 8.314 J/mol·K for SI units.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 8,
    subSection: "gases and gas laws"
  },
  {
    id: "gases-laws-12",
    question: "Why is Kelvin used instead of Celsius in gas laws?",
    prompt: "Grade the student's answer. Kelvin is used because gas law equations require absolute temperature to avoid zero or negative values, which are not physically meaningful for volume and pressure.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 9,
    subSection: "gases and gas laws"
  },

  {
    id: "solutions-1",
    question: "What is a solution in chemistry?",
    prompt: "Grade the student's answer. A solution is a homogeneous mixture composed of two or more substances, where one substance (solute) is dissolved in another (solvent).\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 1,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-3",
    question: "What factors affect the solubility of a substance?",
    prompt: "Grade the student's answer. Factors include temperature, pressure (for gases), and the nature of the solute and solvent (like polarity).\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 3,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-5",
    question: "What is concentration and how is it commonly expressed?",
    prompt: "Grade the student's answer. Concentration refers to the amount of solute in a given quantity of solvent or solution. It is often expressed in molarity (mol/L).\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 5,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-6",
    question: "What is a saturated solution?",
    prompt: "Grade the student's answer. A saturated solution contains the maximum amount of solute that can dissolve at a given temperature. Any additional solute will remain undissolved.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 6,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-7",
    question: "Describe what happens in a supersaturated solution.",
    prompt: "Grade the student's answer. A supersaturated solution temporarily contains more dissolved solute than it should at that temperature. It is unstable and can crystallize easily.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 7,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-8",
    question: "What does 'like dissolves like' mean?",
    prompt: "Grade the student's answer. 'Like dissolves like' means that polar solvents dissolve polar solutes and nonpolar solvents dissolve nonpolar solutes due to similar intermolecular forces.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 8,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-9",
    question: "How is molarity calculated?",
    prompt: "Grade the student's answer. Molarity is calculated using the formula M = moles of solute / liters of solution.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 9,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-10",
    question: "What is the effect of pressure on the solubility of gases in liquids?",
    prompt: "Grade the student's answer. Increasing pressure increases the solubility of gases in liquids. This is described by Henry's Law.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "HARD",
    questionNumber: 10,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-11",
    question: "What is dilution and how does it affect concentration?",
    prompt: "Grade the student's answer. Dilution is the process of adding solvent to a solution to decrease the concentration of the solute.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "MEDIUM",
    questionNumber: 11,
    subSection: "solutions and solubility"
  },
  {
    id: "solutions-12",
    question: "What is the difference between a concentrated and a dilute solution?",
    prompt: "Grade the student's answer. A concentrated solution has a large amount of solute relative to solvent, while a dilute solution has a small amount of solute relative to solvent.\n\nIf the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 12,
    subSection: "solutions and solubility"
  },

  {
    id: "chem-props-1",
    question: "What happens when something changes into another substance? For example when wood burns.",
    prompt: "Grade the student for saying that a chemical reaction is happening. Atoms are rearranged and chemical bonds are broken and new ones are formed resulting in new substances being created. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 3,
    subSection: "chemical properties"
  },
  {
    id: "chem-props-2",
    question: "How can you tell if a chemical change is occurring? For example of metal rusting.",
    prompt: "Grade the student for saying that you can identify a chemical change by observing a colour change, gas production, formation of a precipitate, a temperature change or light production. If the student does not have all then point this out nicely to them. If correct then say Your answer is correct! Then put the rest of text on a new line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 4,
    subSection: "chemical properties"
  },
  {
    id: "sub-part-1",
    question: "What are the 3 main subatomic particles and what are their charges?",
    prompt: "Grade the student for saying that the three main subatomic particles are protons, with a charge of +1, neutrons with a charge of 0 and electrons with a charge of -1. If the student does not have all then point this out nicely to them but if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 5,
    subSection: "subatomic particles"
  },
  {
    id: "sub-part-2",
    question: "Where in the atom are protons, neutrons and electrons located?",
    prompt: "Grade the answer for saying that protons and neutrons are located in the nucleus but electrons are located in shells around the nucleus. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 6,
    subSection: "subatomic particles"
  },
  {
    id: "elec-config-1",
    question: "How many electrons can fit in the first and second energy levels of an atom?",
    prompt: "Grade the answer for saying that 2 can fit in the first energy level and 8 can fit in the second energy level. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 7,
    subSection: "electronic configuration"
  },
  {
    id: "elec-config-2",
    question: "What is the electronic configuration for an atom with 10 electrons?",
    prompt: "Grade the answer for saying that there are 2 electrons in the first shell and 8 in the second shell. Or for simply saying 2,8. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 8,
    subSection: "electronic configuration"
  },
  {
    id: "groups-periods-1",
    question: "What is a group on the periodic table?",
    prompt: "Grade the answer for saying that it refers to a vertical column of the periodic table. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 9,
    subSection: "groups and periods"
  },
  {
    id: "groups-periods-2",
    question: "What is a period on the periodic table?",
    prompt: "Grade the answer for saying that it refers to a horizontal row of the periodic table. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 10,
    subSection: "groups and periods"
  },
  {
    id: "metals-nonmetals-1",
    question: "Give one difference between a metal and a nonmetal.",
    prompt: "Grade the answer for saying that metals tend to be hard, shiny, solid, have a high electrical and thermal conductivity and high melting and boiling points. However nonmetals tend to be softer, more colourful, tend to be solids liquids and gases at room temperature, have comparatively lower melting and boiling points. If the student chooses at least one difference, then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 11,
    subSection: "metals and nonmetals"
  },
  {
    id: "metals-nonmetals-2",
    question: "What property of metals allow them to be good conductors of electricity?",
    prompt: "Grade the answer for saying that a sea of valence electrons allow for them to be good conductors of electricity. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 12,
    subSection: "metals and nonmetals"
  },
  {
    id: "ionic-bond-1",
    question: "What is an ionic bond?",
    prompt: "Grade the answer for saying that an ionic bond is formed when electrons are transferred from one atom to another and that this usually happens between a metal and a nonmetal. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 13,
    subSection: "ionic bonding"
  },
  {
    id: "ionic-bond-2",
    question: "What happens to the charges of atoms when an ionic bond forms?",
    prompt: "Grade the answer for saying that the metal becomes positively charged and the nonmetal becomes negatively charged. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 14,
    subSection: "ionic bonding"
  },
  {
    id: "covalent-bond-1",
    question: "What is a covalent bond?",
    prompt: "Grade the answer for saying that a covalent bond is formed when two atoms share electrons and that this is usually between nonmetals. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 15,
    subSection: "covalent bonding"
  },
  {
    id: "covalent-bond-2",
    question: "Give an example of a molecule where a covalent bond exists.",
    prompt: "Grade the answer for listing at least one valid covalent molecule. If correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 16,
    subSection: "covalent bonding"
  },
  {
    id: "types-reactions-1",
    question: "What is a synthesis reaction?",
    prompt: "Grade the answer for saying that it is a reaction where two or more substances combine to form a new substance. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 17,
    subSection: "types of chemical reactions"
  },
  {
    id: "types-reactions-2",
    question: "What is a decomposition reaction?",
    prompt: "Grade the answer for saying that it is a reaction where one compound breaks down into two or more substances. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 18,
    subSection: "types of chemical reactions"
  },
  {
    id: "reactants-products-1",
    question: "In a chemical reaction what is the difference between a reactant and a product?",
    prompt: "Grade the answer for saying that reactants are the starting substances and that products are the new substances formed after the reaction. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 19,
    subSection: "reactants and products"
  },
  {
    id: "reactants-products-2",
    question: "In the reaction: H₂ + O₂ → H₂O, which are the reactants and which is the product?",
    prompt: "Grade the answer for saying that the reactants are H2 and O2 and the products are H2O. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 20,
    subSection: "reactants and products"
  },
  {
    id: "moles-1",
    question: "What is one mole of a substance?",
    prompt: "Grade the answer on saying that one mole contains 6.022x10^23 particles of a substance. Also saying that this number is Avogadro's number. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 21,
    subSection: "moles"
  },
  {
    id: "moles-2",
    question: "How many atoms are in 1 mole of carbon?",
    prompt: "Grade the answer on saying that 1 mole of Carbon contains 6.022x10^23 atoms. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 22,
    subSection: "moles"
  },
  {
    id: "stoichiometry-1",
    question: "In a chemical equation what do the coefficients in front of substances represent?",
    prompt: "Grade the answer for saying that they represent the number of moles of each substances involved in the reaction. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 23,
    subSection: "stoichiometry"
  },
  {
    id: "stoichiometry-2",
    question: "If the reaction is: 2H₂ + O₂ → 2H₂O, how many moles of water are formed when 2 moles of hydrogen react completely?",
    prompt: "Grade the answer for saying that 2 moles of H2 produce 2 moles of H2O. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 24,
    subSection: "stoichiometry"
  },
    {
    id: "acids-bases-1",
    question: "What is an acid (according to ionization)?",
    prompt: "Grade the answer for saying that an acid is a substance which produces Hydrogen ions when it is added to water. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 25,
    subSection: "acids and bases"
  },
  {
    id: "acids-bases-2",
    question: "What is a base (according to ionization)?",
    prompt: "Grade the answer for saying that a base is a substance which produces Hydroxide ions when it is added to water. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 26,
    subSection: "acids and bases properties"
  },
  {
    id: "acids-bases-3",
    question: "What is the pH range for acids and bases?",
    prompt: "Grade the answer for saying that Acids have a pH of less than 7 and bases have a pH of greater than 7. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 27,
    subSection: "acids and bases properties"
  },
  {
    id: "acids-bases-reactions-1",
    question: "What is a neutralization reaction?",
    prompt: "Grade the answer for saying that in a neutralization reaction an acid reacts with a base to form water and salt. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 28,
    subSection: "acids and bases reactions"
  },
    {
    id: "properties-gases-1",
    question: "Name 2 properties of gases",
    prompt: "Grade the answer for saying that gases have no fixed shape or volume and they can be compressed easily. If the student lists any other 2 valid properties still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 29,
    subSection: "Properties of Gases"
  },
  {
    id: "properties-gases-2",
    question: "Why do gases have a low density ?",
    prompt: "Grade the answer for saying that the reason is because the particles in gases are very far apart. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 30,
    subSection: "Properties of Gases"
  },
  {
    id: "boyles-charles-1",
    question: "According to Boyle's Law, what happens to the pressure of a gas when the volume decreases, assuming temperature stays the same?",
    prompt: "Grade the answer for saying that the pressure increases as the volume decreases. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 31,
    subSection: "Boyle's and Charles's Law"
  },
  {
    id: "boyles-charles-2",
    question: "What does Charles's Law say about the relationship between temperature and volume of a gas?",
    prompt: "Grade the answer for saying that as temperature increases, the volume increases but only if the pressure if kept constant. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 32,
    subSection: "Boyle's and Charles's Law"
  },
    {
    id: "components-solution-1",
    question: "What is a solute and what is a solvent ?",
    prompt: "Grade the answer for saying that a solute is the substance that dissolves and the solvent is the substance that does the dissolving.If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 33,
    subSection: "Components of a Solution"
  },
  {
    id: "components-solution-2",
    question: "In salt water, which is the solute and which is the solvent ?",
    prompt: "Grade the answer for saying that salt is the solute and water is the solvent. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 34,
    subSection: "Components of a Solution"
  },
  {
    id: "solubility-factors-1",
    question: "How does temperature affect the solubility of most solids in water ?",
    prompt: "Grade the answer for saying that that an increase of temperature usually increases the solubility of most solids in water. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 35,
    subSection: "Solubility Factors"
  },
  {
    id: "solubility-factors-2",
    question: "What happens to the solubility of a gas in a liquid when the temperature increases?",
    prompt: "Grade the answer for saying that the solubility of a gas in a liquid decreases when temperature increases. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 36,
    subSection: "Solubility Factors"
  },
    {
    id: "safety-equipment-1",
    question: "Name two important lab safety rules",
    prompt: "Grade the students answer on listing any 2 valid lab safety rules within reason. If correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 37,
    subSection: "Lab Safety and Equipment"
  },
  {
    id: "safety-equipment-2",
    question: "What is a beaker used for ?",
    prompt: "Grade for saying that a beaker is used to hold, mix or heat liquids. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 38,
    subSection: "Lab Safety and Equipment"
  },
  {
    id: "measurement-observation-1",
    question: "Between a graduated cylinder, beaker or test tube, which piece of equipment gives the most accurate measurement ?",
    prompt: "Grade the answer for saying that the graduated cylinder gives the most accurate measurement. If the student does not have this, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 39,
    subSection: "Measurement and Observation"
  },
  {
    id: "measurement-observation-2",
    question: "If a chemical is accidentally spilt in the lab, as a student, what is the first thing that should be done ? ",
    prompt: "Grade the answer for the student saying any valid procedure such as telling the teacher or lab supervisor. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "EASY",
    questionNumber: 40,
    subSection: "Measurement and Observation"
  },

  {
    "id": "labwork-1",
    "question": "Why is it important to wear safety goggles during a chemistry lab?",
    "prompt": "Grade the student's answer. Safety goggles protect the eyes from chemical splashes, broken glass, or harmful vapors.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 1,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-2",
    "question": "What should you do if a chemical spill occurs in the lab?",
    "prompt": "Grade the student's answer. A correct answer mentions notifying the teacher, using spill kits or absorbents, and following safety protocols.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "MEDIUM",
    "questionNumber": 2,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-3",
    "question": "Why must you never pipette by mouth?",
    "prompt": "Grade the student's answer. Because ingesting or inhaling chemicals is dangerous. Mouth pipetting risks contamination and exposure.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 3,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-4",
    "question": "Why is it important to label all test tubes and beakers?",
    "prompt": "Grade the student's answer. Labeling prevents mix-ups, ensures correct identification, and maintains safety.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 4,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-5",
    "question": "Why is it necessary to read the volumetric markings at the bottom of the meniscus in graduations?",
    "prompt": "Grade the student's answer. Read at the lowest point of meniscus at eye level to ensure accurate volume measurement.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "MEDIUM",
    "questionNumber": 5,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-6",
    "question": "What is the proper way to dilute a strong acid into water safely?",
    "prompt": "Grade the student's answer. Always add acid slowly into water, never the reverse, to prevent exothermic splashes.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "MEDIUM",
    "questionNumber": 6,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-7",
    "question": "Describe how to properly dispose of chemical waste in the lab.",
    "prompt": "Grade the student's answer. Use correct labeled containers, follow teacher or school protocols, do not pour down sinks unless allowed.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "MEDIUM",
    "questionNumber": 7,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-8",
    "question": "Explain why you should not block the lab door while working?",
    "prompt": "Grade the student's answer. Blocking the exit is a safety hazard; in emergencies clear pathways are essential.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 8,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-9",
    "question": "Why might a student be asked to tie back long hair and secure loose clothing?",
    "prompt": "Grade the student's answer. To prevent contact with flames, chemicals, or entanglement—reducing injury risk.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 9,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-10",
    "question": "Why should you never taste chemicals in the lab?",
    "prompt": "Grade the student's answer. Tasting can introduce toxic or harmful substances into the body—never safe to ingest chemicals.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 10,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-11",
    "question": "What is the purpose of a Bunsen burner flame test safety flame?",
    "prompt": "Grade the student's answer. Use the safety (yellow) flame when not heating to prevent accidents, and use blue flame only when needed.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "MEDIUM",
    "questionNumber": 11,
    "subSection": "laboratory work"
  },
  {
    "id": "labwork-12",
    "question": "Why must you always clean your workspace and wash your hands after a lab session?",
    "prompt": "Grade the student's answer. Cleaning removes residues; hand‑washing prevents chemical contact and cross‑contamination.\n\nIf the student lists any other 2 valid safety practices still give them it correct. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line.\n\nKeep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out‑of‑topic information anywhere point out the part which is wrong to them please",
    "author": "Daylan",
    "from": "Canada",
    "difficulty": "EASY",
    "questionNumber": 12,
    "subSection": "laboratory work"
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