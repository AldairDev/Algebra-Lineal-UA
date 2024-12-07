import React from 'react';
import {Alert, Card, CardContent, Divider, Grid2, Typography} from "@mui/material";

function TeoriaDeLaComplejidad() {
    return (
        <Card>
            <Grid2 container>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h2" gutterBottom={true}>
                            Teoría de la Complejidad
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6">
                                La teoría de la complejidad computacional es un área de la informática teórica que
                                estudia y
                                clasifica los problemas computacionales según su dificultad y los recursos necesarios
                                para
                                resolverlos. En el contexto de matemática computacional, esta teoría es crucial para
                                entender los límites de lo que se puede calcular de manera eficiente y cómo optimizar
                                algoritmos para problemas matemáticos.
                            </Typography>
                        </Alert>
                    </CardContent>
                    <Divider/>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Alert variant='outlined' color='warning'>
                            <Typography variant="h5" gutterBottom={true}>
                                ¿Qué es la complejidad computacional?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                La complejidad computacional analiza cuánto tiempo y cuánta memoria (u otros recursos
                                computacionales) se requieren para resolver un problema utilizando un algoritmo
                                específico.
                                Esto se mide generalmente en función del tamaño de la entrada, denominado n.
                            </Typography>
                        </Alert>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h4" gutterBottom={true}>
                                Clases de Complejidad
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                En matemática computacional, las clases de complejidad ayudan a categorizar problemas de
                                acuerdo con los recursos necesarios para resolverlos.
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                1. P (Tiempo Polinómico):
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Problemas que se pueden resolver en tiempo polinómico respecto al tamaño de la
                                entrada.
                            </Typography>
                            <Alert variant='filled' severity='success'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: Sumar dos números grandes, resolver un sistema lineal por eliminación
                                    gaussiana.
                                </Typography>
                            </Alert>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                2.NP (No Determinista Polinómico):
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Problemas cuyos resultados pueden ser verificados en tiempo polinómico, aunque no
                                necesariamente se resuelven en tiempo polinómico.
                            </Typography>
                            <Alert variant='filled' severity='success'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: Problema del Viajante (TSP), factorización de números enteros.
                                </Typography>
                            </Alert>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                3.NP-completo:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Problemas en NP que son al menos tan difíciles como cualquier otro problema en NP.
                            </Typography>
                            <Alert variant='filled' severity='success'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: Determinar si existe un ciclo hamiltoniano en un grafo.
                                </Typography>
                            </Alert>
                        </Grid2>
                    </CardContent>
                </Grid2>
                <Grid2 size={12}>
                    <Divider/>
                    <CardContent>
                        <Alert severity='warning'>
                            <Typography variant="h6" gutterBottom={true}>
                                Aplicaciones de la Teoría de la Complejidad
                            </Typography>
                        </Alert>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                1.Factorización de Números Enteros:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Encontrar los factores primos de un número es un problema central en criptografía
                                (e.g., RSA).
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                2.Solución de Sistemas de Ecuaciones:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Resolver sistemas de ecuaciones no lineales puede ser NP-duro dependiendo de la
                                naturaleza del sistema.
                            </Typography>
                        </Grid2>

                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                3.Teoría de Grafos:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Problemas como encontrar el camino más corto (P) o un ciclo hamiltoniano (NP-completo)
                                son fundamentales para la optimización.
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                4.Problemas de Combinatoria:
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Contar el número de soluciones de ciertas configuraciones (e.g., contar combinaciones
                                en un tablero de ajedrez) puede caer en PSPACE.
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <Divider/>
                    <Grid2 size={12}>
                        <CardContent>
                            <Alert severity='success'>
                                <Typography variant="h6" gutterBottom={true}>
                                    Relación con la Matemática Computacional
                                </Typography>
                            </Alert>
                        </CardContent>
                        <CardContent>
                            <Grid2 size={12}>
                                <Typography variant="h6" gutterBottom={true}>
                                    1.Determinar la Viabilidad de Cálculos:
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="body1" paragraph>
                                    - Evalúa si un problema matemático es resoluble en un tiempo razonable.
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="h6" gutterBottom={true}>
                                    2.Diseñar Algoritmos Eficientes:
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="body1" paragraph>
                                    - Al analizar la complejidad de diferentes enfoques, se selecciona el más eficiente.
                                </Typography>
                            </Grid2>

                            <Grid2 size={12}>
                                <Typography variant="h6" gutterBottom={true}>
                                    3.Establecer Límites:
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="body1" paragraph>
                                    - Ayuda a entender cuándo un problema es intrínsecamente difícil y requiere
                                    aproximaciones o métodos heurísticos.
                                </Typography>
                            </Grid2>
                        </CardContent>
                    </Grid2>

                    <Divider/>
                    <Grid2 size={12}>
                        <CardContent>
                            <Alert severity='info'>
                                <Grid2 size={12}>
                                    <Typography variant="h4" gutterBottom={true}>
                                        Conclusiones
                                    </Typography>
                                </Grid2>
                                <Grid2 size={12}>
                                    <Typography variant="body1" paragraph>
                                        La teoría de la complejidad es fundamental en matemática computacional para
                                        comprender y abordar problemas complejos de manera eficiente. Nos ayuda a saber
                                        qué
                                        se puede resolver, cómo se puede resolver, y cuánto costará resolverlo,
                                        proporcionando un marco teórico crucial para el desarrollo de algoritmos y
                                        aplicaciones prácticas.
                                    </Typography>
                                </Grid2>
                            </Alert>
                        </CardContent>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Card>
    )
        ;
}

export default TeoriaDeLaComplejidad;