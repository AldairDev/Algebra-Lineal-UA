import React from 'react';
import {Alert, Card, CardContent, Divider, Grid2, Typography} from "@mui/material";

function Home() {
    return (
        <Card>
            <Grid2 container>
                <Grid2 size={12}>
                    <CardContent>
                        <Typography variant="h2" gutterBottom={true}>
                            Matemática Computacional
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Alert color='success' severity='info'>
                            <Typography variant="h6">
                                La Matemática Computacional es una disciplina que combina el rigor matemático con el
                                poder de la computación para resolver problemas complejos que van desde la física
                                teórica hasta la inteligencia artificial. Este campo se ha convertido en una herramienta
                                fundamental en el mundo moderno, donde la precisión y la eficiencia son esenciales para
                                abordar desafíos científicos, tecnológicos y sociales.
                            </Typography>
                        </Alert>
                    </CardContent>
                    <Divider/>
                </Grid2>

                <Grid2 size={12}>
                    <CardContent>
                        <Alert variant='outlined' color='warning'>
                            <Typography variant="h5" gutterBottom={true}>
                                ¿Qué es la Matemática Computacional?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Es la rama de las matemáticas que utiliza algoritmos, modelos matemáticos y técnicas
                                computacionales para resolver problemas. Su objetivo es aprovechar el poder de las
                                computadoras para realizar cálculos que serían imposibles o demasiado lentos para hacer
                                a mano.
                            </Typography>
                        </Alert>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h4" gutterBottom={true}>
                                Temas Clave en Matemática Computacional
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                1. Representación de Datos y Números
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Las computadoras trabajan en sistemas binarios, lo que requiere representar números
                                enteros, racionales y reales de manera precisa. En este contexto, surgen conceptos
                                importantes como: precisión, redondeo, y errores de truncamiento.
                            </Typography>
                            <Alert variant='filled' severity='info'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: En criptografía, los números enteros se usan para generar claves de cifrado
                                    seguras basadas en la teoría de números.
                                </Typography>
                            </Alert>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                2.Teoría de Números
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Números primos: Utilizados para generar claves seguras en criptografía (por ejemplo,
                                RSA).
                            </Typography>
                            <Typography variant="body1" paragraph>
                                -Congruencias: Resuelven problemas de divisibilidad y sistemas modulares.
                            </Typography>
                            <Alert variant='filled' severity='info'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: El Algoritmo de Euclides se usa para calcular el máximo común divisor
                                    (MCD), una operación crítica en la simplificación de fracciones y criptografía.
                                </Typography>
                            </Alert>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                3.Geometría Computacional
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Topología computacional: Analiza propiedades invariantes de objetos, como formas o
                                estructuras de redes.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Algoritmos geométricos: Usados en videojuegos, diseño CAD y robótica para detectar
                                colisiones o calcular áreas.
                            </Typography>
                            <Alert variant='filled' severity='info'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: En un videojuego, los algoritmos geométricos se usan para determinar si dos
                                    objetos chocan o para encontrar el camino más corto en un mapa.
                                </Typography>
                            </Alert>
                        </Grid2>
                    </CardContent>

                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h5" gutterBottom={true}>
                                4.Teoría de la Complejidad
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Clases de problemas: P, NP, NP-completo.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Impacto práctico: Diseñar algoritmos eficientes para problemas grandes, como el
                                enrutamiento de paquetes en redes.
                            </Typography>
                            <Alert variant='filled' severity='info'>
                                <Typography variant="body1" paragraph>
                                    Ejemplo: El famoso problema del viajante (TSP) busca la ruta más corta para visitar
                                    una serie de ciudades. Es un problema NP-completo.
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
                                Aplicaciones Reales de la Matemática Computacional
                            </Typography>
                        </Alert>
                    </CardContent>
                    <CardContent>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                1.Criptografía y Seguridad Digital
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Generación de claves seguras usando números primos y teoría de números.
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                2.Inteligencia Artificial y Aprendizaje Automático
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Los modelos matemáticos subyacen en técnicas de aprendizaje automático y redes
                                neuronales.
                            </Typography>
                        </Grid2>

                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                3.Simulaciones Científicas y Modelado
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Modelado del clima para predecir fenómenos meteorológicos extremos.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Simulación de terremotos para diseño de estructuras resistentes.
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="h6" gutterBottom={true}>
                                4.Optimización y Logística
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography variant="body1" paragraph>
                                - Uso de algoritmos para optimizar rutas de transporte.
                            </Typography>
                        </Grid2>
                    </CardContent>
                    <Divider/>
                    <Grid2 size={12}>
                        <CardContent>
                            <Alert severity='success'>
                                <Typography variant="h6" gutterBottom={true}>
                                    Futuro de la Matemática Computacional
                                </Typography>
                                <Typography variant="body2" gutterBottom={true}>
                                    Con el auge de la inteligencia artificial y el big data, la matemática computacional
                                    jugará un papel aún más importante.
                                </Typography>
                            </Alert>
                        </CardContent>
                        <CardContent>
                            <Grid2 size={12}>
                                <Typography variant="h6" gutterBottom={true}>
                                    Criptografía cuántica:
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="body1" paragraph>
                                    Diseñar sistemas de seguridad para computadoras cuánticas.
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="h6" gutterBottom={true}>
                                    Análisis de redes:
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="body1" paragraph>
                                    Aplicar topología computacional para entender redes sociales y biológicas.
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
                                        La matemática computacional no solo amplía las fronteras de lo que podemos
                                        resolver con computadoras, sino que también es esencial para muchas tecnologías
                                        modernas. Desde el diseño de algoritmos hasta la simulación de fenómenos
                                        complejos, este campo ofrece herramientas fundamentales para transformar la
                                        manera en que entendemos y resolvemos problemas.

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

export default Home;