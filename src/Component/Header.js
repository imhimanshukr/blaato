import React from 'react';
import { Stack, Box, Container, AppBar, Hidden, IconButton, Button, Menu, MenuItem } from '@mui/material/';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { makeStyles } from '@mui/styles';
import logo from '../Images/logo.png';

// CSS
const useStyles = makeStyles({
    Navbar: {
        backgroundColor: '#fff !important',
        padding: '10px 0',
        boxShadow: 'none !important'
    },
    navLink: {
        position: 'relative',
        color: '#2c3e50 !important',
        marginLeft: '40px !important',
        textDecoration: 'none !important',
        fontSize: '15px !important',
        cursor: 'pointer',
        "&:after": {
            position: 'absolute',
            content: "''",
            bottom: '-4px',
            left: '0',
            width: '0',
            height: '2px',
            backgroundColor: '#ff6700',
            transition: '.4s all ease',
        },
        "&:hover:after": {
            width: '100%'
        }
    },
    navBtn: {
        color: '#2c3e50 !important',
        marginLeft: '40px !important',
        fontSize: '15px !important',
        textTransform: 'none !important',
        "&:hover": {
            backgroundColor: 'transparent !important',
            color: '#ff6700 !important',
        },
        "& .css-1kh5w6m-MuiButtonBase-root-MuiButton-root": {
            padding: '0 !important'
        },
        '@media(max-width:900px)': {
            "& .css-1kh5w6m-MuiButtonBase-root-MuiButton-root": {
                padding: '6px 8px !important'
            }
        }
    },
    navLink2: {
        textDecoration: 'none !important'
    },
})


const Header = () => {
    const classes = useStyles()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const NavLinks = [
        { label: 'Home', to: '/', Id: 'Home' },
        { label: 'Rate Card', to: '#0', Id: 'Rate Card' },
        { label: 'Servicable Pincodes', to: '#0', Id: 'Servicable Pincodes' },
        { label: 'About Us', to: '/about', Id: 'About Us' },
    ]
    return (
        <>
            <AppBar position="static" className={classes.Navbar}>
                <Container>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Link to="/">
                                <img src={logo} alt='logo' />
                            </Link>
                        </Box>
                        <Box component={Hidden} mdDown>
                            <Box>
                                {NavLinks.map((item, index) => (
                                    <Link className={classes.navLink} to={item.to} key={index}>{item.label}
                                    </Link>
                                ))}
                                <Link to="/signin" className={classes.navLink2}>
                                    <Button variant="text" startIcon={<PersonIcon />} className={classes.navBtn}>Sign in</Button>
                                </Link>
                                <Link to="/register" className={classes.navLink2}>
                                    <Button variant="text" startIcon={<GroupAddIcon />} className={classes.navBtn}
                                    >Register</Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box component={Hidden} mdUp>
                            <IconButton sx={{ color: 'black' }}
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true" onClick={handleOpenNavMenu}>
                                <MenuIcon />
                            </IconButton>
                            <Menu sx={{ mt: '54px' }}
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'Left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'Left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                            >
                                {NavLinks.map((item, index) => (
                                    <MenuItem onClick={handleCloseNavMenu} key={index}>
                                        <Link className={classes.navLink} to={item.to} textAlign="center">{item.label}</Link>
                                    </MenuItem>
                                ))}
                                <Stack direction="column">

                                    <Link to="/signin" className={classes.navLink2} onClick={handleCloseNavMenu}>
                                        <Button variant="text" sx={{ marginLeft: '0 !important', paddingLeft: '57px' }} startIcon={<PersonIcon />} className={classes.navBtn}>Sign in</Button>
                                    </Link>
                                    <Link to="/register" className={classes.navLink2} onClick={handleCloseNavMenu}>
                                        <Button variant="text" sx={{ marginLeft: '0 !important', paddingLeft: '60px' }} startIcon={<GroupAddIcon />} className={classes.navBtn}
                                        >register</Button>
                                    </Link>

                                </Stack>

                            </Menu>
                        </Box>
                    </Stack>
                </Container>
            </AppBar>

        </>

    )
}

export default Header;
