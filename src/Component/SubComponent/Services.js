import { Box, Container, Paper, Typography, Grid, ListItem } from '@mui/material/';
import { serviceData1 } from '../../Data/data';
import { serviceData2 } from '../../Data/data';
import { makeStyles } from '@mui/styles';

import service1 from '../../Images/service1.png';
import serviceHover1 from '../../Images/serviceHover1.png';
import service2 from '../../Images/service2.png';
import service3 from '../../Images/service3.png';
import service4 from '../../Images/service4.png';
import service5 from '../../Images/service5.png';
import service6 from '../../Images/service6.png';
import service7 from '../../Images/service7.png';
import service8 from '../../Images/service8.png';
import service9 from '../../Images/service9.png';
import service10 from '../../Images/service10.png';
import service12 from '../../Images/service12.png';
import service11 from '../../Images/service11.png';


const useStyles = makeStyles(() => ({
    serviceItem: {
        position: 'relative !important',
        border: '1px solid #ececff',
        width: '189px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    serviceTitle: {
        fontSize: '18px !important',
        color: '#8a8a8a',
        paddingTop: '20px',
        fontWeight: 'normal !important',
        fontFamily: 'nunitobold !important',
    },
    serviceItm2: {
        position: 'relative',
        overflow: 'hidden',
        zIndex: '0',
        transition: '.3s all ease-in',
        "&:after": {
            position: 'absolute',
            content: "''",
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            zIndex: '-1',
            borderRadius: '50%',
            margin: '-105px 0px 0px 40px',
            backgroundColor: '#c14f02',
            transition: '.3s all ease',
            opacity: '0'
        },
        "&:hover": {
            backgroundColor: '#ff6700 !important',
            "&:after": {
                opacity: '1'
            },
            "& $serviceImgSec": {
                top: '5%',
                right: '13%',
            },
            "& $servicetitleSec": {
                textAlign: 'left',
                left: '10px',
                top: '50%'
            },
            "& $ServiseList": {
                top: '55%'
            },
            "& $serviceImg1": {
                opacity: '0'
            },
            "& $serviceImg2": {
                opacity: '1'
            },
            "& $serviceTitle2": {
                color: '#fff'
            }
        }
    },
    serviceImgSec: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '25%',
        right: '25%',
        transition: '.5s all ease'
    },
    serviceImg1: {
        position: 'absolute'
    },
    serviceImg2: {
        position: 'absolute',
        opacity: '0'
    },
    servicetitleSec: {
        position: 'absolute',
        width: '100%',
        left: '0',
        right: '0',
        top: '70%',
        textAlign: 'center',
        transition: '.3s all ease'
    },
    serviceTitle2: {
        fontSize: '18px !important',
        color: '#8a8a8a',
    },
    ServiseList: {
        position: 'absolute',
        width: '100%',
        textAlign: 'left',
        height: '100%',
        top: '100%',
        padding: '0',
        left: '10px',
        transition: '.5s all ease'
    },
    ServiseListItem: {
        position: 'relative',
        listStyle: 'none',
        color: '#fff',
        fontSize: '14px',
        marginTop: '5px',
        left: '12px',
        "&:before": {
            position: 'absolute',
            content: "''",
            borderRight: '2px solid #fff',
            borderBottom: '2px solid #fff',
            width: '4px',
            height: '4px',
            top: '18%',
            left: '-12px',
            transform: 'rotate(-45deg)',
        }
    }
}))

const Services = () => {



    const classes = useStyles()
    return (

        <>
            <Grid sx={{ backgroundColor: '#fafaff', padding: '50px 0' }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',

                        '& > :not(style)': {
                            padding: '42px 10px 32px',
                            textAlign: 'center',
                            color: "action",
                            width: "167px",
                            height: "123px",
                            margin: "auto",
                            border: "1px solid #ececff",
                            marginBottom: '30px',
                            boxShadow: "none",
                        },
                    }}>
                        {
                            serviceData1.map((item) => (

                                <Paper variant="outlined" className={classes.serviceItem, classes.serviceItm2}>
                                    <Box className={classes.serviceImgSec}>
                                        <img src={item.image} alt="service" className={classes.serviceImg1} />
                                        <img src={item.image2} alt="service" className={classes.serviceImg2} />
                                    </Box>
                                    <Box className={classes.servicetitleSec}>
                                        <Typography variant='h5' className={classes.serviceTitle, classes.serviceTitle2}>
                                            {item.serviceContent}
                                        </Typography>
                                    </Box>
                                    <ul className={classes.ServiseList}>
                                        <li className={classes.ServiseListItem}>Next Day</li>
                                        <li className={classes.ServiseListItem}>Within 48hrs</li>
                                        <li className={classes.ServiseListItem}>Normal (Save money)</li>
                                    </ul>
                                </Paper>

                            ))
                        }

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',

                        '& > :not(style)': {
                            padding: '42px 10px 32px',
                            textAlign: 'center',
                            color: "action",
                            width: "167px",
                            height: "123px",
                            margin: "auto",
                            border: "1px solid #ececff",
                            marginBottom: '30px',
                            boxShadow: "none",
                        },
                    }}>
                        {
                            serviceData2.map((item) => (
                                <Paper variant="outlined" className={classes.serviceItem, classes.serviceItm2}>
                                    <Box className={classes.serviceImgSec}>
                                        <img src={item.image} alt="service" className={classes.serviceImg1} />
                                        <img src={item.image2} alt="service" className={classes.serviceImg2} />
                                    </Box>
                                    <Box className={classes.servicetitleSec}>
                                        <Typography variant='h5' className={classes.serviceTitle, classes.serviceTitle2}>
                                            {item.serviceContent}
                                        </Typography>
                                    </Box>
                                    <ul className={classes.ServiseList}>
                                        <li className={classes.ServiseListItem}>Next Day</li>
                                        <li className={classes.ServiseListItem}>Within 48hrs</li>
                                        <li className={classes.ServiseListItem}>Normal (Save money)</li>
                                    </ul>
                                </Paper>
                            ))
                        }

                    </Box>
                </Container>
            </Grid>
        </>
    )
}
export default Services;