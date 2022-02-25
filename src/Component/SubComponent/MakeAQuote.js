import React from 'react'
import {Box, Container, Typography, Button} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import cargobg from '../../Images/cargobg.jpg'

const useStyles = makeStyles(()=>({
    quoteSection:{
        backgroundImage:`url(${cargobg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'392px',
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        color:'#fff',
        zIndex:'0',
        "&:after":{
            position:'absolute',
            content:"''",
            width:'100%',
            height:'100%',
            top:'0',
            left:'0',
            background:'rgba(0,0,0,0.65)',
            zIndex:'-1',
        }
    },
    quoteTitle:{
        fontSize: '38px !important',
        '@media(max-width:600px)':{
            fontSize:'30px !important'
        },
        color: '#fff',
        fontFamily: 'nunitobold !important',
        margin: '20px 0px 15px 0px !important',
        fontWeight:'bold !important'
    },
    quoteSubtitle:{
        fontSize: '19px !important',
        '@media(max-width:600px)':{
            fontSize:'16px !important'
        },
        color: '#fff',
        fontFamily: 'nunitolight !important',
        margin: '0 0 48px !important',
    },
    quoteButton:{
        fontSize: '20px !important',
        fontFamily: 'nunitobold !important',
        fontWeight: 'bold !important',
        borderRadius: '30px !important',
        minWidth: '282px !important',
        padding: '11px 12px !important',
        margin: '0 6px !important',
        color: '#fff !important',
        backgroundColor: '#ff6700 !important',
        textTransform:'none !important',
        transition:'.3s all ease',
        marginBottom:'20px !important',
        '@media(max-width:600px)':{
            fontSize: '18px !important',
            minWidth: '250px !important',
        },
        "&:hover":{
            backgroundColor:'#c14f02 !important'
        }
    }

}))

const MakeAQuote = ()=> {
    const classes = useStyles()
    const [apiResult, setApiResult] = React.useState([])

    async function getData(){
        let result = await axios.get('http://learning.dev2.gipl.inet:9020/api/getBlogList')

            let newResult = result.data.data.records
            setApiResult(newResult)
        }

    return(
        <>
            <Box className={classes.quoteSection}>
                <Container className={classes.quoteBox}>
                    <Typography variant="h2" className={classes.quoteTitle}>
                    From around the corner to around the globe.
                    </Typography>
                    <Typography variant="h5" className={classes.quoteSubtitle}>
                    We will take care of your cargo or your passenger and deliver them safe and on time.
                    </Typography>
                    <Button variant='contained' className={classes.quoteButton} onClick={getData}>Make a Quote</Button>
                    <Button variant='contained' className={classes.quoteButton}>Contact Us</Button>
                </Container>
            </Box>
            <Box className={classes.quoteSection}>

                    {
                        apiResult.map((item)=>{
                            return(
                                <Container className={classes.quoteBox} key={item._id}>
                                    <img src={item.cover_image} alt="cover image"/>
                                    <Typography variant="h6">
                                        Title:{item.title}
                                    </Typography>
                                    <Typography paragraph={true}>
                                        Description:{item.description}
                                    </Typography>
                                </Container>
                            )
                        }) 
                }
          
            </Box>
            


    

        </>
    )
}
export default MakeAQuote;