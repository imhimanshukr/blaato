import {Box, Container, Grid, Typography, FormControl,FormControlLabel, input, Checkbox, RadioGroup, Link, Button} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import signInBg from '../Images/signInBg.png';
import SignInImg from '../Images/SignInImg.png';
import saperator from '../Images/saperator.png';
import facebookLogin from '../Images/facebookLogin.jpg';
import googleLogin from '../Images/googleLogin.jpg';

const useStyles = makeStyles(()=>({
    signInContainer:{
        backgroundImage: `url(${signInBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        padding: '45px 0',
        backgroundColor: '#fafaff',
        '@media(max-width:900px)':{
            backgroundPosition:'100vh'
        }
    },
    signInHeader:{
        fontFamily: 'nunitosemibold !important',
        margin: '0 0 35px !important',
        maxWidth: '420px',
        width: '100%',
        position: 'relative',
        left: '0',
        transform: 'translateX(0%)',
    },
    signInTitle:{
        fontSize: '18px !important',
        display: 'block',
        color: '#4e4e4e',
        fontFamily: 'nunitolight !important',
    },
    signInSubTitle:{
        fontSize: '31px !important',
        fontFamily: 'nunitosemibold !important',
    },
    formSection:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        "& .css-ahj2mt-MuiTypography-root":{
            display: 'inline-block',
            margin: '0 6px 0 0',
            cursor: 'pointer',
            color: '#818183',
            fontSize: '16px',
            fontFamily:'nunitoregular !important',
        },
        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{
            color:'#ff6700 !important',
        },
        "& .css-1nrlq1o-MuiFormControl-root":{
            maxWidth:'420px !important',
            width:'100%'
        },
        '@media(max-width:900px)':{
            marginTop:'100px !important'
        },
        '@media(max-width:600px)':{
            marginTop:'30px !important'
        }
    },
    formField:{
        marginBottom: '20px !important',
        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root":{
            color:'#ececff !important',
        },
        "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root:hover":{
            backgroundColor:'transparent !important'
        }
    },
    inputField:{
        boxShadow: 'none !important',
        fontFamily:'nunitoregular !important',
        border: '1px solid #ececff !important',
        backgroundColor:'#fff !important',
        height: '59px !important',
        fontSize: '16px !important',
        color: '#4e4e4e !important',
        padding:'0px 13px',
        borderRadius:'3px',
    },
    signInBtn:{
        display: 'block !important',
        fontSize: '18px !important',
        fontFamily: 'nunitoextrabold !important',
        width: '100% !important',
        padding: '15px !important',
        margin: '0 0 18px !important',
        color: '#fff !important',
        backgroundColor: '#ff6700 !important',
        borderColor: '#ff6700 !important',
        textTransform:'none !important',
        "&:hover":{
            backgroundColor:'#c14f02 !important',
        },
    },
    SignInImg:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'40px',
    },
    saperator:{
        display: 'block',
        margin: 'auto',
        textAlign: 'center',
        marginBottom: '25px',
        maxWidth: '320px',
        width:'100%',
        position: 'relative',
        backgroundImage: `url(${saperator})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    errorMesg:{
        color:'red',
        fontSize:'14px !important',
        marginBottom:'0 !important',
        marginLeft:'3px !important',
    }
}))

const SignIn = () =>{
    const classes = useStyles()
    // Form Validation
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
}

    return(
        <>
            <Box className={classes.signInContainer}>
                <Container>
                    <Grid item ={12} container sx={{display:'flex', flexDirection:{md:'row', xs:'column-reverse'}}}>
                        <Grid item md={6} xs={12}>
                            <Box className={classes.formSection}>
                                <Box className={classes.signInHeader}>
                                    <Typography variant="h6" className={classes.signInTitle}>
                                    Welcome Back
                                    </Typography>
                                    <Typography variant="h2" className={classes.signInSubTitle}>
                                    Login to your Account
                                    </Typography>
                                </Box>
                            <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
                                <FormControl className={classes.formField}>
                                <input placeholder="Email*" className={classes.inputField}
                                {...register("email",
                                {
                                 required: 'Email is required.',
                                  pattern:{
                                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                      message:'This is not a valid email.'
                                  } 
                              })}/>
                                
                                {errors.email && errors.email.type === "required"  && <Typography paragraph={true} className={classes.errorMesg}>{errors.email.message}</Typography>}
                                {errors.email && errors.email.type === "pattern" && <Typography paragraph={true} className={classes.errorMesg}>{errors.email.message}</Typography>}
                                
                                </FormControl>
                                <FormControl className={classes.formField}>
                                <input placeholder="Password*" className={classes.inputField} 
                                {...register("password", {
                                    required: 'Password is required.',
                                    maxLength:{
                                        value:8,
                                        message:'Password can not excees more than 8 characters'
                                    },
                                    minLength:{
                                        value:4,
                                        message:'Password must be more than 4 characters'
                                    }
                                })}/>
                                    {errors.password && errors.password.type === "required"  && <Typography paragraph={true} className={classes.errorMesg}>{errors.password.message}</Typography>}
                                    {errors.password && errors.password.type === "maxLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.password.message}</Typography>}
                                    {errors.password && errors.password.type === "minLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.password.message}</Typography>}
                              </FormControl>
                                <FormControl className={classes.formField}>
                                <RadioGroup row  name="row-radio-buttons-group" sx={{marginBottom:'20px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                    <FormControlLabel value="remember" name="remember" control={<Checkbox 
                                        {...register('name')}
                                    />} label="Remember me" />
                                    <Link sx={{color:'#ff6700', fontSize:'14px !important', textDecoration:'none !important', cursor:'pointer' }}>Forgot Password</Link>
                                </RadioGroup>
                                </FormControl>
                                <FormControl>
                                    <Button variant="contained"type="submit" className={classes.signInBtn}>
                                        Login
                                    </Button>
                                </FormControl>
                            </FormControl>
                                <Box className={classes.saperator}>
                                    <Typography paragraph={true} sx={{display: 'inline-block', textTransform: 'uppercase', color: '#898989', fontSize:'14px', margin:'revert', fontFamily:'nunitoregular'}}>
                                        OR
                                    </Typography>
                                </Box>
                                <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:{sm:'space-between', xs:'center'}, alignItems:'center', maxWidth:'420px', width:'100%'}}>
                                    <img src={facebookLogin} alt="facebookLogin"/>
                                    <img src={googleLogin} alt="facebookLogin"/>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={6} xs={12} className={classes.SignInImg}>
                            <img src={SignInImg} alt="SignInImg" width="100%"/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default SignIn;