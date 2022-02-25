import {Container, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import overviewImg from '../../Images/overviewImg.jpg'


const useStyles = makeStyles(()=>({
    overviewContainer:{
        marginTop:'40px'
    },
    overviewImgSection:{
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
    overviewImg:{
        maxWidth:'420px',
        width:'100%',
    },
    overviewTitle:{
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
        overviewPara:{
            fontSize: '15px !important',
            color: '#5d5d5d',
            marginBottom: '20px !important',
            lineHeight: '20px !important',
            fontFamily:'nunitoregular !important'
    }
}))

const OverView = () =>{
    const classes = useStyles()

    return(
        <>
            <Container className={classes.overviewContainer}>
                <Grid xs={12} container>
                    <Grid item md={5} xs={12} className={classes.overviewImgSection}>
                        <img src={overviewImg} alt="overviewImg" className={classes.overviewImg}/>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Typography variant="h4" className={classes.overviewTitle}>
                            Overview
                        </Typography>
                        <Typography paragraph={true} className={classes.overviewPara}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Typography paragraph={true} className={classes.overviewPara}>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>
                        <Typography paragraph={true} className={classes.overviewPara}>
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Typography>
                        <Typography paragraph={true} className={classes.overviewPara}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
export default OverView;