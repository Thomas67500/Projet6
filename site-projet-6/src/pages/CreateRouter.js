import { createBrowserRouter, Navigate } from 'react-router-dom';
import {Home} from '../pages/Home'
import { A_Propos } from "../pages/A_Propos";
import  FicheLogement  from "../pages/Fiche_Logement";
import { Erreur } from "../pages/Erreur";


export const Router = createBrowserRouter([
    
    {
      path: "/",
      element: <Home />,
      errorElement: <Erreur />,
      index: true
    },
    {
      path: '/Fiche_Logement/:id',
      element: <FicheLogement />,
      errorElement: <Erreur />
    },
    {
      path: '/A_propos',
      element: <A_Propos />,
      errorElement: <Erreur />
    },
  ]);
  