import React, {useState} from 'react';
import {Typography, Grid2, CardContent, Card, Divider, Box, TextField, Button, Alert} from '@mui/material';
import teorema from "../images/teorema.png";
import ejemplo from "../images/ejemplo.png";

function TeoriaNumeros() {
    const [number, setNumber] = useState('');
    const [reversedNumber, setReversedNumber] = useState('');

    const numerosEnOrdenInverso = (num: string) => {
        return num.split('').reverse().join('');
    };

    const handleReverse = () => {
        if (number.length === 5 && !isNaN(Number(number))) {
            setReversedNumber(numerosEnOrdenInverso(number));
        } else {
            setReversedNumber('Por favor, ingrese un número de 5 dígitos.');
        }
    };

    return (
        <Card>
            <Grid2 container spacing={1}>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography component="div" variant="h2" gutterBottom={true}>Teoría de Números</Typography>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6"> La teoría de los números es la rama de las matemáticas que
                                estudia
                                las propiedades y las relaciones entre tipos particulares de números.</Typography>
                            <Typography variant="h6"> Los números que se estudian en la teoría de los números son los
                                números enteros, los cuales son los números que no tienen parte fraccionaria.
                            </Typography>
                        </Alert>
                    </CardContent>
                    <Divider/>
                </Grid2>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h5">Algoritmo de la division</Typography>
                        <Typography color='error' paddingTop={2} variant="h6">Teorema</Typography>
                        <Typography variant="body1">Dados dos enteros a y b con b {'>'} 0, existen enteros únicos q y r
                            tales que a = bq + r y 0 ≤ r {'>'} | b|.</Typography>
                        <Typography paddingTop={2} variant="body1">Donde, a es llamado Dividendo, b es divisor, q es el
                            cociente y r es menor al residuo no negativo de la división de a por b.
                        </Typography>
                        <Box>
                            <img src={teorema} alt="Logo UA" style={{width: '50%', height: 'auto'}}/>
                        </Box>
                    </CardContent>
                    <Divider/>
                </Grid2>
                <Grid2 size={12}>
                    <CardContent>
                        <Box>
                            <Typography color='error' paddingTop={2} variant="h6">Ejemplo</Typography>
                            <Typography variant="body1">Para a = -100 y b = -7</Typography>
                            <Typography variant="body1">tenemos q = 15 y r = 5</Typography>
                        </Box>
                        <Box>
                            <img src={ejemplo} alt="Logo UA" style={{width: '50%', height: 'auto'}}/>
                        </Box>
                    </CardContent>
                    <Divider/>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h4">EJERCICIO</Typography>
                        <Typography variant="h6">Dado un número de 5 dígitos, devolver el número en orden inverso.
                        </Typography>
                        <TextField
                            label="Número de 5 dígitos"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleReverse}>
                            Invertir
                        </Button>
                        {reversedNumber && (
                            <Box marginTop={2}>
                                <Typography variant="body1">Número Invertido: {reversedNumber}</Typography>
                            </Box>
                        )}
                    </CardContent>
                </Grid2>
            </Grid2>
        </Card>
    );
}

export default TeoriaNumeros;