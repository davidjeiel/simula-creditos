import React from "react";

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
                                <td>{dados.valorAmortizacao}</td>
                                <td>{dados.valorJuros}</td>
                                <td>{dados.valorPrestacao}</td>
                            </tr>
                        ) 
                    })
                }
            </tbody>
        </table>
    );
}