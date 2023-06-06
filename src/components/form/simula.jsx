import React, {useState, useContext, useEffect} from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TableChartIcon from '@mui/icons-material/TableChart';
import { TextField } from '@mui/material';
import { Button }   from 'react-bootstrap';
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
                <div className="col-md-1"></div>               
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
                <div className='col-md-1'>
                    <Button 
                        variant="secondary" 
                        aria-label="Tabela de Produtos"  
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#lista-produtos"
                    >
                        <TableChartIcon /> Produtos
                    </Button>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className='row' >
                <div className='collapse' id='lista-produtos'>
                    <Produtos />
                </div>
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
            {modal}
        </div>
    )
}