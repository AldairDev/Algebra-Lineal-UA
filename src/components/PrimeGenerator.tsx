import React, {useState} from "react";
import {Box, Typography, TextField, Button, Alert} from "@mui/material";

const PrimeGenerator: React.FC = () => {
    const [limit, setLimit] = useState<number | string>("");
    const [primes, setPrimes] = useState<number[]>([]);
    const [error, setError] = useState<string | null>(null);

    const generatePrimes = (n: number): number[] => {
        const isPrime = Array(n + 1).fill(true);
        isPrime[0] = isPrime[1] = false;

        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        return isPrime.map((prime, index) => (prime ? index : -1)).filter((x) => x !== -1);
    };

    const handleGenerate = () => {
        const numLimit = Number(limit);

        if (isNaN(numLimit) || numLimit <= 1) {
            setError("Por favor, ingrese un número mayor que 1.");
            setPrimes([]);
            return;
        }

        setError(null);
        const result = generatePrimes(numLimit);
        setPrimes(result);
    };

    return (
        <Box sx={{padding: 3}}>
            <Typography variant="h4" gutterBottom>
                Generador de Números Primos
            </Typography>
            <Typography variant="body1" paragraph>
                Introduzca un número límite para generar todos los números primos menores o iguales al límite utilizando
                la Criba de Eratóstenes.
            </Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2, maxWidth: 400}}>
                <TextField
                    label="Límite"
                    type="number"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={handleGenerate}>
                    Generar Números Primos
                </Button>
                {error && <Alert severity="error">{error}</Alert>}

                {primes.length > 0 && (
                    <Box sx={{marginTop: 2}}>
                        <Alert severity="success">
                            <Typography variant="h6">Números Primos Generados:</Typography>
                            <Typography>{primes.join(", ")}</Typography>
                        </Alert>

                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default PrimeGenerator;
