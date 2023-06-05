import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { produtos } from "../../data/Produtos";
import { formatarValorMonetario } from '../../utils/formatarValorMonetario';
import { selecionaTextosaDireita } from '../../utils/selecionaTextosaDireita'

export default function Descricao({descricao})
{
    const id = selecionaTextosaDireita( descricao, 1 );    
    const produto = produtos[id];
    
    return(
        <Card className="card mb-4 p-2">
            <Card.Header className="card-header text-center">
                <h5>
                    { produto.NO_PRODUTO }                    
                </h5>
            </Card.Header>
            <Card.Body className="card-body">
                <Row>
                    <Col>
                        <p>
                            <strong>
                                Taxa de Juros: 
                            </strong>
                            <span>  </span>
                            { parseFloat( produto.PC_TAXA_JUROS ) }
                        </p>
                        
                        <p>
                            <strong>
                                Mínimo de Meses:
                            </strong>
                            <span>  </span>
                            { produto.NU_MINIMO_MESES }
                        </p>
                        <p>
                            <strong>
                                Máximo de Meses:
                            </strong>
                            <span>  </span>
                            { produto.NU_MAXIMO_MESES }
                        </p>
                    </Col>
                    <Col>
                        <p>
                            <strong>
                                Valor Mínimo:
                            </strong>
                            <span>  </span>
                            { formatarValorMonetario( produto.VR_MINIMO ) }
                        </p>
                        <p>
                            <strong>
                                Valor Máximo:
                            </strong>
                            <span>  </span>
                            { formatarValorMonetario( produto.VR_MAXIMO )}
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>  
    )
}