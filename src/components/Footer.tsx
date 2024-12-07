import React from 'react';
import { Card, Grid2, Typography, Box } from '@mui/material';
import logoUA from '../images/Autonoma.png';

function Footer() {
  return (
    <Card style={{ padding: '20px', background: '#f1f1f1' }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid2 container justifyContent="space-between" alignItems="center" style={{ maxWidth: '800px' }}>
          <Grid2 >
            <Typography variant="body1" align="center">&copy; Desarrollado por Aldair Sosa. Todos los derechos reservados.</Typography>
            <Typography variant="body1" align="center">Matemática Computacional - 2024</Typography>
          </Grid2>
          <Grid2>
            <img src={logoUA} alt="Logo Universidad Autónoma del Perú" style={{ width: '100px', height: 'auto' }} />
          </Grid2>
        </Grid2>
      </Box>
    </Card>
  );
}

export default Footer;