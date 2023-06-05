import React from "react";
import { formatarValorMonetario } from '../../utils/formatarValorMonetario';

export default function  TabelaParcelas({parcelas})
{
    return(
        <table 
            className="table table-hover table-bordered table-striped text-center"
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
                { 
                    parcelas.map( (dados, index)=>{                       
                        return(
                            <tr key={index}>
                                <td>{dados.numero}</td>
                                <td>{formatarValorMonetario(dados.valorAmortizacao)}</td>
                                <td>{formatarValorMonetario(dados.valorJuros)}</td>
                                <td>{formatarValorMonetario(dados.valorPrestacao)}</td>
                            </tr>
                        ) 
                    })
                }
            </tbody>
        </table>
    );
}