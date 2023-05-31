import React from "react"

export default function ListaParcelas(props)
{
    return(
        <div>
            <table className="table table-hover table-bordered table-striped text-white text-center">
                <thead  className="active">
                    <tr>
                        <td>Número</td>
                        <td>Amortização</td>
                        <td>Juros</td>
                        <td>Prestação</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}