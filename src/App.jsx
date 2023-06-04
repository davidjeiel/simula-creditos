import React, { useContext } from 'react';
import Simula from './components/form/simula';
import Menu from './components/src/menu';
import { ProviderSimulacao } from './common/context/ContextoSimulacao.js';
import Parcelas from './components/parcelas';

export default function App() 
{
  return (
    <ProviderSimulacao>
      <Menu />
      <Simula />    
      <Parcelas />      
    </ProviderSimulacao>    
  );
}
