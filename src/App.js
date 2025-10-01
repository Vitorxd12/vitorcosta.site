import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Horarios from "./pages/Horarios";
import Index from "./pages";
import Calculadora from "./pages/Calculadora";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/horariosIFS" element={<Horarios local={'ifs'}/>} />
                <Route path="/horariosUFS" element={<Horarios local={'ufs'}/>} />
                <Route path="/calculadora" element={<Calculadora />} />
            </Routes>
        </Router>
    );
}

export default App;
