import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import loader  from '../../assets/gif/loader.gif'
import { Itau, Bradesco, DadosBacen } from "../../data/DadosBancos";

export function CardBancos(params)
{
    const capturaDados = async ()=>{
        const API = await DadosBacen();
        await console.debug(API);        
    }

    useEffect(()=>{
        capturaDados();
    }, [])

    return(
        <Card className="p-2 m-5">
            <Card.Body>
                <Row>
                    <h3 className="text-uppercase text-center">
                        Outros Bancos
                    </h3>
                    <ul className="nav nav-pills mb-3 text-center">
                        <li className="nav-item">
                            <button 
                                className="nav-link" 
                                id="pills-itau-tab" 
                                data-bs-toggle="pill" 
                                data-bs-target="#pills-itau" 
                                type="button" 
                                role="tab" 
                                aria-controls="pills-itau" 
                                aria-selected="true"
                            >
                                ITAÚ
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link " 
                                id="pills-losango-tab" 
                                data-bs-toggle="pill" 
                                data-bs-target="#pills-losango" 
                                type="button" 
                                role="tab" 
                                aria-controls="pills-losango" 
                                aria-selected="false"
                            >
                                LOSANGO
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link " 
                                id="pills-bradesco-tab" 
                                data-bs-toggle="pill" 
                                data-bs-target="#pills-bradesco" 
                                type="button" 
                                role="tab" 
                                aria-controls="pills-bradesco" 
                                aria-selected="false"
                            >
                                BRADESCO
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="nav-link " 
                                id="pills-next-tab" 
                                data-bs-toggle="pill" 
                                data-bs-target="#pills-next" 
                                type="button" 
                                role="tab" 
                                aria-controls="pills-next" 
                                aria-selected="false"
                            >
                                NEXT
                            </button>
                        </li>
                    </ul>
                </Row>
                <div className="tab-content" id="lista-bancos">
                    <div 
                        className="tab-pane fade" 
                        id="pills-losango" 
                        role="tabpanel" 
                        aria-labelledby="pills-losango-tab" 
                        tabIndex="0"
                    >
                        <img src={loader} alt="loader" title="loader" />
                    </div>
                    <div 
                        className="tab-pane fade" 
                        id="pills-bradesco" 
                        role="tabpanel" 
                        aria-labelledby="pills-bradesco-tab" 
                        tabIndex="0"
                    >
                        <img src={loader} alt="loader" title="loader" />                        
                    </div>
                    <div 
                        className="tab-pane fade" 
                        id="pills-next" 
                        role="tabpanel" 
                        aria-labelledby="pills-next-tab" 
                        tabIndex="0"
                    >
                        <img src={loader} alt="loader" title="loader" />                                                
                    </div>
                    <div 
                        className="tab-pane fade" 
                        id="pills-itau" 
                        role="tabpanel" 
                        aria-labelledby="pills-itau-tab" 
                        tabIndex="0"
                    >
                        <img src={loader} alt="loader" title="loader" />  
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}