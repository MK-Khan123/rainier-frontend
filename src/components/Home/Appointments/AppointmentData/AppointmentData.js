import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AppointmentData = () => {
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardContent sx={{ padding: 0, ':last-child': { padding: 0 } }}>
                <Box sx={{ display: 'flex', height: '100%' }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            border: '1px solid black',
                            borderRadius: '15px'
                        }}
                    >
                        <Box>
                            2022
                        </Box>
                        <Box>
                            13
                        </Box>
                        <Box>
                            Sep
                        </Box>
                    </Box>

                    <Box>
                        <Typography fontSize='1rem' variant='h5' gutterBottom component='div'>
                            Dr. Muhammad Abdul Hussein
                        </Typography>
                        <Typography variant='body2' fontWeight='400' component='div'>
                            Cardiologist
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant='h6' fontSize='0.875rem' component='div'>
                                <Box
                                    component='span'
                                    color='#8A8686'
                                >
                                    Slot
                                </Box> Morning
                            </Typography>
                            <Typography ml={1} variant='h6' fontSize='0.875rem' component='div'>
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