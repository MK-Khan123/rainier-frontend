import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';

const toDos = [
    {
        id: '011',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 sep 2022'
    },
    {
        id: '022',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 sep 2022'
    },
    {
        id: '033',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 sep 2022'
    },
    {
        id: '044',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 sep 2022'
    }
];

const ToDoList = () => {
    return (
        <Card sx={{ minWidth: 275, padding: { xs: '0.625rem', md: '1.25rem 0.625rem' }, mt: 4 }}>
            <CardContent sx={{ paddingX: '0.5rem' }}>
                <Typography variant='h5' fontWeight='600' fontSize='1.25rem'>To-Do List</Typography>
                <Box mt={1} sx={{ maxWidth: '90%', display: 'flex', alignItems: 'flex-start' }}>
                    <TextField
                        type="text"
                        InputLabelProps={{
                            shrink: true
                        }}
                        fullWidth
                        multiline
                        rows={2}
                    />
                    <Button
                        startIcon={<DoneIcon />}
                        sx={{
                            backgroundImage: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '5px',
                            color: 'white',
                            paddingX: '0.75rem',
                            marginLeft: '1rem',
                            width: '5.1875rem',
                            height: '2rem',
                            display: { xs: 'none', md: 'inline-block' }
                        }}
                    >
                        Add
                    </Button>
                </Box>
                <Box mt={2} sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body1' fontWeight='500' fontSize='0.875rem'>
                        <Checkbox defaultChecked sx={{ paddingLeft: '0', color: '#FF7594', '&.Mui-checked': { color: '#EDEBEB' } }} />
                        Select All
                    </Typography>

                    <Button
                        startIcon={<DoneIcon />}
                        sx={{
                            backgroundImage: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '5px',
                            color: 'white',
                            paddingX: '0.75rem',
                            marginLeft: '1rem',
                            width: { md: '5.1875rem' },
                            height: '2rem'
                        }}
                    >
                        Done
                    </Button>
                </Box>
                <Grid container>
                    {
                        toDos.map(todo => {
                            return (
                                <Grid key={todo?.id} item mt={2} xs={12}>
                                    <Box sx={{ display: 'flex' }}>
                                        <Checkbox defaultChecked sx={{ pl: 0, pt: { xs: 0 }, display: 'inline', color: '#FF7594', '&.Mui-checked': { color: '#EDEBEB' } }} />
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                                            <Typography variant='body1' fontWeight='500' fontSize='0.875rem'>
                                                {todo?.title}
                                            </Typography>
                                            <Typography ml={{ md: 2 }} color='#E0E0E0' fontWeight='500' variant='body1' fontSize='0.875rem'>
                                                {todo?.time}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </CardContent>
        </Card >
    );
};

export default ToDoList;