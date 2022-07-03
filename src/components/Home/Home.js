import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import TopNavigation from './TopNavigation/TopNavigation';
import HeaderMain from './HeaderMain/HeaderMain';
import PatientStat from './PatientStat/PatientStat';
import ToDoList from './ToDoList/ToDoList';
import Appointments from './Appointments/Appointments';
import CovidUpdates from './CovidUpdates/CovidUpdates';
import { Grid } from '@mui/material';

const Home = () => {
    return (
        <>
            <Sidebar />
            <Box pl={12} pr={5}>
                <Grid container>
                    <Grid item xs={12}>
                        <TopNavigation />
                    </Grid>
                    <Grid item xs={12}>
                        <HeaderMain />
                    </Grid>
                    <Grid item xs={12}>
                        <PatientStat />
                    </Grid>
                    <Box sx={{ display: { md: 'flex' }, flexDirection: { md: 'row-reverse' } }}>
                        <Grid item xs={12}>
                            <Appointments />
                        </Grid>
                        <Grid item xs={12}>
                            <ToDoList />
                        </Grid>
                    </Box>
                    <Grid item xs={12}>
                        <CovidUpdates />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Home;