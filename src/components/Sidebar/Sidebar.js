import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import homeIcon from '../../images/sidebar/home.svg';
import patientIcon from '../../images/sidebar/patient-profile.svg';
import patientIconDark from '../../images/sidebar/patient-profile-dark.svg';
import appointmentIcon from '../../images/sidebar/appointment.svg';
import appointmentIconDark from '../../images/sidebar/appointment-dark.svg';
import medicalHistoryIcon from '../../images/sidebar/medical-history.svg';
import medicalHistoryIconDark from '../../images/sidebar/medical-history-dark.svg';
import settingsIcon from '../../images/sidebar/icon-settings.svg';
import settingsIconDark from '../../images/sidebar/icon-settings-dark.svg';
import newAppointmentIcon from '../../images/sidebar/new-appointment-icon.svg';
import logo from '../../images/sidebar/company-logo.svg';
import './Sidebar.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('xs')]: {
        width: `calc(${theme.spacing(0)} + 1px)`,
    },
    [theme.breakpoints.up('md')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    }
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const menuItems = [
    {
        title: 'Home',
        icon: {
            light: homeIcon,
            dark: homeIcon
        }
    },
    {
        title: 'Patient Profile',
        icon: {
            light: patientIcon,
            dark: patientIconDark
        }
    },
    {
        title: 'Appointments',
        icon: {
            light: appointmentIcon,
            dark: appointmentIconDark
        }
    },
    {
        title: 'Medical History',
        icon: {
            light: medicalHistoryIcon,
            dark: medicalHistoryIconDark
        }
    },
    {
        title: 'Settings',
        icon: {
            light: settingsIcon,
            dark: settingsIconDark
        }
    }
];

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const theme = useTheme();

    return (
        <Box>
            <CssBaseline />

            {/* This button appears when the display is smaller than 834px */}
            <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{
                    backgroundColor: '#FFF',
                    '&:hover': { backgroundColor: '#FFF' },
                    color: '#FF7594',
                    width: '41px',
                    height: '41px',
                    margin: '0.5rem',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                    borderRadius: '5px',
                    ...(open && { display: 'none' }),
                    display: { xs: 'block', md: 'none' },
                    position: 'absolute',
                    zIndex: 5
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer variant="permanent"
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.mode === 'dark' ? '#2E1619' : '',
                    }
                }}
                open={open}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '80%',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <IconButton
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                sx={{
                                    backgroundColor: theme.palette.mode === 'dark' ? '#FF7594' : '',
                                    color: theme.palette.mode === 'dark' ? '#D1D5DB' : '#FF7594',
                                    width: '41px',
                                    height: '41px',
                                    margin: '0.5rem',
                                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                                    borderRadius: '5px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <DrawerHeader sx={{ ...(open || { display: 'none' }) }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center'
                                }}
                            >
                                <img style={{ width: '2.25rem' }} src={logo} alt="" />
                                <Typography fontSize='1.5rem' fontWeight='500' variant="h5" component="div">
                                    Medi<Box sx={{ color: '#FF7594' }} component='span'>Doc</Box>
                                </Typography>
                            </Box>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </DrawerHeader>
                    </div>

                    <List>
                        {menuItems?.map(menu => (
                            <ListItem key={menu.title} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img className='icon-size' src={theme.palette.mode === 'dark' ? menu.icon.dark : menu.icon.light} alt="" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={menu?.title}
                                        sx={{
                                            opacity: open ? 1 : 0,
                                            color: menu.title === 'Home' ? '#FF7594' : (theme.palette.mode === 'dark' ? '#D1D5DB' : '#2E1619'),
                                            letterSpacing: '0.01rem'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            {
                                open ? (
                                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                                        <Button
                                            variant='contained'
                                            color='error'
                                            sx={{
                                                background: 'linear-gradient(101.27deg, #FF7594 -6.58%, #FF7C65 102.46%)',
                                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                                borderRadius: '5px',
                                                justifyContent: 'center',
                                                px: 2.5,
                                            }}
                                        >
                                            New Appointment
                                        </Button>
                                    </Box>
                                ) : (
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <img style={{ width: '3.3125rem' }} src={newAppointmentIcon} alt="" />
                                        </ListItemIcon>
                                    </ListItemButton>
                                )
                            }
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box >
    );
};

export default Sidebar;