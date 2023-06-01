import React, {useContext, useEffect, useState} from "react"
import ContextoSimulacao from "../../common/context/ContextoSimulacao"
import { Dados } from "./dados";

export default function ListaParcelas(props)
{
    const dadosSimulacao = useContext(ContextoSimulacao);
    const [listaParcelas, setListaParcelas]  = useState([]);

    useEffect(()=>{
        setListaParcelas(dadosSimulacao);
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
                        className="nav-link active" 
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
                {
                    listaParcelas !== '' &&
                    listaParcelas.map((dados)=>{
                        return(
                            <>
                                 <div 
                                    className="tab-pane fade show active" 
                                    id={"nav-"+ dados.tipo.toLowerCase() } 
                                    role="tabpanel" 
                                    aria-labelledby="nav-home" 
                                    tabindex="0"
                                >
                                    <table 
                                        className="table table-hover table-bordered table-striped text-white text-center"
                                    >
                                        <thead  className="active">
                                            <tr>
                                                <td>Número</td>
                                                <td>Amortização</td>
                                                <td>Juros</td>
                                                <td>Prestação</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Dados lista={dados.parcelas} />
                                        </tbody>
                                    </table>
                                </div>  
                            </>
                        )   
                    })
                }                 

            </div>
        </div>
    )
}