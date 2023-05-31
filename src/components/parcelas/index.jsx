
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListaParcelas from "./ListaParcelas";

export default function Parcelas(params)
{
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div>
            <Card className="text-bg-dark p-2 m-5">
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
                                data-bs-toggle="collapse" data-bs-target="#lista-parcelas" aria-expanded="false"
                            >
                                {
                                    expanded == true ?
                                        <KeyboardArrowDownIcon />
                                    :
                                        <KeyboardArrowUpIcon />
                                }
                            </Button>
                        </Col>
                    </Row>
                    <Row className="pt-5 collapse" id="lista-parcelas">
                        <ListaParcelas />
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}