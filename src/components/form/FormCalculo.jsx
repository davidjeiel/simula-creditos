import React, { useState } from 'react';
import { Row, Col,  FormControl } from 'react-bootstrap';
import { TabelaCalculo } from '../open/TabelaCalculo';

export function FormCalculo() {
  const [credito, setCredito] = useState(0);
  const [prazo,   setPrazo  ] = useState(0);
  const [taxa,    setTaxa   ] = useState(0);

  const handleCredito = (valor) => {
    setCredito(valor);
  };

  const handlePrazo = (valor) => {
    setPrazo(valor);
  };
  
  const handleTaxa = (valor) => {
    setTaxa(valor);
  };

  return (
    <div className="container-fluid pt-2">
      <Row>
        <Col md={4}>
          <label>Credito</label>
          <FormControl onChange={(e) => handleCredito(e.target.value)} />
        </Col>
        <Col md={4}>
          <label>Prazo</label>
          <FormControl onChange={(e) => handlePrazo(e.target.value)} />
        </Col>
        <Col md={4}>
          <label>Taxa</label>
          <FormControl onChange={(e) => handleTaxa(e.target.value)} />
        </Col>
      </Row>
      <Row>
        {
          ( 
            credito !== '' 
            && 
            prazo   !== '' 
            && 
            (
                taxa !== '' 
                && 
                taxa !== 0
                && 
                taxa !== '0'
                && 
                taxa !== '0.0'
                && 
                taxa !== '0.00'
            )
          ) ?
            <TabelaCalculo valor={credito} prazo={prazo} taxa={taxa} />        
          :''
        }
      </Row>
    </div>
  );
}

