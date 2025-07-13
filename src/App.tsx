import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import General from "./pages/General/General";
import MatterAndItsProperties from "./pages/MatterAndItsProperties/MatterAndItsProperties";
import AtomicStructure from "./pages/AtomicStructure/AtomicStructure";
import PeriodicTable from "./pages/PeriodicTable/PeriodicTable";
import ChemicalBonding from "./pages/ChemicalBonding/ChemicalBonding";
import ChemicalReactions from "./pages/ChemicalReactions/ChemicalReactions";
import MoleConceptAndStoichiometry from "./pages/MoleConceptAndStoichiometry/MoleConceptAndStoichiometry";
import AcidsAndBases from "./pages/AcidsAndBases/AcidsAndBases";
import GasesAndGasLaws from "./pages/GasesAndGasLaws/GasesAndGasLaws";
import SolutionsAndSolubility from "./pages/SolutionsAndSolubility/SolutionsAndSolubility";
import LaboratoryWork from "./pages/LabratoryWork/LaboratoryWork";
import QuestionBank from "./pages/QuestionBank";
import Header from "./components/Header";
import BackButton from "./components/BackButton";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <ScrollToTop />
      <Header title="I Know Chemistry 🧪" />
      <BackButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general" element={<General />} />
        <Route path="/question-bank" element={<QuestionBank />} />
        <Route path="/matter-and-its-properties" element={<MatterAndItsProperties />} />
        <Route path="/atomic-structure" element={<AtomicStructure />} />
        <Route path="/periodic-table" element={<PeriodicTable />} />
        <Route path="/chemical-bonding" element={<ChemicalBonding />} />
        <Route path="/chemical-reactions" element={<ChemicalReactions />} />
        <Route path="/mole-concept-and-stoichiometry" element={<MoleConceptAndStoichiometry />} />
        <Route path="/acids-and-bases" element={<AcidsAndBases />} />
        <Route path="/gases-and-gas-laws" element={<GasesAndGasLaws />} />
        <Route path="/solutions-and-solubility" element={<SolutionsAndSolubility />} />
        <Route path="/laboratory-work" element={<LaboratoryWork />} />
      </Routes>
    </div>
  );
}

export default App;
