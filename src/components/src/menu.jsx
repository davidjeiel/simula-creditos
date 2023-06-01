import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button } from "react-bootstrap";

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
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <DragHandleIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Calculadora de Créditos
                        </Typography>
                        <Button variant="dark">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}