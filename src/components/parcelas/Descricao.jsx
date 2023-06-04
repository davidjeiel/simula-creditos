import React, { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export const produtos = [
        {
          "CO_PRODUTO": 1,
          "NO_PRODUTO": "Produto 1",
          "PC_TAXA_JUROS": 17900000.0,
          "NU_MINIMO_MESES": 0,
          "NU_MAXIMO_MESES": 24,
          "VR_MINIMO": 20000.0,
          "VR_MAXIMO": 1000000.0
        },
        {
          "CO_PRODUTO": 2,
          "NO_PRODUTO": "Produto 2",
          "PC_TAXA_JUROS": 17500000.0,
          "NU_MINIMO_MESES": 25,
          "NU_MAXIMO_MESES": 48,
          "VR_MINIMO": 1000100.0,
          "VR_MAXIMO": 10000000.0
        },
        {
          "CO_PRODUTO": 3,
          "NO_PRODUTO": "Produto 3",
          "PC_TAXA_JUROS": 18200000.0,
          "NU_MINIMO_MESES": 49,
          "NU_MAXIMO_MESES": 96,
          "VR_MINIMO": 10000001.0,
          "VR_MAXIMO": 100000000.0
        },
        {
          "CO_PRODUTO": 4,
          "NO_PRODUTO": "Produto 4",
          "PC_TAXA_JUROS": 15100000.0,
          "NU_MINIMO_MESES": 96,
          "NU_MAXIMO_MESES": null,
          "VR_MINIMO": 100000001.0,
          "VR_MAXIMO": null
        }
]

export default function Descricao({descricao})
{
    const id = Right( descricao, 1 );    
    const produto = produtos[id];
    const [ openModal, setOpenModal ] = useState(false);
    const handleOpenProdutos = ()=>setOpenModal(true)
    const handleCloseProdutos= ()=>setOpenModal(false)
    
    return(
        <>
            <Card className="card mb-4 p-2">
                <Card.Header className="card-header text-center">
                    <h5>
                        { produto.NO_PRODUTO }                    
                    </h5>
                    <Button size="sm" variant="secondary" onClick={handleOpenProdutos}>
                        PRODUTOS
                    </Button>
                </Card.Header>
                <Card.Body className="card-body">
                    <Row>
                        <Col>
                            <p>
                                <strong>
                                    Taxa de Juros:
                                </strong>
                                { produto.PC_TAXA_JUROS }
                            </p>
                            
                            <p>
                                <strong>
                                    Mínimo de Meses:
                                </strong>
                                { produto.NU_MINIMO_MESES }
                            </p>
                            <p>
                                <strong>
                                    Máximo de Meses:
                                </strong>
                                { produto.NU_MAXIMO_MESES }
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <strong>
                                    Valor Mínimo:
                                </strong>
                                { produto.VR_MINIMO }
                            </p>
                            <p>
                                <strong>
                                    Valor Máximo:
                                </strong>
                                { produto.VR_MAXIMO }
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Modal
                open={openModal}
                onClose={handleCloseProdutos}
                aria-labelledby="tit-lista-de-produtos"
                aria-describedby="desc-lista-de-produtos"
            >
                <Box sx={style}>
                    <Typography className="text-center fw-bold" id="tit-lista-de-produtos" variant="h6" component="h2">
                        Lista de Produtos
                    </Typography>
                    <Typography id="desc--lista-de-produtos" sx={{ mt: 2 }}>
                        <table className="table table-bordered table-striped ">
                            <thead>
                                <tr className="text-center">
                                   <th>Nome</th> 
                                   <th>Taxa</th> 
                                   <th>Minimo Meses</th> 
                                   <th>Máximo Meses</th> 
                                   <th>Valor Mínimo</th> 
                                   <th>Valor Máximo</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    produtos.map((p)=>{
                                        return(
                                            <tr>
                                                <td className="text-center">{p.NO_PRODUTO}</td>
                                                <td className="text-center">{p.PC_TAXA_JUROS}</td>
                                                <td className="text-center">{p.NU_MINIMO_MESES}</td>
                                                <td className="text-center">{p.NU_MAXIMO_MESES}</td>
                                                <td className="text-center">{p.VR_MINIMO}</td>
                                                <td className="text-center">{p.VR_MAXIMO}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}