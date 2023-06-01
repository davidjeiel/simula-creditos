import React, {useState, useContext} from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Request } from '../../services/request';
import ContextoSimulacao from '../../common/context/ContextoSimulacao';
import ListaParcelas from '../parcelas/ListaParcelas';
import Parcelas from '../parcelas';


export default function Simula(params)
{
    const [parcelas, setParcelas ] = useState(0);
    const [credito,  setCredito  ] = useState(0);
    const [dadosSimulacao, setDadosSimulacao] = useState([]);

    const handleChangeParcela = (value) => {
        setParcelas(value);
    };
    const handleChangeCredito = (value) => {
        setCredito(value);
    };
    const handleSimula = async ()=>{
        let data    = { "valorDesejado": credito, "prazo": parcelas };
        let options = { method: "POST" };
        let url     = 'https://apphackaixades.azurewebsites.net/api/Simulacao';
        Request(url, data, options).then((data)=>{
            setDadosSimulacao(data);
        })         
    }

    return(
        <ContextoSimulacao.Provider value={dadosSimulacao}>
            <div className="container-fluid">            
                <div className="row pt-5">
                    <div className="col-md-2"></div>               
                    <div className="col-md-4 text-center">
                        <TextField
                            id="outlined-credito-input"
                            label="Valor desejado"
                            type="number"
                            style={{ height: "80px", width: "100%" }}
                            onChange={ (e)=>handleChangeCredito(e.target.value) }
                        />
                    </div>
                    <div className="col-md-4 text-center">
                        <TextField
                            id="outlined-parcela-input"
                            label="Prazo"
                            type="number"
                            style={{ height: "80px", width: "100%" }}
                            onChange={ (e)=>{
                                return handleChangeParcela(e.target.value);
                            } }
                        />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 text-center'>
                        <Button 
                            variant='secondary' 
                            className='text-uppercase fs-bold'
                            onClick={ handleSimula }
                        >
                            <AttachMoneyIcon />
                            Simular
                        </Button>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
            <Parcelas />
        </ContextoSimulacao.Provider>

    )
}