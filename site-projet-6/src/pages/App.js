import { Routes, Route } from "react-router-dom";
import {Home} from '../pages/Home'
import { A_Propos } from "../pages/A_Propos";
import  Fiche_Logement  from "../pages/Fiche_Logement";
import { Erreur } from "../pages/Erreur";

function App() {
  return (
    
    //route pour l'affichage des pages
    <Routes>
     <Route path='/'element={<Home />} /> 
     <Route path='/A_propos' element={<A_Propos />}/> 
     <Route path='/Fiche_Logement/:id' element={<Fiche_Logement />}/> 
     <Route path="*" element={<Erreur />} />
    </Routes>
    
   
  );
}

export default App;
