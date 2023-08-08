import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {Home} from '../layout/Home'
import { A_Propos } from "../layout/A_Propos";
import  Fiche_Logement  from "../layout/Fiche_Logement";
import { Erreur } from "../layout/Erreur";

function App() {
  return (
    
    
    <Routes>
     <Route path='/'element={<Home />} /> 
     <Route path='/A_propos' element={<A_Propos />}/> 
     <Route path='/Fiche_Logement/:id' element={<Fiche_Logement />}/> 
     <Route path="*" element={<Erreur />} />
    </Routes>
    
   
  );
}

export default App;
