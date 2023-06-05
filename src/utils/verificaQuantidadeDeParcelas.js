import React from 'react';
import { produtos } from '../data/Produtos';

const verificarQuantidadeParcelas =  ( valorProduto,  quantidadeParcelas ) => {  
    let retorno = true;  
    // Encontre o produto com base no valor informado
    const produto = produtos.find(produto => valorProduto >= produto.VR_MINIMO && valorProduto <= produto.VR_MAXIMO);   
    if(produto !== undefined){ 
        if (produto && quantidadeParcelas > produto.NU_MAXIMO_MESES || quantidadeParcelas < produto.NU_MINIMO_MESES) 
        {
            retorno = false;
        }
    }else{
        retorno = false;
    }
    return retorno;
}

export default verificarQuantidadeParcelas;