import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
            <Box pl={12}>
                <Grid container>
                    <Grid item md={12}>
                        <TopNavigation />
                    </Grid>
                    <Grid item md={12}>
                        <HeaderMain />
                    </Grid>
                    <Grid item md={12}>
                        <PatientStat />
                    </Grid>
                    <Grid item md={12}>
                        <Appointments />
                    </Grid>
                    <Grid item md={12}>
                        <ToDoList />
                    </Grid>
                    <Grid item md={12}>
                        <CovidUpdates />
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};

export default Home;

{/* <Card sx={{ width: '100%', backgroundColor: '#F9F9F9', paddingLeft: '3rem' }} >
                    <CardContent>
                        <TopNavigation />
                        <Box display='flex'>
                            <Box flexGrow={2}>
                                <HeaderMain />
                                <PatientStat />
                                <ToDoList />
                                <CovidUpdates />
                            </Box>
                            <Box flexGrow={1}>
                                <Appointments />
                            </Box>
                        </Box>
                    </CardContent>
                </Card> */}