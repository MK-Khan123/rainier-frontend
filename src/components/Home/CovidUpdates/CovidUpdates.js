import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import vaccinationImage from '../../../images/covid-updates/svg_sample_2.svg';

const CovidUpdates = () => {
    return (
        <Card sx={{ minWidth: 200, marginBottom: '1rem', borderRadius: '8px', mt: 4 }}>
            <CardContent sx={{ padding: 0, ':last-child': { padding: 0 } }}>
                <Box
                    sx={{ display: { md: 'flex', alignItems: 'center', justifyContent: 'space-between' } }}
                >
                    <Typography variant='h5' fontWeight='600' fontSize='1.25rem' gutterBottom component='div' p={2}>Covid-19 Updates</Typography>
                    <Box sx={{ p: { md: 2 } }}>
                        <Typography variant='body1' fontWeight='500' fontSize='1rem' pl={2}>10 September 2022</Typography>
                        <Typography variant='body1' fontSize='1rem' color='#8A8686' gutterBottom pl={2}>Thursday 10:00 AM</Typography>
                    </Box>
                </Box>

                <Grid container align='center' pb={3}>
                    <Grid item xs={12} md={6}>
                        <img src={vaccinationImage} alt="" />
                    </Grid>
                    <Grid container item xs={12} md={6}
                        sx={{
                            background: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '8px',
                            margin: 'auto',
                            maxWidth: { xs: '177px', md: '377px' }
                        }}
                    >
                        <Box sx={{ display: { md: 'flex' }, margin: 'auto', padding: { sm: 1 }, }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Infection Number</Typography>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>500</Typography>
                                </>
                                <>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Infection Rate</Typography>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>10%</Typography>
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
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Total Infection</Typography>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>500,000</Typography>
                                </>
                                <>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Number of Death</Typography>
                                    <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>20</Typography>
                                </>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
};

export default CovidUpdates;