import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';
import addIcon from '../../../images/to-do-list/small.svg';
import './ToDoList.css';

const toDos = [
    {
        id: '011',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 Sep 2022'
    },
    {
        id: '022',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 Sep 2022'
    },
    {
        id: '033',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 Sep 2022'
    },
    {
        id: '044',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Last Added: 10 Sep 2022'
    }
];

const ToDoList = () => {

    const theme = useTheme();

    const CustomTextField = styled(TextField)({

        '& .MuiOutlinedInput-root': {

            backgroundColor: theme.palette.mode === 'dark' ? '#959190' : 'null',
            borderRadius: '8px',
            color: theme.palette.mode === 'dark' ? '#000' : 'null',

            '&.Mui-focused fieldset': {
                borderColor: '#FF7590',
            },
        }
    });

    return (
        <Card
            className='to-do-list-container'
            sx={{
                minWidth: 275,
                maxWidth: { md: '30rem', lg: '44.875rem' },
                maxHeight: { xs: '29.25rem', lg: '27.8125rem' },
                borderRadius: '8px',
                mt: { xs: '1.75rem' },
                overflow: 'auto',
                padding: {
                    xs: '0.625rem',
                    md: '1.25rem 0.625rem'
                },
            }}
        >
            <CardContent sx={{ paddingX: '0.5rem' }}>
                <Typography
                    color={theme.palette.mode === 'dark' ? '#D1D5DB' : 'null'}
                    variant='h5'
                    fontWeight='600'
                    fontSize='1.25rem'
                >
                    To-Do List
                </Typography>
                <Box
                    mt={1}
                    sx={{
                        maxWidth: '95%',
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}
                >
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        <CustomTextField
                            type="text"
                            InputLabelProps={{
                                shrink: true
                            }}
                            fullWidth
                            multiline
                            rows={2}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 3,
                                bottom: 0,
                                display: { lg: 'none' }
                            }}
                            component='img'
                            src={addIcon}
                            alt='Add'
                        >
                        </Box>
                    </Box>
                    <Button
                        startIcon={<DoneIcon />}
                        sx={{
                            backgroundImage: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '5px',
                            color: 'white',
                            marginLeft: '1rem',
                            width: '6rem',
                            height: '2rem',
                            display: { xs: 'none', lg: 'flex' },
                            textTransform: 'capitalize'
                        }}
                    >
                        Add
                    </Button>
                </Box>
                <Box
                    mt={2}
                    sx={{
                        maxWidth: '95%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant='body1'
                        fontWeight='500'
                        fontSize='0.875rem'
                    >
                        <Checkbox
                            defaultChecked
                            sx={{
                                paddingLeft: '0',
                                color: '#FF7594',
                                '&.Mui-checked': { color: '#EDEBEB' }
                            }}
                        />
                        Select All
                    </Typography>

                    <Button
                        startIcon={<DoneIcon />}
                        sx={{
                            backgroundImage: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                            borderRadius: '5px',
                            color: 'white',
                            marginLeft: '1rem',
                            width: { md: '6rem' },
                            height: '2rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        Done
                    </Button>
                </Box>
                <Grid container>
                    {
                        toDos?.map(todo => {
                            return (
                                <Grid
                                    key={todo.id}
                                    item
                                    mt={{ xs: 2, lg: 1 }}
                                    xs={12}
                                >
                                    <Box sx={{ display: 'flex' }}>
                                        <Checkbox
                                            defaultChecked
                                            sx={{
                                                pl: 0, pt: { xs: 0 },
                                                display: 'inline',
                                                color: '#FF7594',
                                                '&.Mui-checked': { color: '#EDEBEB' }
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column', md: 'row' }
                                            }}
                                        >
                                            <Typography
                                                variant='body1'
                                                fontWeight='500'
                                                fontSize='0.875rem'
                                                color={theme.palette.mode === 'dark' ? '#D1D5DB' : 'null'}
                                            >
                                                {todo.title}
                                            </Typography>
                                            <Typography
                                                ml={{ md: 2, lg: 4 }}
                                                mt={{ xs: 1, md: 0 }}
                                                mb={{ xs: 3, md: 0 }}
                                                color={theme.palette.mode === 'dark' ? '#A6A6A6' : '#E0E0E0'}
                                                fontWeight='500'
                                                variant='body1'
                                                fontSize='0.875rem'
                                            >
                                                {todo.time}
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