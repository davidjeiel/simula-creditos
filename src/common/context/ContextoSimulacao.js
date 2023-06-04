import React,{ createContext, useState } from "react";

const ContextoSimulacao = createContext({});
export default ContextoSimulacao;

export const ProviderSimulacao = (({children})=>{
    const [simulacao, setSimulacao] = useState([]);
    return(
        <ContextoSimulacao.Provider value={{simulacao, setSimulacao}}>
            {children}
        </ContextoSimulacao.Provider>
    )
});