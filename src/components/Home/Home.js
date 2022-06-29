import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import TopNavigation from './TopNavigation/TopNavigation';
import HeaderMain from './HeaderMain/HeaderMain';
import PatientStat from './PatientStat/PatientStat';
import ToDoList from './ToDoList/ToDoList';

const Home = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box width='100%' backgroundColor='#F9F9F9' pl={6}>
                <TopNavigation />
                <HeaderMain />
                <PatientStat />
                <ToDoList />
            </Box>
        </Box>
    );
};

export default Home;