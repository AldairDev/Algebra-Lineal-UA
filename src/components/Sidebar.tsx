import React from 'react';
import {Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import logoUA from '../images/LogoUA.jpg';
import FunctionsIcon from '@mui/icons-material/Functions';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ComputerIcon from '@mui/icons-material/Computer';
import Filter1Icon from '@mui/icons-material/Filter1';
import CategoryIcon from '@mui/icons-material/Category';
import TimelineIcon from '@mui/icons-material/Timeline';
import theme from '../theme';

function Sidebar() {
    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: 240, boxSizing: 'border-box'},
                }}
            >
                <List>
                    <ListItem component={Link} to="/" sx={{padding: '10px 20px'}}>
                        <img src={logoUA} alt="Logo UA" style={{width: '100%', height: 'auto'}}/>
                    </ListItem>
                    <ListItem component={Link} to="/teoria-numeros" sx={{padding: '10px 20px'}}>
                        <ListItemButton sx={{'&:hover': {backgroundColor: '#e0e0e0'}}}>
                            <ListItemIcon>
                                <FunctionsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Teoría de Números" sx={{color: '#333'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={Link} to="/congruencias" sx={{padding: '10px 20px'}}>
                        <ListItemButton sx={{'&:hover': {backgroundColor: '#e0e0e0'}}}>
                            <ListItemIcon>
                                <CompareArrowsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Congruencias" sx={{color: '#333'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={Link} to="/modelos-computadoras" sx={{padding: '10px 20px'}}>
                        <ListItemButton sx={{'&:hover': {backgroundColor: '#e0e0e0'}}}>
                            <ListItemIcon>
                                <ComputerIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Modelos de Computadoras y los Números Enteros" sx={{color: '#333'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={Link} to="/numeros-primos" sx={{padding: '10px 20px'}}>
                        <ListItemButton sx={{'&:hover': {backgroundColor: '#e0e0e0'}}}>
                            <ListItemIcon>
                                <Filter1Icon/>
                            </ListItemIcon>
                            <ListItemText primary="Números Primos" sx={{color: '#333'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={Link} to="/topologia-computacional" sx={{padding: '10px 20px'}}>
                        <ListItemButton sx={{'&:hover': {backgroundColor: '#e0e0e0'}}}>
                            <ListItemIcon>
                                <CategoryIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Topología Computacional" sx={{color: '#333'}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component={Link} to="/teoria-complejidad" sx={{padding: '10px 20px'}}>
                        <ListItemButton sx={{'&:hover': {backgroundColor: '#e0e0e0'}}}>
                            <ListItemIcon>
                                <TimelineIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Teoría de la Complejidad" sx={{color: '#333'}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </ThemeProvider>
    );
}

export default Sidebar;