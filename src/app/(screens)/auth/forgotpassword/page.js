
import '../../../../../public/sass/pages/auth.scss';
import { Container, Grid, InputAdornment, TextField, Typography, Button } from "@mui/material";
import Image from 'next/image';
import Logo from '../../../../../public/images/logo.png';
import { EmailOutlined } from '@mui/icons-material';
import background from '../../../../../public/images/auth/background_image.png'
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function Forgotpass() {
    return (
            <div className='auth_section forgot_section'>
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='auth_area'>
                                <div className='left'>
                                    <div className='logo'>
                                        <Image
                                            src={Logo}
                                            alt='image'
                                            priority
                                        />
                                    </div>
                                    <div className='form_area'>
                                        <div className='header'>
                                            <Typography variant='h4'>Forgot Password</Typography>
                                            <Typography variant='h6'>Please enter the email address you use when creating your account, We’ll send you the instructions to reset your password </Typography>
                                        </div>
                                        <form>
                                            <div className='form_fields'>
                                                <TextField
                                                    id='email'
                                                    type='email'
                                                    name='email'
                                                    label='Email'
                                                    placeholder='Enter email address'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <EmailOutlined /> {/* Email icon */}
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    variant="standard"
                                                />
                                            </div>
                                            <div className='btn_area'>
                                                <Button variant='contained'>Submit</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='right'>
                                    <Image
                                        src={background}
                                        alt='image'
                                        priority
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

            </div>
    )
}