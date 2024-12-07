import React from 'react';
import {Typography, Grid2, CardContent, Card, Divider, Alert, List, ListItem, ListItemText} from '@mui/material';

function Congruencias() {
    return (
        <Card>
            <Grid2 container spacing={1}>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h2" gutterBottom={true}>
                            Congruencias
                        </Typography>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6" paragraph>
                                En matemática computacional, las congruencias son una herramienta matemática que se
                                utiliza
                                principalmente en el campo de la teoría de números para resolver problemas relacionados
                                con
                                divisibilidad y aritmética modular.
                            </Typography>
                        </Alert>

                    </CardContent>
                    <Divider/>
                </Grid2>
                <CardContent>
                    <Grid2 size={12}>
                        <Typography variant="h5" gutterBottom={true}>
                            Concepto Básico
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="body1" paragraph>
                            Una congruencia es una relación entre dos números enteros en la que tienen el mismo resto al
                            dividirlos por un número llamado módulo.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Una congruencia se expresa como:
                            <strong> a ≡ b (mod m)</strong>. Esto significa que la diferencia entre
                            <strong>a</strong> y <strong>b</strong> es divisible por <strong>m</strong>.
                        </Typography>
                    </Grid2>
                    <Divider/>
                    <Grid2 size={12}>
                        <Typography variant="h5" gutterBottom>
                            Ejemplo
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="body1" paragraph>
                            Si <strong>7 ≡ 2 (mod 5)</strong>, significa que al dividir 7 y 2 entre 5,
                            ambos tienen el mismo resto, que es 2.
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="h5" gutterBottom>
                            Propiedades
                        </Typography>
                    </Grid2>
                    <Grid2 size={12}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Reflexiva: a ≡ a (mod m)"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Simétrica: Si a ≡ b (mod m), entonces b ≡ a (mod m)"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Transitiva: Si a ≡ b (mod m) y b ≡ c (mod m), entonces a ≡ c (mod m)"/>
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="h5" gutterBottom>
                            Aplicaciones
                        </Typography>
                    </Grid2>
                    <Typography variant="body1" paragraph>
                        <List>
                            <ListItem divider>
                                <ListItemText
                                    primary="Criptografia: En algoritmos como RSA, donde se usan propiedades de congruencias para cifrar y descifrar mensajes."/>
                            </ListItem>
                            <ListItem divider>
                                <ListItemText
                                    primary="Algoritmos de Divisibilidad:Soluciones eficientes de problemas como el cálculo del resto (mod) en grandes números."/>
                            </ListItem>
                            <ListItem divider>
                                <ListItemText
                                    primary="Algoritmos de Generación de Números Pseudoaleatorios: Se utilizan congruencias para generar secuencias de números pseudoaleatorios."/>
                            </ListItem>
                            <ListItem divider>
                                <ListItemText
                                    primary="Teoría de Códigos: Se utilizan congruencias para generar secuencias de números pseudoaleatorios."/>
                            </ListItem>
                            <ListItem divider>
                                <ListItemText
                                    primary="Resolución de Ecuaciones Diofánticas Modulares: Resolver problemas como encontrar soluciones enteras a ecuaciones modulares. "/>
                            </ListItem>
                        </List>
                    </Typography>
                </CardContent>
            </Grid2>
        </Card>

    )
        ;
}

export default Congruencias;