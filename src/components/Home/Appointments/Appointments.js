import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppointmentData from './AppointmentData/AppointmentData';

const appointmentData = [
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM'
    },
];

const Appointments = () => {
    return (
        <Paper sx={{ minWidth: 275, marginLeft: { sm: 2 } }}>
            <Typography variant='h5' fontSize='1.25rem' fontWeight='600' pl={2} pt={2} component='div'>
                Upcoming Appointments
            </Typography>
            <Timeline>
                {
                    appointmentData?.map((appointment, index) => {
                        return (
                            <TimelineItem key={index} sx={{ '::before': { content: 'none' } }}>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ position: 'relative', top: '2.5rem' }} color="error" />
                                    {
                                        ((index + 1) < appointmentData?.length) && <TimelineConnector sx={{ position: 'relative', top: '2.5rem' }} />
                                    }
                                </TimelineSeparator>
                                <TimelineContent sx={{ paddingRight: '0' }}>
                                    <AppointmentData
                                        appointment={appointment}
                                    />
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })
                }
            </Timeline>
        </Paper>
    );
};

export default Appointments;