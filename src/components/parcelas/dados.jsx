import React from "react"

export async function Dados({lista}){
    return(
        <>
            {
                await lista.length > 0 &&
                lista.map((dados)=>{
                    return(
                        <tr>
                            <td>{dados.numero}</td>
                            <td>{dados.valorAmortizacao}</td>
                            <td>{dados.valorJuros}</td>
                            <td>{dados.valorPrestacao}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}