import { Routes, Route } from "react-router-dom"
import {Home} from './Home'
import { A_Propos } from "./A_Propos";
import  Fiche_Logement  from "./Fiche_Logement";
import { Header } from "./layout/header";
import { Erreur } from "./Erreur";
import {Footer} from './footer'
import JsonDataDisplay from "./data/logement";
import {BoxLocation} from '../components/layout/box-location'



function App() {
  return (
    <>
    
    <Routes>
     <Route path='/'element={<Home />} > </Route>
     <Route path='A_propos' element={<A_Propos />}> </Route>
     <Route path='/Fiche_Logement/:id' element={<Fiche_Logement />}> </Route>
     <Route path="*" element={<Erreur />} />
    </Routes>
   </>
  );
}

export default App;
