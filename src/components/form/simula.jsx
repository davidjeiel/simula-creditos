import React, {useState, useContext, useEffect} from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TableChartIcon from '@mui/icons-material/TableChart';
import { TextField } from '@mui/material';
import { Button, ButtonGroup }   from 'react-bootstrap';
import { Request } from '../../services/request';
import ContextoSimulacao from '../../common/context/ContextoSimulacao.js';
import Modal from '../Modal';
import verificarQuantidadeParcelas from '../../utils/verificaQuantidadeDeParcelas';
import Produtos from '../../data/Produtos';

export default function Simula()
{
    const {setSimulacao} = useContext(ContextoSimulacao);
    const [parcelas,  setParcelas ] = useState(0);
    const [credito,   setCredito  ] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [dataModal, setDataModal] = useState({"open": "", "content": "", "title": ""});
    const [modal,     setModal    ] = useState();

    const handleChangeParcela = value=>{ setParcelas(value) };
    const handleChangeCredito = value=>{  setCredito(value) };
    const handleSimula = async ()=>{
        let validaDados = verificarQuantidadeParcelas(credito, parcelas);
        let data    = { "valorDesejado": credito, "prazo": parcelas };
        let options = { method: "POST" };
        let url     = 'https://apphackaixades.azurewebsites.net/api/Simulacao';
        if(validaDados){
            setOpenModal(false);
            Request(url, data, options).then(
                async (data)=>{
                    await setSimulacao(data);
                }
            )  
        }else{
            setOpenModal(true);
            setDataModal({
                title:   "Não existe produto com este valor associado ao prazo informado",
                content: "Por favor informe parcelas e prazos dentro dos limites de produtos disponíveis" 
            })
        }
    }

    useEffect(()=>{
        if(openModal){
            setModal(<Modal open={openModal} content={dataModal.content} title={dataModal.title}/>);
        }else{
            setModal('');
        }
    },[openModal])

    return(
        <div className="container-fluid">            
            <div className="row pt-5">
                <div className="col-md-3"></div>               
                <div className="col-md-2 text-center">
                    <TextField
                        id="outlined-credito-input"
                        label="Valor desejado"
                        type="number"
                        style={{ height: "80px", width: "100%" }}
                        onChange={ (e)=>handleChangeCredito(e.target.value) }
                    />
                </div>
                <div className="col-md-2 text-center">
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
                <div className="col-md-2">
                    <Button 
                        variant='outline-primary' 
                        className='text-uppercase fs-bold'
                        onClick={ handleSimula }
                        style={{ height: "56px", width: "100%" }}
                    >
                        <AttachMoneyIcon />
                        Simular
                    </Button>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 text-center'>
                    <ButtonGroup>
                        <Button 
                            variant="outline-primary" 
                            aria-label="Tabela de Produtos"  
                            type="button" 
                            className='text-uppercase fs-bold'
                            data-bs-toggle="collapse" 
                            data-bs-target="#lista-produtos"
                        >
                            <TableChartIcon /> Lista de Produtos Caixa
                        </Button>
                    </ButtonGroup>
                </div>
                <div className='col-md-3'></div>
            </div>
            <ul className='nav nav-pills mb-3' role='tablist'>
                <li className='nav-item'></li>
            </ul>
            <div className='row' >
                <div className='collapse' id='lista-produtos'>
                    <Produtos />
                </div>
                <div className='collapse' id='lista-bancos'>
                    Outros bancos
                </div>
            </div>
            {modal}
        </div>
    )
}