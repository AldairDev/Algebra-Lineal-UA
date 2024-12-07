import React, { useState, useRef, useEffect } from "react";
import { Delaunay } from "d3-delaunay";
import { Box, Button, Typography, Slider } from "@mui/material";

type Point = [number, number];

const DelaunayVisualizer: React.FC = () => {
    const [points, setPoints] = useState<Point[]>([]);
    const [pointCount, setPointCount] = useState<number>(10); // Número de puntos
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // Genera puntos aleatorios dentro de un área definida (800x600 px)
    const generateRandomPoints = (count: number): Point[] => {
        const width = 800;
        const height = 600;
        const newPoints: Point[] = [];
        for (let i = 0; i < count; i++) {
            newPoints.push([
                Math.random() * width, // Coordenada x
                Math.random() * height, // Coordenada y
            ]);
        }
        return newPoints;
    };

    // Función para calcular y dibujar la triangulación de Delaunay
    const drawDelaunay = () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calcular la triangulación de Delaunay
        const delaunay = Delaunay.from(points);

        // Dibujar triángulos
        ctx.strokeStyle = "#1976d2";
        ctx.lineWidth = 1.5;
        const triangles = delaunay.triangles;

        for (let i = 0; i < triangles.length; i += 3) {
            const p1 = points[triangles[i]];
            const p2 = points[triangles[i + 1]];
            const p3 = points[triangles[i + 2]];

            ctx.beginPath();
            ctx.moveTo(p1[0], p1[1]);
            ctx.lineTo(p2[0], p2[1]);
            ctx.lineTo(p3[0], p3[1]);
            ctx.closePath();
            ctx.stroke();
        }

        // Dibujar puntos
        ctx.fillStyle = "#d32f2f";
        points.forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
    };

    // Manejar la generación de nuevos puntos
    const handleGeneratePoints = () => {
        const newPoints = generateRandomPoints(pointCount);
        setPoints(newPoints);
    };

    // Redibujar cuando los puntos cambien
    useEffect(() => {
        if (points.length > 0) {
            drawDelaunay();
        }
    }, [points]);

    return (
        <Box sx={{ textAlign: "center", padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Visualizador de Triangulación
            </Typography>
            <Typography variant="body1" gutterBottom>
                Genera puntos aleatorios y visualiza su triangulación.
            </Typography>
            <Box sx={{ marginBottom: 3 }}>
                <Slider
                    value={pointCount}
                    onChange={(e, value) => setPointCount(value as number)}
                    min={5}
                    max={100}
                    step={1}
                    valueLabelDisplay="auto"
                    aria-label="Número de puntos"
                />
                <Typography>Número de puntos: {pointCount}</Typography>
            </Box>
            <Button variant="contained" onClick={handleGeneratePoints}>
                Generar Puntos
            </Button>
            <Box sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}>
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    style={{ border: "1px solid #ccc" }}
                ></canvas>
            </Box>
        </Box>
    );
};

export default DelaunayVisualizer;
