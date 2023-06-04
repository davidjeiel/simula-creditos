import React, {useContext, useEffect, useState} from "react"
import ContextoSimulacao from "../../common/context/ContextoSimulacao.js"
import TabelaParcelas from "./TabelaParcelas";

export default function ListaParcelas()
{
    const { simulacao } = useContext(ContextoSimulacao);
    const [ price, setPrice ] = useState([]);
    const [ sac,   setSac   ] = useState([]);

    useEffect(()=>{
        ListasDeParcelas();
    },[simulacao])

    const ListasDeParcelas = async ()=>{    
        if(Object.keys(simulacao).length > 0){           
            await setPrice(simulacao.resultadoSimulacao[0].parcelas);
            await   setSac(simulacao.resultadoSimulacao[1].parcelas);
        }
    }
        
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
                    <TabelaParcelas parcelas={ price } />       
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="nav-sac" 
                    role="tabpanel" 
                    aria-labelledby="nav-home" 
                    tabIndex="0"
                >
                    <TabelaParcelas parcelas={ sac } />       
                </div>
            </div>
        </div>
    )
}