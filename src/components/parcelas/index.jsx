import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon   from '@mui/icons-material/KeyboardArrowUp';
import ListaParcelas         from "./ListaParcelas";
import ContextoSimulacao     from "../../common/context/ContextoSimulacao.js";

export default function Parcelas(params)
{
    const [expanded, setExpanded] = useState(false);
    const {simulacao} = useContext(ContextoSimulacao);
    const handleExpandClick = ()=>{ setExpanded(!expanded) };

    useEffect(()=>{        
        Object.keys(simulacao).length > 0 && setExpanded(true); 
    }, [simulacao])

    return(
        <div>
            <Card className=" p-2 m-5">
                <Card.Body>
                    <Row>
                        <Col md="10">
                            <h4 className="text-uppercase">
                                Simulação de parcelas
                            </h4>
                        </Col>
                        <Col md="2" className="text-end">
                            <Button 
                                variant="secondary" 
                                size="sm"
                                onClick={ handleExpandClick }
                                data-bs-toggle="collapse" 
                                data-bs-target="#lista-parcelas" 
                                aria-expanded="false"
                            >
                                { expanded == true ? <KeyboardArrowUpIcon />:<KeyboardArrowDownIcon /> }
                            </Button>
                        </Col>
                    </Row>
                    <Row 
                        className={expanded === true ? "pt-5 collapse show" : "pt-5 collapse" } 
                        id="lista-parcelas"
                    >
                        <ListaParcelas />
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}