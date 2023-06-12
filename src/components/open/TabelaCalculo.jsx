import React from 'react';
import { formatarValorMonetario } from '../utils/formatarValorMonetario';

export function TabelaCalculo({ valor, prazo, taxa }) 
{
  const parcelas = [];
  let saldoDevedor = valor;

  // Calcula o valor da parcela
  const calcularParcela = () => {
    const taxaJuros = taxa / 100;
    const base = Math.pow(1 + taxaJuros, prazo);
    return (valor * taxaJuros * base) / (base - 1);
  };

  const valorParcela = calcularParcela();

  // Calcula os dados de cada parcela
  for (let i = 1; i <= prazo; i++) {
    const juros = saldoDevedor * (taxa / 100);
    const amortizacao = valorParcela - juros;
    saldoDevedor -= amortizacao;

    parcelas.push({
      numero: i,
      juros: juros.toFixed(2),
      amortizacao: amortizacao.toFixed(2),
      saldoDevedor: saldoDevedor.toFixed(2),
    });
  }

  return (
    <table className='table table-hover table-striped table-bordered text-center mt-5'>
      <thead>
        <tr>
          <th>Parcela</th>
          <th>Juros</th>
          <th>Amortização</th>
          <th>Saldo Devedor</th>
        </tr>
      </thead>
      <tbody>
        {parcelas.map((parcela) => (
          <tr key={parcela.numero}>
            <td>{parcela.numero}</td>
            <td>{ parseFloat( parcela.juros )}</td>
            <td>{formatarValorMonetario(parcela.amortizacao)}</td>
            <td>{formatarValorMonetario(parcela.saldoDevedor)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
