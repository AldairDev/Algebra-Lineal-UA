import React from 'react';
import {Alert, Card, CardContent, Divider, Grid2, Typography} from "@mui/material";
import DelaunayVisualizer from "../components/DelaunayVisualizer";

function TopologiaComputacional() {
    return (
        <Card>
            <Grid2 container>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h2" gutterBottom={true}>
                            Topología Computacional
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6">
                                La topología computacional se ocupa de desarrollar algoritmos y representaciones
                                computacionales para resolver problemas relacionados con estructuras topológicas y
                                geométricas.
                            </Typography>
                        </Alert>
                    </CardContent>
                    <Divider/>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                1. Topología:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Se centra en las propiedades de los espacios que se conservan bajo deformaciones
                                continuas,
                                como contracción o estiramiento (sin romper o pegar superficies).
                            </Typography>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                2. Geometría computacional:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Se enfoca en el estudio de problemas geométricos, como la representación de formas,
                                intersecciones, mediciones, y más.
                            </Typography>
                        </Grid2>
                    </CardContent>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Alert severity='warning'>
                            <Typography variant="h6" gutterBottom={true}>
                                Aplicaciones de la Topología Computacional
                            </Typography>
                        </Alert>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                1.Procesamiento de datos geométricos:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Modelado de superficies y objetos en 3D, utilizado en gráficos por computadora,
                                impresión 3D y realidad virtual. </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                2.Análisis de datos multidimensionales:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Usada en análisis de datos topológicos (TDA, por sus siglas en inglés), para estudiar
                                las características intrínsecas de datos complejos en espacios de alta dimensión.
                            </Typography>
                        </Grid2>

                        <Grid2 size={12}>
                            <Typography variant="h6" paragraph>
                                3.Simulación física:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                Modelado de fluidos, cuerpos deformables y otros fenómenos físicos en simulaciones
                                computacionales.
                            </Typography>
                        </Grid2>

                        <Grid2 size={12}>
                            <Typography variant="h6" paragraph>
                                4.Robótica y navegación:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                Planeación de rutas y control de movimiento en espacios complejos con restricciones
                                geométricas.
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <Divider/>
                    <Grid2 size={12}>
                        <CardContent>
                            <DelaunayVisualizer/>
                        </CardContent>
                    </Grid2>
                    <Divider/>
                    <Grid2 size={12}>
                        <CardContent>
                            <Alert severity='info'>
                                <Typography variant="h4" paragraph>
                                    Conclusiones
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    La topología computacional combina el rigor matemático de la topología y geometría
                                    con
                                    el poder de la computación. Sus aplicaciones abarcan desde la representación de
                                    objetos
                                    geométricos hasta el análisis de datos en áreas multidimensionales, convirtiéndola
                                    en
                                    una herramienta esencial en Matemática Computacional.
                                </Typography>
                            </Alert>
                        </CardContent>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Card>
    )
        ;
}

export default TopologiaComputacional;