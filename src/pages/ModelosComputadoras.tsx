import React from 'react';
import {Alert, Card, CardContent, Divider, Grid2, Typography} from "@mui/material";
import EuclideanAlgorithm from "../components/EuclideanAlgorithm";

function ModelosComputadoras() {
    return (
        <Card>
            <Grid2 container spacing={1}>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h2" gutterBottom={true}>
                            Modelos de Computadoras
                        </Typography>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6">
                                Los modelos de computadoras son abstracciones matemáticas que describen cómo funcionan
                                las
                                máquinas computacionales. Estos modelos son
                                fundamentales para comprender cómo procesan la información las computadoras y para
                                diseñar
                                algoritmos eficientes. Los modelos más comunes son
                            </Typography>
                        </Alert>
                    </CardContent>
                    <Divider/>
                </Grid2>
                <Grid2 size={12}>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                1. Máquina de Turing:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Es un modelo teórico inventado por Alan Turing que describe una computadora ideal
                                capaz de realizar cualquier cálculo matemático.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Consiste en una cinta infinita dividida en celdas donde se pueden escribir símbolos y
                                un cabezal que lee y escribe en la cinta.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Es útil para estudiar la decidibilidad y complejidad computacional de problemas
                                matemáticos.
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom>
                                2. Modelo RAM (Random Access Machine):
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Es un modelo más práctico para la computación, similar a cómo funcionan las
                                computadoras actuales.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Asume un conjunto de instrucciones (como sumar, restar, comparar) y un acceso rápido a
                                una memoria arbitraria.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Se utiliza para analizar la eficiencia de algoritmos en términos de tiempo y espacio.
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom>
                                3. Modelo de Autómatas Finitos:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Representa sistemas con un número limitado de estados.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Es útil en el diseño de software para lenguajes regulares, como los usados en
                                procesamiento de texto o diseño de compiladores.
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom>
                                4. Computadoras Cuánticas:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Aunque todavía están en desarrollo, este modelo utiliza principios de la mecánica
                                cuántica para procesar información de manera exponencialmente más rápida en ciertos
                                problemas.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Son útiles para áreas como criptografía y simulaciones físicas.
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <Divider/>
                </Grid2>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h3" gutterBottom={true}>
                            Números Enteros
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Los números enteros (Z) son un conjunto fundamental en matemática computacional, ya que son
                            utilizados para representar datos y realizar cálculos.
                            En computación, trabajar con números enteros presenta ciertas peculiaridades
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom>
                                1. Representación de los Números Enteros:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - En las computadoras, los números enteros son almacenados en binario.
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom>
                                2. Algoritmos para Enteros:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                <Alert severity="info">
                                    Algoritmo de Euclides: Para calcular el máximo común divisor (MCD).
                                </Alert>
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <Alert severity="info">
                                    Teorema chino del resto: Para resolver sistemas de congruencias.
                                </Alert>
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>- Criba de Eratóstenes: Para encontrar números primos. </strong>
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>- Exponenciación modular rápida: Utilizada en criptografía. </strong>
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <Divider/>
                </Grid2>

                <Grid2 size={12}>
                    <Alert severity='success'>
                        <CardContent>
                            <Typography variant="h4" gutterBottom={true}>
                                Relación entre los Modelos y los Números Enteros
                            </Typography>

                            <Typography variant="body1" paragraph>
                                En los modelos computacionales, los números enteros son representados y manipulados de
                                acuerdo con las restricciones del hardware y las abstracciones matemáticas del modelo.
                            </Typography>
                        </CardContent>
                        <CardContent>

                            <Typography variant="body1" paragraph>
                                En una Máquina de Turing, los números pueden representarse como cadenas de ceros y unos
                                en la cinta.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                En el modelo RAM, las operaciones con números enteros se analizan en términos de costo
                                computacional (tiempo y memoria).
                            </Typography>
                        </CardContent>
                    </Alert>
                </Grid2>
                <Divider/>

                <Grid2 size={12}>
                    <Divider/>
                    <CardContent>
                        < EuclideanAlgorithm/>
                    </CardContent>
                </Grid2>
            </Grid2>
        </Card>

    )
        ;
}

export default ModelosComputadoras;