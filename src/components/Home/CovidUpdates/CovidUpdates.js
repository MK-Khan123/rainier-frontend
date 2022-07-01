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
                <Typography variant='h5' fontWeight='500' fontSize='0.875rem' gutterBottom component='div'>Covid-19 Updates</Typography>
                <Typography variant='body1' fontWeight='500' fontSize='0.875rem'>10 September 2022</Typography>
                <Typography variant='body1' fontSize='0.875rem' color='#8A8686' gutterBottom>Thursday 10:00 AM</Typography>
                <Grid container align='center'>
                    <Grid item xs={12}>
                        <img src={vaccinationImage} alt="" />
                    </Grid>

                    <Grid container item xs={12}
                        sx={{
                            background: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '8px'
                        }}
                    >
                        <Grid item xs={12}>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Infection Number</Typography>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>500</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Infection Rate</Typography>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>10%</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Total Infection</Typography>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>500,000</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='0.875rem' gutterBottom>Number of Death</Typography>
                            <Typography textAlign='center' variant='body1' color='#FFF' fontSize='2.4rem' gutterBottom>20</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CovidUpdates;