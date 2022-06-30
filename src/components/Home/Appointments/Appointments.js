import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AppointmentData from './AppointmentData/AppointmentData';

const Appointments = () => {
    return (
        <Box>
            <Card sx={{ minWidth: 275, maxWidth: 350 }}>
                <CardContent>
                    <Timeline>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ position: 'relative', top: '1.8rem' }} color="error" />
                                <TimelineConnector sx={{ position: 'relative', top: '1.8rem' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <AppointmentData />
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ position: 'relative', top: '1.8rem' }} color="error" />
                                <TimelineConnector sx={{ position: 'relative', top: '1.8rem' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <AppointmentData />
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ position: 'relative', top: '1.8rem' }} color="error" />
                                <TimelineConnector sx={{ position: 'relative', top: '1.8rem' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <AppointmentData />
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ position: 'relative', top: '1.8rem' }} color="error" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <AppointmentData />
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Appointments;