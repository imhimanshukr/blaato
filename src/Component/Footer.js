import React from "react";
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material/'
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    footerTitle: {
        fontSize: '19px !important',
        fontFamily: 'nunitobold !important',
        color: '#fff',
        margin: '0 0 55px !important',
        position: 'relative',
        '&:after': {
            position: 'absolute',
            content: "''",
            width: '40px',
            height: '2px',
            bottom: '-18px',
            left: '0',
            backgroundColor: '#515151'
        }
    },
    footerPara: {
        color: '#9c9c9c',
        fontSize: '14px !important',
        margin: '0 !important',
        lineHeight: '22px !important',
        maxWidth: '330px',
        fontFamily: 'nunitoregular !important'
    },
    footerLinks: {
        color: '#9c9c9c !important',
        textDecoration: 'none !important',
        display: 'block',
        fontSize: '14px',
        fontFamily: 'nunitoregular !important',
        margin: '0 0 10px !important',
        transition: '.3s all ease',
        width: 'fit-content',
        "&:hover": {
            color: '#ff6700 !important'
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#252525', padding: '35px 0' }}>
            <Container>
                <Grid container spacing={2} sx={{ justifyContent: 'center !important' }}>

                  
                    <Grid item md={4} xs={12}>
                        <Typography variant="h5" className={classes.footerTitle}>
                            About Us
                        </Typography>
                        <Typography paragraph={true} className={classes.footerPara}>
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>

                    {/* Sitemap */}
                    <Grid item md={2.5} xs={6}>
                        <Typography variant="h5" className={classes.footerTitle} sx={{ paddingRight: '55px' }}>
                            Sitemap
                        </Typography>
                        <Stack>
                            <Link href="#0" className={classes.footerLinks}>Home</Link>
                            <Link href="#0" className={classes.footerLinks}>Rate Card</Link>
                            <Link href="#0" className={classes.footerLinks}>Servicable Pincodes</Link>
                            <Link href="#0" className={classes.footerLinks}>About Us</Link>
                            <Link href="#0" className={classes.footerLinks}>Contact Us</Link>
                        </Stack>
                    </Grid>

                    {/* Services */}
                    <Grid item md={2.5} xs={6}>
                        <Typography variant="h5" className={classes.footerTitle}>
                            Services
                        </Typography>
                        <Stack>
                            <Link href="#" className={classes.footerLinks}>Cargo Transportation</Link>
                            <Link href="#" className={classes.footerLinks}>Air Freight</Link>
                            <Link href="#" className={classes.footerLinks}>Ocean Freight</Link>
                            <Link href="#" className={classes.footerLinks}>Packaging & Storage</Link>
                            <Link href="#" className={classes.footerLinks}>Air Freight</Link>
                        </Stack>
                    </Grid>

                    
                    {/* Quick Links */}
                    <Grid item md={3} xs={12}>
                        <Typography variant="h5" className={classes.footerTitle}>
                            Quick Contact
                        </Typography>
                        <Typography paragraph={true} className={classes.footerPara}>
                            PO Box 16122 Lorem Ipsum is simply dummy text
                        </Typography>
                        <br />
                        <Typography paragraph={true} className={classes.footerPara}>
                            +61 3 8376 6284
                        </Typography>
                        <Stack direction="row" sx={{ paddingTop: '20px' }}>
                            <FacebookIcon sx={{ cursor: 'pointer', marginRight: '10px', padding: '10px', borderRadius: '50%', backgroundColor: '#3b3b3b', color: '#fff', fontSize: '18px' }} />
                            <TwitterIcon sx={{ cursor: 'pointer', marginRight: '10px', padding: '10px', borderRadius: '50%', backgroundColor: '#3b3b3b', color: '#fff', fontSize: '18px' }} />
                            <GoogleIcon sx={{ cursor: 'pointer', marginRight: '10px', padding: '10px', borderRadius: '50%', backgroundColor: '#3b3b3b', color: '#fff', fontSize: '18px' }} />
                            <InstagramIcon sx={{ cursor: 'pointer', marginRight: '10px', padding: '10px', borderRadius: '50%', backgroundColor: '#3b3b3b', color: '#fff', fontSize: '18px' }} />
                        </Stack>
                    </Grid>
                    <Box sx={{ width: '95%', marginTop: '30px' }}>
                        <Box align="center" sx={{ paddingTop: '25px', borderTop: '1px solid #3b3b3b', width: '100%', textAlign: 'center', }}>
                            <Typography paragraph={true} sx={{ fontSize: '14px', color: '#9c9c9c', letterSpacing: '1px' }}>
                                Copyright © 2021. All Rights Reserved.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

            </Container>
        </Box>
    )
}

export default Footer;