import React, { useState } from "react";
import { Request } from "../services/request";

export async function Itau(){
    const dados = await fetch('https://api.itau/open-banking/products-services/v1/personal-financings', {"method": 'GET'});
    const retorno = await dados.json();
    return await retorno.data.brand;
}

export async function Bradesco(empresa){
    const dados = await fetch(`https://api.bradesco.com/${empresa}/open-banking/products-services/v1/personal-loans`, {"method": 'GET'});    
    const retorno = await JSON.parse(dados);
    return await retorno.data.brand;
}

export async function DadosBacen()
{
    const endpoint = 'https://olinda.bcb.gov.br/olinda/servico/taxaJuros/versao/v2/odata/ConsultaUnificada';
    const params = new URLSearchParams({
        $top: 100,
        $format: 'json',
        $select: 'codigoSegmento,Segmento,codigoModalidade,Modalidade,Posicao,InstituicaoFinanceira,TaxaJurosAoMes,cnpj8',
    });

    const url = `${endpoint}?${params}`;

    const dados = fetch(url)
                .then(async response => {
                    if (!response.ok) {
                        throw new Error('Erro ao fazer a requisição. Status: ' + response.status);
                    }
                    return await response.json();
                })
                .then(async data => {
                   return await data.value;                    
                })
                .catch(error => {
                    console.error('Erro:', error);
                });
    return await dados;
}