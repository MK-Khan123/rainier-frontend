import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppointmentData from './AppointmentData/AppointmentData';
import './Appointments.css';

const appointmentData = [
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#FF9898'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#FFF598'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#98FFC1'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#98C7FF'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#FF9898'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#FFF598'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#98FFC1'
    },
    {
        year: '2022',
        day: '13',
        month: 'Sep',
        doctor_name: 'Dr. Muhammad Abdul Hussein',
        specialty: 'Cardiologist',
        slot: 'Morning',
        time: '10:00 AM',
        color: '#98C7FF'
    },
];

const Appointments = () => {
    return (
        <Paper
            className='appointment-container'
            sx={{
                minWidth: 275,
                maxWidth: { md: '30rem', lg: '28.25rem' },
                maxHeight: { sm: '29.25rem', md: '29.28rem', lg: '35.625rem' },
                marginLeft: { md: 2, lg: 2 },
                marginTop: { md: '1.75rem', lg: '2rem' },
                overflow: 'auto',
                borderRadius: '8px'
            }}
        >
            <Typography variant='h5' fontSize='1.25rem' fontWeight='600' pl={2} pt={2} component='div'>
                Upcoming Appointments
            </Typography>
            <Timeline>
                {
                    appointmentData?.map((appointment, index) => {
                        return (
                            <TimelineItem key={index} sx={{ '::before': { content: 'none' } }}>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ position: 'relative', top: '2.5rem', backgroundColor: appointment.color }} />
                                    {
                                        ((index + 1) < appointmentData.length) && <TimelineConnector sx={{ position: 'relative', top: '2.5rem' }} />
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