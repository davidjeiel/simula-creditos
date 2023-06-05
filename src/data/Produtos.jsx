import React from "react";
import { Box, Typography } from "@mui/material";
import { formatarValorMonetario } from '../utils/formatarValorMonetario';

export const produtos = [
    {
      "CO_PRODUTO": 1,
      "NO_PRODUTO": "Produto 1",
      "PC_TAXA_JUROS": 0.0179,
      "NU_MINIMO_MESES": 1,
      "NU_MAXIMO_MESES": 24,
      "VR_MINIMO": 200,
      "VR_MAXIMO": 10000
    },
    {
      "CO_PRODUTO": 2,
      "NO_PRODUTO": "Produto 2",
      "PC_TAXA_JUROS": 0.0175,
      "NU_MINIMO_MESES": 25,
      "NU_MAXIMO_MESES": 48,
      "VR_MINIMO": 10001,
      "VR_MAXIMO": 100000
    },
    {
      "CO_PRODUTO": 3,
      "NO_PRODUTO": "Produto 3",
      "PC_TAXA_JUROS": 0.0182,
      "NU_MINIMO_MESES": 49,
      "NU_MAXIMO_MESES": 96,
      "VR_MINIMO": 100000.01,
      "VR_MAXIMO": 1000000
    },
    {
      "CO_PRODUTO": 4,
      "NO_PRODUTO": "Produto 4",
      "PC_TAXA_JUROS": 0.0151,
      "NU_MINIMO_MESES": 96,
      "NU_MAXIMO_MESES": null,
      "VR_MINIMO": 1000000.01,
      "VR_MAXIMO": null
    }
]

export default function Produtos()
{
    return(
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
                                        <td className="text-center">{formatarValorMonetario(p.VR_MINIMO)}</td>
                                        <td className="text-center">{formatarValorMonetario(p.VR_MAXIMO)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Typography>
        </Box>
    )
}