import React from 'react';
import {Alert, Card, CardContent, Divider, Grid2, Typography} from "@mui/material";
import PrimeGenerator from "../components/PrimeGenerator";

function NumerosPrimos() {
    return (
        <Card>
            <Grid2 container>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h2" gutterBottom={true}>
                            Numeros Primos
                        </Typography>
                        <Typography variant="h6">
                            Un número primo es un entero mayor que 1 que solo tiene dos divisores positivos:
                            1 y él mismo. Por ejemplo, 2 , 3 , 5 , 7 2,3,5,7 son números primos.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6">
                                En Matemática Computacional, los números primos juegan un papel fundamental, no solo en
                                el estudio teórico, sino también
                                en diversas aplicaciones prácticas, como criptografía, algoritmos y teoría de números.
                            </Typography>
                        </Alert>
                    </CardContent>
                    <Divider/>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Alert variant='outlined' color='warning'>
                            <Typography variant="h5" gutterBottom={true}>
                                Importancia de los Números Primos en Matemática Computacional
                            </Typography>
                        </Alert>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                1. Factorización y Estructura Matemática:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Los números primos son los "bloques de construcción" de los números enteros, ya que
                                cualquier número entero positivo puede expresarse
                                como un producto único de números primos (Teorema Fundamental de la Aritmética).
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Esto los hace esenciales en el análisis de propiedades de números y algoritmos
                                relacionados.
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                2. Criptografía:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Los números primos son la base de muchos sistemas de cifrado modernos, como el RSA. La
                                seguridad de estos sistemas
                                se basa en la dificultad computacional de factorizar un número compuesto grande en sus
                                factores primos.
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                3.Ciencias Computacionales y Modelado:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - En el modelado y simulación, los números primos a veces se emplean en la distribución
                                de puntos (por ejemplo, mediante secuencias casi aleatorias como los números primos en
                                ciertas dimensiones).
                            </Typography>
                        </Grid2>
                    </CardContent>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Alert severity='warning'>
                            <Typography variant="h6" gutterBottom={true}>
                                Aplicaciones de los Números Primos
                            </Typography>
                        </Alert>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                1.Criptografía:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - El cifrado RSA utiliza números primos grandes y su producto (número semiprimo)
                                como base para la seguridad..
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                2.Teoría de juegos:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Algunos juegos y modelos matemáticos usan primos para definir estrategias o
                                reglas.
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <Grid2 size={12}>
                        <CardContent>
                            <PrimeGenerator/>
                        </CardContent>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Card>
    )
        ;
}

export default NumerosPrimos;