import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import heart from '../../../images/patient-stat/heart.svg';
import bloodPressure from '../../../images/patient-stat/blood-pressure.svg';
import oxygenSaturation from '../../../images/patient-stat/bubble.svg';
import glucoseCount from '../../../images/patient-stat/blood-sugar.svg';

const PatientStat = () => {

    const patientStat = [
        {
            title: 'pulse count',
            measurement: '60 bpm',
            condition: 'normal',
            icon: heart,
            color: '#03922B'
        },
        {
            title: 'blood pressure',
            measurement: '110/70 mm/Hg',
            condition: 'slightly higher',
            icon: bloodPressure,
            color: '#82AB0D'
        },
        {
            title: 'oxygen saturation',
            measurement: '97 %',
            condition: 'slightly higher',
            icon: oxygenSaturation,
            color: '#82AB0D'
        },
        {
            title: 'glucose count',
            measurement: '100 mm/dL',
            condition: 'normal',
            icon: glucoseCount,
            color: '#03922B'
        }
    ];

    return (
        <Grid container spacing={2} sx={{ marginTop: '1.75rem', paddingBottom: '2rem' }}>
            {
                patientStat.map(stat => {
                    return (
                        <Grid key={stat?.title} item xs={6} sm={6} md={3}>
                            <Card
                                sx={{
                                    maxWidth: '10rem',
                                    maxHeight: '9.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid #EDEBEB',
                                    boxShadow: '0px 3.29032px 4.1129px rgba(0, 0, 0, 0.2)',
                                    padding: '0.7rem',
                                    margin: 'auto'
                                }}
                            >
                                <CardContent sx={{ padding: 0 }}>
                                    <img src={stat?.icon} alt={stat?.icon} />
                                    <Typography
                                        mt={1}
                                        textTransform='capitalize'
                                        fontSize='0.8rem'
                                        fontWeight='600'
                                        variant="body1"
                                        gutterBottom
                                    >
                                        {stat?.title}
                                    </Typography>
                                    <Typography
                                        mt={1}
                                        fontSize='1rem'
                                        fontWeight='600'
                                        variant="body1"
                                        gutterBottom
                                    >
                                        {stat?.measurement}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <ArrowDropUpIcon />
                                        <Box>
                                            <Typography
                                                mt={1}
                                                color={stat?.color}
                                                textTransform='capitalize'
                                                fontSize='0.75rem'
                                                fontWeight='500'
                                                variant="body1"
                                                gutterBottom
                                            >
                                                {stat?.condition}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })
            }
        </Grid >
    );
};

export default PatientStat;