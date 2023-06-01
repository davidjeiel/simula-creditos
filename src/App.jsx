import React, { useState, createContext } from 'react';
import Parcelas from './components/parcelas';
import Produtos from './components/Produtos';
import Simula from './components/form/simula';
import Menu from './components/src/menu';

const Simulacao = createContext();

export default function App() 
{
  return (
    <Simulacao.Provider value={''}>
      <Menu />
      <Simula />          
    </Simulacao.Provider>    
  );
}
