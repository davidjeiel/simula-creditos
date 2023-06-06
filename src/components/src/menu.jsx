import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Marca  from '../../assets/img/CAIXA_volume_negativa.png'

export default function Menu(params)
{
    const darkTheme = createTheme({
        palette: {
            mode: 'light',
            primary: { main: '#005ca9'},
        },
    });
    return(
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }} className="pb-5">
                <AppBar color="primary">
                    <Toolbar>
                        <span style={{ paddingRight: "2%" }}>
                             <img src={Marca} className="img-fluid" alt="Marca Caixa" style={{ height: "40px" }}/>
                        </span>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>                                
                            HACKCAIXA - Calculadora de Créditos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}