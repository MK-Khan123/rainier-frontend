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

const Home = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Card sx={{ width: '100%', backgroundColor: '#F9F9F9', paddingLeft: '3rem' }} >
                <CardContent>
                    <TopNavigation />
                    <Box display='flex'>
                        <Box flexGrow={2}>
                            <HeaderMain />
                            <PatientStat />
                            <ToDoList />
                        </Box>
                        <Box flexGrow={1}>
                            <Appointments />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Home;