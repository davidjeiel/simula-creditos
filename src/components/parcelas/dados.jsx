export function Dados({lista})
{
    return(
        <>
            {
                lista.map((dados)=>{
                    <tr>
                        <td>{dados.numero}</td>
                        <td>{dados.valorAmortizacao}</td>
                        <td>{dados.valorJuros}</td>
                        <td>{dados.valorPrestacao}</td>
                    </tr>
                })
            }
        </>
    )
}