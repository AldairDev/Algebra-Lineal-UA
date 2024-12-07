import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

const EuclideanAlgorithm: React.FC = () => {
    const [a, setA] = useState<number | string>("");
    const [b, setB] = useState<number | string>("");
    const [result, setResult] = useState<string | null>(null);
    const [steps, setSteps] = useState<string[]>([]);

    const calculateGCD = (x: number, y: number): number => {
        const stepsLog: string[] = [];
        while (y !== 0) {
            const remainder = x % y;
            stepsLog.push(`MCD(${x}, ${y}) => ${x} % ${y} = ${remainder}`);
            x = y;
            y = remainder;
        }
        setSteps(stepsLog);
        return x;
    };

    const handleCalculate = () => {
        if (a === "" || b === "" || Number(a) <= 0 || Number(b) <= 0) {
            setResult("Por favor, ingrese dos números positivos.");
            setSteps([]);
            return;
        }

        const numA = Number(a);
        const numB = Number(b);
        const gcd = calculateGCD(numA, numB);
        setResult(`El MCD de ${numA} y ${numB} es: ${gcd}`);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Algoritmo de Euclides
            </Typography>
            <Typography variant="body1" paragraph>
                Ingrese dos números para calcular su Máximo Común Divisor (MCD) usando el Algoritmo de Euclides.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}>
                <TextField
                    label="Número A"
                    type="number"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Número B"
                    type="number"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={handleCalculate}>
                    Calcular MCD
                </Button>
                {result && <Alert severity="info">{result}</Alert>}
                {steps.length > 0 && (
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6">Pasos:</Typography>
                        <ul>
                            {steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default EuclideanAlgorithm;
