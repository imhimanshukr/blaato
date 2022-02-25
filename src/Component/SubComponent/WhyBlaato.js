import {Container, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import whyBlaato from '../../Images/whyBlaato.jpg'


const useStyles = makeStyles(()=>({
    whyBlaatoContainer:{
        padding: '38px 0 55px',
        },
    whyBlaatoImgSection:{
        position:'relative',
        zIndex:'0',
        maxWidth:'420px',
        "&:after":{
            position: 'absolute',
            content: "''",
            maxWidth:'420px',
            height: '95%',
            width: '90%',
            backgroundColor: '#d6daf0',
            left: '-11px',
            top: '-11px',
            zIndex:'-1',
        },
    },
    whyBlaatoImg:{
        maxWidth:'420px',
        width:'100%',
    },
    whyBlaatoTitle:{
        margin: '0 0 55px !important',
        fontSize: '30px !important',
        color: '#000922',
        position: 'relative',
        fontFamily: 'proxima_nova_rgbold !important',
        "&:after":{
            position: 'absolute',
            content: "''",
            left: '0',
            right: '0',
            bottom: '-17px',
            margin: '0',
            height: '3px',
            width: '55px',
            backgroundColor: '#0054ff',
        },
    },
        whyBlaatoPara:{
            fontSize: '15px !important',
            color: '#5d5d5d',
            marginBottom: '20px !important',
            lineHeight: '20px !important',
            fontFamily:'nunitoregular !important'
    }
}))

const WhyBlaato = () =>{
    const classes = useStyles()

    return(
        <>
            <Container className={classes.whyBlaatoContainer}>
                <Grid xs={12} container>
                    <Grid item md={5} xs={12} className={classes.whyBlaatoImgSection}>
                        <img src={whyBlaato} alt="whyBlaatoImg" className={classes.whyBlaatoImg}/>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Typography variant="h4" className={classes.whyBlaatoTitle}>
                            Why Blaato ?
                        </Typography>
                        <Typography paragraph={true} className={classes.whyBlaatoPara}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
export default WhyBlaato;