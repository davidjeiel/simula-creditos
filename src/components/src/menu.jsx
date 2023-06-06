import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Menu(params)
{
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
            main: '#1976d2',
            },
        },
    });
    return(
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }} className="pb-5">
                <AppBar color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Calculadora de Créditos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}