import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import TopNavigation from './TopNavigation/TopNavigation';
import HeaderMain from './HeaderMain/HeaderMain';
import PatientStat from './PatientStat/PatientStat';
import ToDoList from './ToDoList/ToDoList';
import Appointments from './Appointments/Appointments';
import CovidUpdates from './CovidUpdates/CovidUpdates';
import './Home.css';

const Home = () => {

    const theme = useTheme();

    return (
        <Box sx={{ display: { lg: 'flex' } }}>
            <Sidebar />
            <Box
                pl={{ xs: 12, md: 12, lg: 6 }}
                pr={5}
                pb={4}
                width={{ lg: '100%' }}
                backgroundColor={theme.palette.mode === 'light' ? '#F9F9F9' : ''}
            >
                <div className='container'>
                    <div className='top-navigation'>
                        <TopNavigation />
                    </div>
                    <div className='header-main'>
                        <HeaderMain />
                    </div>
                    <div className='patient-stat'>
                        <PatientStat />
                    </div>
                    <div className='appointments'>
                        <Appointments />
                    </div>
                    <div className='to-do-list'>
                        <ToDoList />
                    </div>
                    <div className='covid-updates'>
                        <CovidUpdates />
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default Home;