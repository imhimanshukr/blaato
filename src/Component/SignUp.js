import {Box, Container, Grid, Typography, FormControl,FormControlLabel, input, Radio, RadioGroup, Button} from '@mui/material/';
import {Link} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {useForm} from 'react-hook-form';
import signInBg from '../Images/signInBg.png';
import SignInImg from '../Images/SignInImg.png';

const useStyles = makeStyles(()=>({
    signInContainer:{
        backgroundImage: `url(${signInBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
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
        "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked":{
            color:'#ff6700 !important'
        },
        "& .css-1nrlq1o-MuiFormControl-root":{
            maxWidth:'420px !important',
            width:'100%'
        },
        '@media(max-width:900px)':{
            "& .css-1kh5w6m-MuiButtonBase-root-MuiButton-root":{
                padding:'6px 8px !important'
            },
            marginTop:'100px !important'
        },
        '@media(max-width:600px)':{
            marginTop:'30px !important'
        }
    },
    formField:{
        marginBottom: '20px !important',
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
    errorMesg:{
        color:'red',
        fontSize:'14px !important',
        marginBottom:'0 !important',
        marginLeft:'3px !important',
    },
    signupBtn:{
        display: 'block !important',
        fontSize: '18px !important',
        fontFamily: 'nunitoextrabold !important',
        width: '100% !important',
        padding: '15px !important',
        margin: '0 0 32px !important',
        color: '#fff !important',
        backgroundColor: '#ff6700 !important',
        borderColor: '#ff6700 !important',
        textTransform:'none !important',
        "&:hover":{
            backgroundColor:'#c14f02 !important',
        }
    },
    SignInImg:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'40px',
    },
    existUser:{
        color:'rgba(78,78,78,0.7)',
        fontSize:'14px !important',
        "& a:-webkit-any-link":{
            color:'#ff6700', 
            marginLeft:'10px', 
            textDecoration:'none !important', 
            cursor:'pointer', 
            "&:hover":{
                textDecoration:'underline !important'
            }
        }
    }
}))

const SignUp = () =>{
    const classes = useStyles()
    // Form Validation
    const { register, handleSubmit, formState: { errors } , getValues} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }    
    return(
        <>
            <Box className={classes.signInContainer}>
                <Container>
                    <Grid item xs={12} container sx={{display:'flex', flexDirection:{md:'row', xs:'column-reverse'}}}>
                        <Grid item md={6} xs={12}>
                            <Box className={classes.formSection}>
                                <Box className={classes.signInHeader}>
                                    <Typography variant="h6" className={classes.signInTitle}>
                                        Get your free
                                    </Typography>
                                    <Typography variant="h2" className={classes.signInSubTitle}>
                                        Blaato Account Now 
                                    </Typography>
                                </Box>
                                <FormControl component="form" onSubmit={handleSubmit(onSubmit)} >
                                    <FormControl className={classes.formField}>
                                    <RadioGroup row  name="row-radio-buttons-group">
                                        <FormControlLabel value="individualUser" {
                                            ...register('user',{required:true})
                                        } control={<Radio/>} label="Individual User" />
                                        <FormControlLabel value="companyUser" {
                                            ...register('user',{required:true})
                                        }
                                        control={<Radio/>} label="Company User" />
                                        {errors.user && errors.user.type === "required"  && <Typography paragraph={true} className={classes.errorMesg}>Please choose one of them.</Typography>}
                                    </RadioGroup>
                                    </FormControl>
                                    <FormControl className={classes.formField}>
                                        <input placeholder="Full Name*" name="fullname" className={classes.inputField} 
                                        {...register("fullname", {
                                            required: 'Fullname is required.',
                                        })}/>
                                        {errors.fullname && errors.fullname.type === "required"  && <Typography paragraph={true} className={classes.errorMesg}>{errors.fullname.message}</Typography>}

                                    </FormControl>
                                    <FormControl className={classes.formField}>
                                        <input placeholder="Email*" className={classes.inputField} name="email"
                                        {
                                            ...register('email', {
                                                required:'Email is required',
                                                pattern:{
                                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message:'This is not a valid email'
                                                },
                                            })
                                        }/>
                                        {errors.email && errors.email.type === 'required' && <Typography paragraph={true} className={classes.errorMesg}>{errors.email.message}</Typography>}
                                        {errors.email && errors.email.type === 'pattern' && <Typography paragraph={true} className={classes.errorMesg}>{errors.email.message}</Typography>}
                                    </FormControl>
                                    <FormControl className={classes.formField}>
                                        <input placeholder="Password*" className={classes.inputField} name="password" 
                                        {
                                            ...register('password',{
                                                required:'Password is required',
                                                maxLength:{
                                                    value:8,
                                                    message:'Password can not excees more than 8 characters'
                                                },
                                                minLength:{
                                                    value:4,
                                                    message:'Password must be more than 4 characters'
                                                }
                                            })
                                        }/>
                                        {errors.password && errors.password.type === "required"  && <Typography paragraph={true} className={classes.errorMesg}>{errors.password.message}</Typography>}
                                        {errors.password && errors.password.type === "maxLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.password.message}</Typography>}
                                        {errors.password && errors.password.type === "minLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.password.message}</Typography>}
                                    </FormControl>
                                    <FormControl className={classes.formField}>
                                        <input placeholder="Confirm Password*" className={classes.inputField} name="confirm_Password"
                                        {
                                        ...register('confirm_Password',{
                                            required:'Confirm Password is required',
                                            validate:value => value === getValues("password") || "password doesn't match",
                                            maxLength:{
                                                value:8,
                                                message:'Confirm Password can not excees more than 8 characters'
                                            },
                                            minLength:{
                                                value:4,
                                                message:'Confirm Password must be more than 4 characters'
                                            }
                                        })}
                                            />
                                        {errors.confirm_Password && errors.confirm_Password.type === "validate"  && <Typography paragraph={true} className={classes.errorMesg}>{errors.confirm_Password.message}</Typography>}
                                        {errors.confirm_Password && errors.confirm_Password.type === "required"  && <Typography paragraph={true} className={classes.errorMesg}>{errors.confirm_Password.message}</Typography>}
                                        {errors.confirm_Password && errors.confirm_Password.type === "maxLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.confirm_Password.message}</Typography>}
                                        {errors.confirm_Password && errors.confirm_Password.type === "minLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.confirm_Password.message}</Typography>}
                                    </FormControl>
                                    <FormControl className={classes.formField}>
                                        <input placeholder="Phone Number*" name="phone" className={classes.inputField}{
                                            ...register('phone',{
                                                required:'Phone Number is required.',
                                                pattern: {
                                                    value:/^\d{10}$/,
                                                    message:'This is not a valid phone number.'
                                                }
                                            })}
                                            />
                                            {errors.phone && errors.phone.type==="required" && <Typography paragraph={true} className={classes.errorMesg}>{errors.phone.message}</Typography>}
                                            {errors.phone && errors.phone.type==="pattern" && <Typography paragraph={true} className={classes.errorMesg}>{errors.phone.message}</Typography>}
                                    </FormControl>
                                    <FormControl className={classes.formField}>
                                        <input placeholder="Aadhar Card Number*" name="aadhar" className={classes.inputField}
                                        {
                                            ...register('aadhar',{
                                                required:'Aadhar Number is required.',
                                                minLength:{
                                                    value:12,
                                                    message:'This is not a valid Aadhar Number'
                                                },
                                                maxLength:{
                                                    value:12,
                                                    message:'This is not a valid Aadhar Number'
                                                }
                                            })
                                        }/>
                                            {errors.aadhar && errors.aadhar.type==="required" && <Typography paragraph={true} className={classes.errorMesg}>{errors.aadhar.message}</Typography>}
                                            {errors.aadhar && errors.aadhar.type==="minLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.aadhar.message}</Typography>}
                                            {errors.aadhar && errors.aadhar.type==="maxLength" && <Typography paragraph={true} className={classes.errorMesg}>{errors.aadhar.message}</Typography>}
                                    </FormControl>
                                    <FormControl>
                                        <Button variant="contained" type="submit" className={classes.signupBtn}>
                                        Signup
                                        </Button>
                                    </FormControl>
                                </FormControl>
                                <FormControl>
                                    <Typography paragraph={true} align='center' className={classes.existUser}>
                                        Existing User ?
                                        <Link to="/signin">Login</Link>
                                    </Typography>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item md={6} xs={12} className={classes.SignInImg}>
                            <img src={SignInImg} alt="SignInImg" width="100%" sx={{maxWidth:'530px'}}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default SignUp;