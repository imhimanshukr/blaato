import {Box, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import innerBanner from '../../Images/innerBanner.jpg';

const useStyles = makeStyles(()=>({
    aboutBanner:{
        backgroundImage: `url(${innerBanner})`,
        backgroundRepeat: 'no-repeat',
        height: '98px',
        textAlign: 'center',
        backgroundPosition: 'center',
        position: 'relative',
    },
        aboutTitle:{
            fontSize:'30px !important',
            color: '#fff',
            margin: '0',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
    }
}))

const AboutBanner = () =>{
    const classes = useStyles()
    return(
        <>
            <Box className={classes.aboutBanner}>
                <Typography variant="h1" component="h1" className={classes.aboutTitle}>
                    About Us
                </Typography>
            </Box>
        </>
    )
}

export default AboutBanner;