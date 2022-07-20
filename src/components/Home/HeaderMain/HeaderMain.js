import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import bannerImage from '../../../images/header-main/banner-image.svg';

const HeaderMain = () => {
    return (
        <Box
            sx={{
                maxWidth: { lg: '44.875rem' },
                maxHeight: { lg: '13.3125rem' },
                background: 'linear-gradient(91.57deg, #FF7594 19.86%, #FF797B 84.16%, #FF7C65 139.72%)',
                borderRadius: '8px',
                marginTop: '2rem'
            }}
        >
            <Grid container>
                <Grid item md={6}>
                    <img src={bannerImage} alt="" />
                </Grid>
                <Grid item md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px: 2
                    }}
                >
                    <Typography color='#FFF' fontSize='1.5rem' fontWeight='600' variant="h5" gutterBottom component="div">
                        Hello, Mary Jane!
                    </Typography>
                    <Typography color='#FFF' mt={1} fontSize='1rem' variant="body1" gutterBottom>
                        Stay up-to-date with your appointments.
                    </Typography>
                    <Typography color='#FFF' mt={1} fontSize='1rem' variant="body1" gutterBottom>
                        You have no pending reports.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeaderMain;