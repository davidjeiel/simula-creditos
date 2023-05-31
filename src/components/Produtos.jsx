import React from "react"
import { Button, ButtonGroup, Col, Row } from "react-bootstrap"

export default function Produtos(params)
{
    return(
        <Row className="p-2 m-5">
            <ButtonGroup>
                <Button variant="secondary">PRODUTO 1</Button>           
                <Button variant="secondary">PRODUTO 2</Button>           
                <Button variant="secondary">PRODUTO 3</Button>           
                <Button variant="secondary">PRODUTO 4</Button>           
            </ButtonGroup> 
        </Row>
    )
}