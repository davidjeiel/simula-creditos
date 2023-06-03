import React, { useEffect, useState } from "react";
import { Dados } from "./dados";

export default function  TabelaParcelas({parcelas})
{
    const [dadosTabela, setDadosTabela] =  useState([]);

    useEffect(()=>{
        capturaDados();
    }, [parcelas])

    const capturaDados = async ()=>{
        await console.debug(parcelas);
        await parcelas.lenght > 0 && setDadosTabela(parcelas);
       // await console.debug(dadosTabela);
    }


    return(
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
                {/* <Dados lista={parcelas} /> */}
            </tbody>
        </table>
    );
}