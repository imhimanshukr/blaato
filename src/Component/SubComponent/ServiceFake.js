import { Box, Container, Paper, Typography, Grid, ListItem } from '@mui/material/';
import { serviceData1 } from '../../Data/data';
import { serviceData2 } from '../../Data/data';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(()=>({
     serviceItem:{
        border: '1px solid #ececff',
        width: '189px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
    },
     serviceContent:{
        fontSize: '18px !important',
        color: '#8a8a8a',
        paddingTop: '20px',
        fontWeight: 'normal !important',
        fontFamily: 'nunitobold !important',
    },
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
                            serviceData1.map((item)=>(
                                <Paper variant="outlined" className={classes.serviceItem}>
                                <img src={item.image} alt="service" />
                                <Typography variant='h5' className={classes.serviceContent}>
                                    {item.serviceContent}
                                </Typography>
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
                            serviceData2.map((item)=>(
                                <Paper variant="outlined" className={classes.serviceItem}>
                                    <img src={item.image} alt="service"/>
                                    <Typography variant='h5' className={classes.serviceContent}>
                                        {item.serviceContent}
                                    </Typography>
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