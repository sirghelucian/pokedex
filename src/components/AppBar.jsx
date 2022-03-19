import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
//npm install @mui/icons-material     installando questa libreria ci darà nuovi attributi da utilizzare come Appbar,Box,Toolbar etc.
export default function ButtonAppBar() {
    const navigate = useNavigate();//permette di navigare da una pagina all'altra
    const location = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button
                        //Bottone home
                        onClick={() => {
                            navigate("/");
                        }}
                        color="inherit"
                        variant={
                            location.pathname === "/" ? "outlined" : "text"
                        }
                    >
                        Home
                    </Button>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Pokedex
                    </Typography>
                    <Button
                        //Al click sul bottone random estrae un numero casuale e visualizza il pokemon con quell'id
                        onClick={() => {
                            navigate(
                                "/pokemon/" + Math.floor(Math.random() * 898)
                            );
                        }}
                        color="inherit"
                    >
                        Random
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
