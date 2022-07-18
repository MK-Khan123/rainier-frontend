import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import darkIcon from '../../../images/top-navigation/dark.svg';
import lightIcon from '../../../images/top-navigation/light.svg';
import avatar from '../../../images/top-navigation/avatar.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DarkModeContext } from '../../../App';

const TopNavigation = () => {

    const [mode, setMode] = useContext(DarkModeContext);
    const theme = useTheme();

    return (
        <Box
            mt={5}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Typography
                color={theme.palette.mode === 'dark' ? '#FFF' : '#646F75'}
                lineHeight='2.25rem'
                fontSize='1.5rem'
                fontWeight='600'
                variant='h5'
                component='div'
            >
                Home
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '1.7rem'
                }}
            >
                <IconButton sx={{ mr: 3, width: '5.125rem' }} onClick={() => setMode(!mode)} color="inherit">
                    {
                        theme.palette.mode === 'dark' ? (
                            <img src={darkIcon} alt="Dark Mode" />
                        ) : (
                            <img src={lightIcon} alt="Light Mode" />
                        )
                    }
                </IconButton>
                <Avatar sx={{ width: '3rem', height: '3rem' }} alt="Profile Pic" src={avatar} />
                <ExpandMoreIcon />
            </Box>
        </Box >
    );
};

export default TopNavigation;