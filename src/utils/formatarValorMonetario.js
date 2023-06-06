import React from "react";

export const formatarValorMonetario = (valor) =>{
    // Formata o valor para o formato monetário
    const valorFormatado = parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });  
    // Define o valor formatado no input
    return valor === '' ? '' : valorFormatado;
}
  