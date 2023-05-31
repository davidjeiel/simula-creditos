import React, {useState} from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Parcelas from './components/parcelas';
import { TextField } from '@mui/material';
import Produtos from './components/Produtos';

export default function App() 
{
  const [parcelas, setParcelas] = useState(10);
  const [prestacoes, setPrestacoes] = useState(10);
  const [credito, setCredito] = useState(10);


  const handleChangeParcela = (event, newValue) => {
    setParcelas(newValue);
  };
  const handleChangePrestacao = (event, newValue) => {
    setPrestacoes(newValue);
  };
  const handleChangeCredito = (event, newValue) => {
    setCredito(newValue);
  };

  const marcasParcela = [
    {
      value: 10,
      label: "10,00"
    },
    {
      value: 35,
      label: '35,00'
    }
  ]

  const marcasPrestacao = [
    {
      value: 10,
      label: "10,00"
    },
    {
      value: 35,
      label: '35,00'
    }
  ]

  const marcasCredito = [
    {
      value: 10,
      label: "10,00"
    },
    {
      value: 35,
      label: '35,00'
    }
  ]

  return (
    <div>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center">
            <TextField
              id="outlined-password-input"
              label="Parcelas"
              type="number"
              autoComplete="current-password"
              style={{ height: "80px" }}
            />
            <Box sx={{ width: "100%", paddingTop: "6%" }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={parcelas}
                onChange={handleChangeParcela}
                valueLabelDisplay="auto"
                defaultValueText={parcelas}
                marks={marcasParcela}
              />
            </Box>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <TextField
              id="outlined-password-input"
              label="Prestação"
              type="number"
              value={prestacoes}
              onChange={handleChangePrestacao}
              autoComplete="current-password"
              style={{ height: "80px" }}
            />
           
            <Box sx={{ width: "100%", paddingTop: "6%" }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={prestacoes}
                onChange={handleChangePrestacao}
                valueLabelDisplay="auto"
                defaultValueText={prestacoes}
                marks={marcasPrestacao}
              />
            </Box>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center">
            <TextField
              id="outlined-password-input"
              label="Crédito"
              type="number"
              autoComplete="current-password"
              style={{ height: "80px" }}
            />
            <Box sx={{ width: "100%", paddingTop: "6%" }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                
                valueLabelDisplay="auto"
                defaultValueText={credito}
                marks={marcasCredito}
              />
            </Box>
          </div>
        </div>
      </div>
      <Produtos />
      <Parcelas />
    </div>
  );
}
