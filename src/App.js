import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Horarios from "./pages/Horarios";
import Index from "./pages";
import Portifolio from "./pages/Portifolio";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/horariosIFS" element={<Horarios local={'ifs'}/>} />
                <Route path="/horariosUFS" element={<Horarios local={'ufs'}/>} />
                <Route path="/portifolio/calculadora" element={<Portifolio pagina={'calculadora'}/>} />
                <Route path="/portifolio/servidor" element={<Portifolio pagina={'servidor'}/>} />
            </Routes>
        </Router>
    );
}

export default App;
