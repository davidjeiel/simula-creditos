import React, { useContext } from 'react';
import Simula from './components/form/Simula';
import Menu from './components/src/menu';
import { ProviderSimulacao } from './common/context/ContextoSimulacao.js';
import Parcelas from './components/parcelas';
import { CardBancos } from './components/open/CardBancos';

export default function App() 
{
  return (
    <ProviderSimulacao>
      <Menu />
      <Simula />    
      <Parcelas />    
      <CardBancos />  
    </ProviderSimulacao>    
  );
}
