import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const AppointmentData = ({ appointment }) => {

    const { year, day, month, doctor_name, specialty, slot, time } = appointment;
    const theme = useTheme();

    return (
        <Card sx={{ minWidth: 200, marginBottom: '1rem', borderRadius: '15px 8px 8px 15px' }}>
            <CardContent
                sx={{
                    padding: 0,
                    ':last-child': { padding: 0 },
                    display: 'flex',
                    backgroundColor: theme.palette.mode === 'dark' ? '' : '#FFF5F5'
                }}
            >
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderRadius: '15px'
                    }}
                >
                    <Box p={2}>
                        <Typography
                            color='#8A8686'
                            fontWeight='500'
                            textAlign='center'
                            fontSize='0.8rem'
                            variant='body1'
                        >
                            {year}
                        </Typography>
                        <Typography
                            textAlign='center'
                            fontSize='1.25rem'
                            fontWeight='600'
                            variant='h5'
                            component='div'
                        >
                            {day}
                        </Typography>
                        <Typography
                            color='#8A8686'
                            fontWeight='500'
                            textAlign='center'
                            fontSize='1.25rem'
                            variant='h5'
                            component='div'
                        >
                            {month}
                        </Typography>
                    </Box>
                </Paper>

                <Box sx={{ paddingX: 1, paddingY: 2 }}>
                    <Typography
                        fontSize='1rem'
                        fontWeight='500'
                        variant='h5'
                        component='div'
                    >
                        {doctor_name}
                    </Typography>
                    <Typography
                        variant='body2'
                        fontWeight='400'
                        gutterBottom
                        component='div'
                    >
                        {specialty}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box
                            sx={{
                                backgroundColor: '#FFF',
                                borderRadius: '5px',
                                padding: '3px'
                            }}
                        >
                            <Typography
                                variant='h6'
                                fontSize='0.875rem'
                                color={theme.palette.mode === 'dark' && '#000'}
                                component='div'
                            >
                                <Box
                                    component='span'
                                    color='#8A8686'
                                >
                                    Slot
                                </Box> {slot}
                            </Typography>
                        </Box>
                        <Box
                            ml={1}
                            sx={{
                                backgroundColor: '#FFF',
                                borderRadius: '5px',
                                padding: '3px'
                            }}
                        >
                            <Typography
                                variant='h6'
                                fontSize='0.875rem'
                                color={theme.palette.mode === 'dark' && '#000'}
                                component='div'
                            >
                                <Box
                                    component='span'
                                    color='#8A8686'
                                >
                                    Time
                                </Box> {time}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AppointmentData;