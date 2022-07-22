import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import darkIcon from '../../../images/top-navigation/dark.svg';
import lightIcon from '../../../images/top-navigation/light.svg';
import darkIconSmall from '../../../images/top-navigation/dark-small.svg';
import lightIconSmall from '../../../images/top-navigation/light-small.svg';
import avatar from '../../../images/top-navigation/avatar.png';
import avatarDark from '../../../images/top-navigation/avatar-dark.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DarkModeContext } from '../../../App';

const TopNavigation = () => {

    const [mode, setMode] = useContext(DarkModeContext);
    const theme = useTheme();

    return (
        <Box
            mt={{ md: 5 }}
            ml={{ xs: 8, md: 0 }}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: { xs: 'absolute', md: 'static' },
                zIndex: 5,
                width: { xs: '85%', md: '100%' } //I explicitly assigned the width to 85% because of absolute positioning. In case of static positioning, by default the width becomes 100%
            }}
        >
            <Typography
                color={{ xs: '#FFF', md: theme.palette.mode === 'dark' ? '#FFF' : '#646F75' }}
                lineHeight='2.25rem'
                fontSize={{ xs: '1rem', md: '1.5rem' }}
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
                    mr: { md: '1.7rem' }
                }}
            >
                <IconButton
                    sx={{ mr: 3, width: { xs: '4rem', md: '5.125rem' } }}
                    onClick={() => setMode(!mode)}
                    color="inherit"
                >
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {
                            theme.palette.mode === 'dark' ? (
                                <Box component='img' src={darkIcon} alt="Dark Mode" />
                            ) : (
                                <Box component='img' src={lightIcon} alt="Light Mode" />
                            )
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: '8px' }}>
                        {
                            theme.palette.mode === 'dark' ? (
                                <Box component='img' src={darkIconSmall} alt="Dark Mode" />
                            ) : (
                                <Box component='img' src={lightIconSmall} alt="Light Mode" />
                            )
                        }
                    </Box>
                </IconButton>
                <Avatar
                    sx={{ width: '3rem', height: '3rem', mr: { xs: 2, md: 0 } }}
                    alt="Profile Pic"
                    src={theme.palette.mode === 'dark' ? avatarDark : avatar}
                />
                <ExpandMoreIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
            </Box>
        </Box >
    );
};

export default TopNavigation;