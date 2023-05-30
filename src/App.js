import React, {useState} from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <label for="">Parcelas</label>
          <input type="number" value={parcelas} className="form-control" style={{ height: "80px" }}/>
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
          <label for="">Prestação</label>
          <input type="number" value={prestacoes} className="form-control" style={{ height: "80px" }} />
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
          <label>Crédito</label>
          <input type="number" value={credito} className="form-control" style={{ height: "80px" }} />
          <Box sx={{ width: "100%", paddingTop: "6%" }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={credito}
              onChange={handleChangeCredito}
              valueLabelDisplay="auto"
              defaultValueText={credito}
              marks={marcasCredito}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}
