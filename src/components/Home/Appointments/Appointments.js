import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
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
        <Box>
            <Card sx={{ minWidth: 275, maxWidth: 400 }}>
                <Typography variant='h5' fontWeight='500' pl={2} pt={2} component='div'>
                    Upcoming Appointments
                </Typography>
                <CardContent sx={{ padding: 0, ':last-child': { padding: 0 } }} >
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
                </CardContent>
            </Card>
        </Box >
    );
};

export default Appointments;