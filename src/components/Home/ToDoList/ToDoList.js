import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';

const ToDoList = () => {
    return (
        <Box
            sx={{
                maxWidth: '45rem',
                backgroundColor: '#FFFFFF',
                padding: '1.25rem'
            }}
        >
            To-Do List
            <Box
                mt={1}
                sx={{
                    maxWidth: '90%',
                    display: 'flex',
                    alignItems: 'flex-start'
                }}
            >
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
                        height: '2rem'
                    }}
                >
                    Add
                </Button>
            </Box>
            <Box
                mt={2}
                sx={{
                    maxWidth: '90%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <Checkbox
                        sx={{
                            fontSize: '1.625rem',
                            color: '#FF7594',
                            '&.Mui-checked': { color: '#FF7594' }
                        }}
                    /> Select All
                </Box>

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
                        height: '2rem'
                    }}
                >
                    Done
                </Button>
            </Box>
            <Box>
                <Checkbox
                    sx={{
                        fontSize: '1.625rem',
                        color: '#FF7594',
                        '&.Mui-checked': { color: '#FF7594' }
                    }}
                />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Typography variant='body1'>Last Added: 10 sep 2022</Typography>
                <Checkbox
                    sx={{
                        fontSize: '1.625rem',
                        color: '#FF7594',
                        '&.Mui-checked': { color: '#FF7594' }
                    }}
                />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Typography variant='body1'>Last Added: 10 sep 2022</Typography>
                <Checkbox
                    sx={{
                        fontSize: '1.625rem',
                        color: '#FF7594',
                        '&.Mui-checked': { color: '#FF7594' }
                    }}
                />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Typography variant='body1'>Last Added: 10 sep 2022</Typography>
                <Checkbox
                    defaultChecked
                    disabled
                    sx={{
                        fontSize: '1.625rem',
                        color: '#FF7594',
                        '&.Mui-checked': { color: '#FF7594' }
                    }}
                />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Typography variant='body1'>Last Added: 10 sep 2022</Typography>
            </Box>
        </Box >
    );
};

export default ToDoList;