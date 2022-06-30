import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const AppointmentData = () => {
    return (
        <Card sx={{ minWidth: 200, marginBottom: '1rem', borderRadius: '15px 8px 8px 15px' }}>
            <CardContent sx={{ padding: 0, ':last-child': { padding: 0 }, display: 'flex', backgroundColor: '#FFF5F5' }}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderRadius: '15px'
                    }}
                >
                    <Box p={2}>
                        <Typography color='#8A8686' fontWeight='500' textAlign='center' fontSize='0.8rem' variant='body1'>
                            2022
                        </Typography>
                        <Typography textAlign='center' fontSize='1.25rem' fontWeight='600' variant='h5' component='div'>
                            13
                        </Typography>
                        <Typography color='#8A8686' fontWeight='500' textAlign='center' fontSize='1.25rem' variant='h5' component='div'>
                            Sep
                        </Typography>
                    </Box>
                </Paper>

                <Box px={1} py={2}>
                    <Typography fontSize='1rem' fontWeight='500' variant='h5' component='div'>
                        Dr. Muhammad Abdul Hussein
                    </Typography>
                    <Typography variant='body2' fontWeight='400' gutterBottom component='div'>
                        Cardiologist
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ backgroundColor: '#FFF', borderRadius: '5px', padding: '3px' }}>
                            <Typography variant='h6' fontSize='0.875rem' component='div'>
                                <Box
                                    component='span'
                                    color='#8A8686'
                                >
                                    Slot
                                </Box> Morning
                            </Typography>
                        </Box>
                        <Box ml={1} sx={{ backgroundColor: '#FFF', borderRadius: '5px', padding: '3px' }}>
                            <Typography variant='h6' fontSize='0.875rem' component='div'>
                                <Box
                                    component='span'
                                    color='#8A8686'
                                >
                                    Time
                                </Box> 10.00 AM
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AppointmentData;