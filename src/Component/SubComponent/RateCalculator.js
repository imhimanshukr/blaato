import {Container, Box, Typography, TextField, IconButton} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import calculator from '../../Images/calculator.png';
import calculatorHover from '../../Images/calculatorHover.png';
import address from '../../Images/address.png';
import addressHover from '../../Images/addressHover.png';

const useStyles = makeStyles(()=>({
    mainBox:{
        display:'flex !important',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        padding:'45px 0',
        '@media(max-width: 1080px)' : {
            justifyContent:'center'
          }
    },
    mainBoxContainer:{
        position: 'relative',
        display:'flex',
        border: '1px solid #ff6700',
        textAlign: 'left',
        maxWidth: '490px',
        padding: '20px 50px',
        borderRadius: '3px',
        marginRight:'55px',
        marginBottom:'0',
        '@media(max-width: 1080px)':{
            marginRight:'0',
            marginBottom:'20px'
        },
        '@media(max-width:600px)':{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            padding:'20px 30px',
            maxWidth:'250px'
        },
        '& .css-nmzxda-MuiFormControl-root-MuiTextField-root':{
            margin:'0 !important'
        },
        "&:hover":{
            backgroundColor:'#ff6700',
            color:'#fff',
            "& $boxImage1":{
                display:'none'
            },
            "& $boxImage2":{
                display:'block'
            },
            "& $boxPara":{
                color:'#fff'
            },
            "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root":{
                backgroundColor:"#fff !important"
            },
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{
                border:'none !important'
            },
            "& $inputIconBtn":{
                backgroundColor:'#c14f02 !important'
            }
        }
    },
    boxImage1:{
        height:'fit-content',
        width:'fit-content',
        marginRight:'15px',
        display:'block',
        '@media(max-width:600px)':{
        marginBottom:'20px',
        marginRight:'0',
        }
    },
    boxImage2:{
        height:'fit-content',
        width:'fit-content',
        marginRight:'15px',
        display:'none',
        '@media(max-width:600px)':{
        marginBottom:'20px',
        marginRight:'0',
        }
    },
    boxTitle:{
        fontSize: '30px !important',
        fontFamily: 'nunitobold !important',
        '@media(max-width:600px)':{
        marginBottom:'15px'
        }
    },
    boxPara:{
        fontSize: '17px !important',
        color: '#666666',
        fontFamily:'nunitoregular !important',
    },
    inputIconBtn:{
        background: '#ff6700 !important',
        borderRadius: '0 !important',
        color: 'white !important',
        padding: '12px !important',
        width: '54px',
        height: '45px',
        transition:'none.3s all ease',
    },
    inputField:{
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root':{
            paddingRight:'0 !important',
        },
        '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input':{
            padding:'0 0 0 15px !important'
        },
        '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':{
            color:'#555555 !important',
            fontSize:'14px !important',
            lineHeight:'14px !important'
        },
        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{
            border:'1px solid #d4d4d4 !important'
        },
    },
}))

const RateCalculator = ()=>{

    const classes = useStyles()


    return(
        <>
            <Container className={classes.mainBox}>
                <Box className={classes.mainBoxContainer}>
                    <img src={calculator} alt="Rate Calculator" className={classes.boxImage1}/>
                    <img src={calculatorHover} alt="Rate Calculator" className={classes.boxImage2}/>
                    <Box>
                        <Typography variant="h5" component="h5" className={classes.boxTitle}>
                            Rate Calculator
                        </Typography>
                        <Typography paragraph={true} className={classes.boxPara}>
                            A Quick Way To Calculate Your Tarrif
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.mainBoxContainer}>
                    <img src={address} alt="address" className={classes.boxImage1}/>
                    <img src={addressHover} alt="address" className={classes.boxImage2}/>
                    <Box>
                        <Typography variant="h5" component="h5" className={classes.boxTitle}>
                            Check Availability
                        </Typography>
                        <TextField
                        variant="outlined"
                        label= "Enter Post Code/ Zip code"
                        // id="outlined-start-adornment"
                        sx={{ m: 1, width: 'auto' }}
                        className={classes.inputField}
                        // InputLabelProps={{shrink: false}}
                        InputProps={{
                            endAdornment: <IconButton className={classes.inputIconBtn}><DoubleArrowIcon/></IconButton>,
                        }}
                        />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default RateCalculator;