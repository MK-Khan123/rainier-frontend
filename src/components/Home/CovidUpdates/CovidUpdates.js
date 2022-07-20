import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import vaccinationImage from '../../../images/covid-updates/svg_sample_2.svg';
import './CovidUpdates.css';

const CovidUpdates = () => {

    const theme = useTheme();

    return (
        <Card
            sx={{
                minWidth: 200,
                maxWidth: { lg: '28.25rem' },
                maxHeight: { lg: '18.75rem' },
                marginLeft: { lg: 2 },
                borderRadius: '8px',
                mt: { md: '1.75rem', lg: 2 }
            }}
        >
            <CardContent sx={{ padding: 0, ':last-child': { padding: 0 } }}>
                <Box
                    sx={{ display: { md: 'flex', alignItems: 'center', justifyContent: 'space-between' } }}
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        fontSize='1.25rem'
                        gutterBottom
                        component='div'
                        p={2}
                    >
                        Covid-19 Updates
                    </Typography>
                    <Box sx={{ p: { md: 2 } }}>
                        <Typography
                            variant='body1'
                            fontWeight='500'
                            fontSize='1rem'
                            pl={2}
                        >
                            10 September 2022
                        </Typography>
                        <Typography
                            variant='body1'
                            fontSize='1rem'
                            color={theme.palette.mode === 'dark' ? '' : '#8A8686'}
                            gutterBottom
                            pl={2}
                        >
                            Thursday 10:00 AM
                        </Typography>
                    </Box>
                </Box>

                <Grid container align='center'>
                    <Grid item xs={12} md={6} lg={7}>
                        <img src={vaccinationImage} alt="" />
                    </Grid>
                    <Grid item xs={12} md={5} lg={5}
                        className='covid-update'
                        sx={{
                            background: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '8px',
                            margin: { md: 'auto', lg: 0 },
                            overflow: 'auto',
                            maxWidth: { xs: '177px', md: '23.5625rem', lg: '11.0625rem' },
                            maxHeight: { lg: '11.875rem' },
                            marginBottom: { md: 2, lg: 0 }
                        }}
                    >
                        <Box
                            sx={{
                                display: { md: 'flex' },
                                flexDirection: { lg: 'column' },
                                justifyContent: { md: 'center' },
                                margin: 'auto',
                                padding: { sm: 1 }                                
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='0.875rem'
                                        gutterBottom
                                    >
                                        Infection Number
                                    </Typography>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='2.4rem'
                                        gutterBottom
                                    >
                                        500
                                    </Typography>
                                </>
                                <>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='0.875rem'
                                        gutterBottom
                                    >
                                        Infection Rate
                                    </Typography>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='2.4rem'
                                        gutterBottom
                                    >
                                        10%
                                    </Typography>
                                </>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='0.875rem'
                                        gutterBottom
                                    >
                                        Total Infection
                                    </Typography>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='2.4rem'
                                        gutterBottom
                                    >
                                        500,000
                                    </Typography>
                                </>
                                <>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='0.875rem'
                                        gutterBottom
                                    >
                                        Number of Death
                                    </Typography>
                                    <Typography
                                        textAlign='center'
                                        variant='body1'
                                        color='#FFF'
                                        fontSize='2.4rem'
                                        gutterBottom
                                    >
                                        20
                                    </Typography>
                                </>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CovidUpdates;