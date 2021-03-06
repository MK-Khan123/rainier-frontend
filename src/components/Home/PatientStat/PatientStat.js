import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import heart from '../../../images/patient-stat/heart.svg';
import heartDark from '../../../images/patient-stat/heart-dark.svg';
import bloodPressure from '../../../images/patient-stat/blood-pressure.svg';
import bloodPressureDark from '../../../images/patient-stat/blood-pressure-dark.svg';
import oxygenSaturation from '../../../images/patient-stat/bubble.svg';
import oxygenSaturationDark from '../../../images/patient-stat/bubble-dark.svg';
import glucoseCount from '../../../images/patient-stat/blood-sugar.svg';
import glucoseCountDark from '../../../images/patient-stat/blood-sugar-dark.svg';

const PatientStat = () => {

    const patientStat = [
        {
            title: 'pulse count',
            measurement: '60 bpm',
            condition: 'normal',
            icon: {
                light: heart,
                dark: heartDark
            },
            color: '#03922B'
        },
        {
            title: 'blood pressure',
            measurement: '110/70 mm/Hg',
            condition: 'slightly higher',
            icon: {
                light: bloodPressure,
                dark: bloodPressureDark
            },
            color: '#82AB0D'
        },
        {
            title: 'oxygen saturation',
            measurement: '97 %',
            condition: 'slightly higher',
            icon: {
                light: oxygenSaturation,
                dark: oxygenSaturationDark
            },
            color: '#82AB0D'
        },
        {
            title: 'glucose count',
            measurement: '100 mm/dL',
            condition: 'normal',
            icon: {
                light: glucoseCount,
                dark: glucoseCountDark
            },
            color: '#03922B'
        }
    ];

    const theme = useTheme();

    return (
        <Grid container spacing={{ xs: 2, md: 0 }} mt={{ xs: '1.75rem' }} sx={{ maxWidth: { lg: '44.875rem' } }}>
            {
                patientStat?.map(stat => {
                    return (
                        <Grid key={stat.title} item xs={6} md={3}>
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
                                    <img src={theme.palette.mode === 'dark' ? stat.icon.dark : stat.icon.light} alt={stat.title} />
                                    <Typography
                                        mt={1}
                                        color={theme.palette.mode === 'dark' ? '#D1D5DB' : 'null'}
                                        textTransform='capitalize'
                                        fontSize='0.8rem'
                                        fontWeight='600'
                                        variant="body1"
                                        gutterBottom
                                    >
                                        {stat.title}
                                    </Typography>
                                    <Typography
                                        mt={1}
                                        color={theme.palette.mode === 'dark' ? '#D1D5DB' : 'null'}
                                        fontSize='1rem'
                                        fontWeight='600'
                                        variant="body1"
                                        gutterBottom
                                    >
                                        {stat.measurement}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <ArrowDropUpIcon sx={{ color: theme.palette.mode === 'dark' ? '#D1D5DB' : 'null' }} />
                                        <Box>
                                            <Typography
                                                mt={1}
                                                color={theme.palette.mode === 'dark' ? '#D1D5DB' : stat.color}
                                                textTransform='capitalize'
                                                fontSize='0.75rem'
                                                fontWeight='500'
                                                variant="body1"
                                                gutterBottom
                                            >
                                                {stat.condition}
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