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

  // Chemical Properties questions
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
    question: "According to Boyle’s Law, what happens to the pressure of a gas when the volume decreases, assuming temperature stays the same?",
    prompt: "Grade the answer for saying that the pressure increases as the volume decreases. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 31,
    subSection: "Boyle’s and Charles’s Law"
  },
  {
    id: "boyles-charles-2",
    question: "What does Charles’s Law say about the relationship between temperature and volume of a gas?",
    prompt: "Grade the answer for saying that as temperature increases, the volume increases but only if the pressure if kept constant. If the student does not have all, then point this out nicely to them but only if correct then say Your answer is correct! Then skip a line. At the end, skip a line and say Keep up the Good Work! If there are spelling errors still give the answer correct but point out the spelling errors. Even if the student has all the correct information, if they have wrong or out of topic information anywhere point out the part which is wrong to them please",
    author: "Daylan",
    from: "Canada",
    difficulty: "INTERMEDIATE",
    questionNumber: 32,
    subSection: "Boyle’s and Charles’s Law"
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