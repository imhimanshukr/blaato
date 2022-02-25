import { Box, Grid, Typography, TextField, Button, Container } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import banner from '../../Images/banner.jpg';

const useStyles = makeStyles(() => ({
    bannerBox: {
        position: 'relative',
        background: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '140px 0',
        zIndex: '0',
        "&:before": {
            position: 'absolute',
            content: "''",
            bottom: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.65)',
            zIndex: '-1'
        },
    },
    bannerHeader: {
        fontSize: '65px !important',
        '@media (max-width: 600px)': {
            fontSize: '45px !important'
        },
        color: '#fff',
        fontFamily: 'nunitosemibold !important',
        margin: '0 0 15px',

    },
    bannerSubHeader: {
        fontSize: '20px !important',
        color: '#fff !important',
        fontFamily: 'nunitolight !important',
        marginBottom: '50px !important',
    },
    inputField: {
        backgroundColor: '#a65a26 !important',
        maxWidth: '1095px !important',
        fontFamily:'nunitosemibold !importnat',
        "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
            padding: '6px 9px 7px !important',
            borderRadius: '50px !important',
            backgroundColor: '#fff',
            border: 'none !important',
            "&:hover": {
                border: 'none !important',
            }
        },
    },
    inputBtn: {
        backgroundColor: "#ff6700 !important",
        borderRadius: "30px !important",
        padding: "11px 35px !important",
        fontSize: "16px !important",
        fontWeight: "normal ",
        fontFamily: "nunitosemibold !important",
        height: "52px"
    }
}))

const Banner = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.bannerBox}>
                <Grid xs={12} item textAlign="center">
                    <Container>
                        <Typography variant="h1" component="h5" gutterBottom className={classes.bannerHeader}>
                            Making Transportation fast & Secure
                        </Typography>
                        <Typography variant="h5" component="h5" gutterBottom className={classes.bannerSubHeader}>
                            If low costs matter for your shipment, try our Transportation
                        </Typography>
                        <Typography sx={{ borderRadius: '30px !important' }}>
                            <TextField fullWidth placeholder="Track your shipment - Write CN Number" sx={{ backgroundColor: "white", borderRadius: "50px!important", padding: '10px', border: 'none !important', width: { sm: '100%', xs: '90%' } }} className={classes.inputField}
                                InputProps={{
                                    endAdornment: <Button variant="contained" className={classes.inputBtn}>
                                        Search
                                    </Button>
                                }} />

                        </Typography>
                    </Container>
                </Grid>
            </Box>
        </>
    )
}
export default Banner;