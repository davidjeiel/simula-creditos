import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import loader  from '../../assets/gif/loader.gif'
import {TabelaCalculo} from './TabelaCalculo'

export function CardBancos({prazo, credito})
{
    const [ dadosBacen, setDadosBacen ] = useState([]);
    const [ taxa, setTaxa ] = useState('');
    const [ expand, setExpand ] = useState(false) 

    const capturaDados = async ()=>{
        const endpoint = 'https://olinda.bcb.gov.br/olinda/servico/taxaJuros/versao/v2/odata/ConsultaUnificada';
        const params = new URLSearchParams({
            $top: 100,
            $format: 'json',
            $select: 'codigoSegmento,Segmento,codigoModalidade,Modalidade,Posicao,InstituicaoFinanceira,TaxaJurosAoMes,cnpj8',
        });

        const url = `${endpoint}?${params}`;

        fetch(url)
        .then(async response => {
            if (!response.ok) {
                throw new Error('Erro ao fazer a requisição. Status: ' + response.status);
            }
            return await response.json();
        })
        .then(async data => {
            let dados = await data.value;
            let dadosFiltrados = await dados.filter(d =>d.codigoSegmento === "1" ).filter(d =>d.Modalidade !== "Aquisição de veículos - Pré-fixado" )            
            setDadosBacen( await dadosFiltrados);   
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    const handleSelecionaBanco = (valor)=>{
        setTaxa(valor);
        setExpand(true);
    }

    useEffect(()=>{
        capturaDados();
    }, [])

    return(
        <Card className="p-2 m-5">
            <Card.Body>
                <Row>
                    <h3 className="text-uppercase text-center">
                        Outros Bancos
                    </h3>
                    <div>
                        <Row>
                            <Col md="4"></Col>
                            <Col md="4">
                                <select 
                                    className="form-select" 
                                    onChange={(e)=>handleSelecionaBanco(e.target.value)}
                                >
                                    <option>Escoha uma opção</option>
                                    {
                                        dadosBacen && 
                                        dadosBacen.map((d, i)=>(
                                            <option key={i} value={d.TaxaJurosAoMes}>
                                                {d.InstituicaoFinanceira}
                                            </option>
                                        ))
                                    }
                                </select>
                            </Col>
                            <Col md="4"></Col>
                        </Row>
                    </div>

                </Row>
                <div className={expand === true ? "collapse show" : "collapse"}>                    
                    {
                        expand !== true ? 
                            <img src={loader} alt="loader" title="loader" />
                            : 
                            <TabelaCalculo valor={credito} prazo={prazo} taxa={taxa}/>
                    }                    
                </div>
            </Card.Body>
        </Card>
    )
}