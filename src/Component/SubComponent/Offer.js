import {Box, Container, Grid, Typography} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { offerData1 } from '../../Data/data';
import { offerData2 } from '../../Data/data';

const useStyles = makeStyles({
    offerHeader:{
        fontSize: '40px !important',
        color: '#2c3e50',
        fontFamily: 'nunitoextrabold !important',
        textAlign: 'center !important',
        margin: '0 !important',
    },
    offerSubHeader:{
        display: 'block',
        color: '#777777',
        fontSize: '20px !important',
        fontFamily: 'nunitolight !important'
    },
    offerContent:{
        display:'flex',
        padding:'10px',
        marginTop:'30px',
        "&:hover":{
            "& $offerImage:before":{
                    transform:'scale(1)',
            }
        }
    },
    offerImage:{
        width:'fit-content',
        height:'fit-content',
        backgroundColor:'#ff6700',
        borderRadius:'50px',
        textAlign:'center',
        padding:'10px',
        position:'relative',
        zIndex:'0',
        "&:before":{
            position:'absolute',
            content:"''",
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            transition:'.5s all ease',
            backgroundColor:'#2c3e50',
            borderRadius:'50px',
            transform:'scale(0)',
            zIndex:'-1'
        },
    },
    offerDetail:{
        paddingLeft:'20px'
    },
    offerDetailHeading:{
        fontSize: '18px !important',
        color: '#232322 !important',
        margin: '0 0 10px !important',
        fontFamily: 'nunitoextrabold !important',
    },
    offerPara:{
        fontSize: '14px !important',
        color: '#777777',
        margin: '0',
        fontFamily:'nunitoregular !important',
    }
})

const Offer = ()=>{
    const classes = useStyles();
    return(
        <>
            <Box>
                <Container maxWidth="xl" className="wrapper">
                        <Grid item xs={12} sx={{padding:'60px 0'}}>
                            <Typography variant="h1" component="h2" className={classes.offerHeader}>
                                What We Offer
                            </Typography>
                            <Typography variant="h5" component="h2" align='center' className={classes.offerSubHeader}>
                                The best way to Transportation Fast & Savw
                            </Typography>
                            <Container sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, marginTop:'30px'}}>
                                {
                                    offerData1.map((item)=>(
                                        <Grid item md={4} xs={12} className={classes.offerContent}>
                                            <Box className={classes.offerImage}>
                                                <img src={item.image} alt="offer"/>
                                            </Box>
                                            <Box className={classes.offerDetail}>
                                            <Typography variant='h4' component="h4" className={classes.offerDetailHeading}>
                                                {item.offerHead}
                                            </Typography>
                                            <Typography paragraph={true} className={classes.offerPara}>
                                                {item.offerPara}
                                            </Typography>
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Container>
                            <Container sx={{display:'flex', flexDirection:{md:'row', xs:'column'}}}>
                            {
                                    offerData2.map((item)=>(
                                        <Grid item md={4} xs={12} className={classes.offerContent}>
                                            <Box className={classes.offerImage}>
                                                <img src={item.image} alt="offer"/>
                                            </Box>
                                            <Box className={classes.offerDetail}>
                                            <Typography variant='h4' component="h4" className={classes.offerDetailHeading}>
                                                {item.offerHead}
                                            </Typography>
                                            <Typography paragraph={true} className={classes.offerPara}>
                                                {item.offerPara}
                                            </Typography>
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Container>
                        </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Offer;