import React, {useContext, useEffect, useState} from "react"
import ContextoSimulacao from "../../common/context/ContextoSimulacao"
import TabelaParcelas from "./TabelaParcelas";

export default function ListaParcelas()
{
    const dadosSimulacao = useContext(ContextoSimulacao);
    const [ listaParcelas, setListaParcelas ]  = useState([]);

    useEffect(()=>{
        dadosSimulacao.length > 0 && setListaParcelas(dadosSimulacao);
    }, [dadosSimulacao])

    return(        
        <div>
            <nav>
                <div 
                    className="nav nav-tabs" 
                    id='nav-home'
                    role="tab-list"
                >
                    <button 
                        className="nav-link active" 
                        id="nav-price-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#nav-price" 
                        type="button" 
                        role="tab" 
                        aria-controls="nav-home" 
                        aria-selected="true"
                    >
                        PRICE
                    </button>   
                    <button 
                        className="nav-link" 
                        id="nav-sac-tab" 
                        data-bs-toggle="tab" 
                        data-bs-target="#nav-sac" 
                        type="button" 
                        role="tab" 
                        aria-controls="nav-sac" 
                        aria-selected="true"
                    >
                        SAC
                    </button>   
                </div>
            </nav>
            <div className="tab-content" id="nav-tab" role="tab-list">
                <div 
                    className="tab-pane fade show active" 
                    id="nav-price" 
                    role="tabpanel" 
                    aria-labelledby="nav-home" 
                    tabIndex="0"
                >
                    <TabelaParcelas parcelas={ listaParcelas.lenght > 0 && listaParcelas.resultadoSimulacao[0].parcelas } />       
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="nav-sac" 
                    role="tabpanel" 
                    aria-labelledby="nav-home" 
                    tabIndex="0"
                >
                    <TabelaParcelas parcelas={ listaParcelas.lenght > 0 && listaParcelas.resultadoSimulacao[1].parcelas } />       
                </div>
            </div>
        </div>
    )
}