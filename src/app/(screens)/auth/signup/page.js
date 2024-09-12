'use client'
import '../../../../../public/sass/pages/auth.scss';
import { Container, Grid, IconButton, InputAdornment, TextField, Typography, Button } from "@mui/material";
import Image from 'next/image';
import Logo from '../../../../../public/images/logo.png';
import { EmailOutlined, LockOutlined, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import background from '../../../../../public/images/auth/background_image.png'
import { useState } from "react";
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function SignIn() {
    const [showPassword, setshowPassword] = useState(false);
    const Clickpassword = () => { setshowPassword((show) => !show) }

    return (
            <div className="auth_section Signin">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="auth_area">
                                <div className="left">
                                    <div className='logo'>
                                        <Image
                                            src={Logo}
                                            alt='image'
                                            priority
                                        />
                                    </div>
                                    <div className='form_area'>
                                        <div className='header'>
                                            <Typography variant='h4'>Sign-Up</Typography>
                                            <Typography variant='h6'>If you already have an account register. You can <Link href={"/auth/login"}>Login here !</Link> </Typography>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <Grid container columnSpacing={2}>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <div className='form_fields'>
                                                        <TextField
                                                            id='first_name'
                                                            type='text'
                                                            name='first_name'
                                                            label='First Name'
                                                            placeholder='Enter first name'
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <Person />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                            variant="standard"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <div className='form_fields'>
                                                        <TextField
                                                            id='last_name'
                                                            type='text'
                                                            name='last_name'
                                                            label='Last Name'
                                                            placeholder='Enter last name'
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <Person />
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                            variant="standard"
                                                        />
                                                    </div>
                                                </Grid>

                                            </Grid>
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

                                            <div className='form_fields'>
                                                <TextField
                                                    id='password'
                                                    type={showPassword ? 'text' : 'password'}
                                                    name='password'
                                                    label='Password'
                                                    placeholder='Enter Password'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position='start'>
                                                                <LockOutlined />
                                                            </InputAdornment>
                                                        ),
                                                        endAdornment: (
                                                            <InputAdornment position='end'>
                                                                <IconButton
                                                                    onClick={Clickpassword}
                                                                    edge='end'
                                                                >
                                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    variant='standard'
                                                />
                                            </div>

                                            <div className='form_fields'>
                                                <TextField
                                                    id='password'
                                                    type={showPassword ? 'text' : 'password'}
                                                    name='password'
                                                    label=' Confirm Password'
                                                    placeholder='Confirm Password'
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position='start'>
                                                                <LockOutlined />
                                                            </InputAdornment>
                                                        ),
                                                        endAdornment: (
                                                            <InputAdornment position='end'>
                                                                <IconButton
                                                                    onClick={Clickpassword}
                                                                    edge='end'
                                                                >
                                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    variant='standard'
                                                />
                                            </div>

                                            <div className='extras'>
                                                <div className='remember'>
                                                    <input type='checkbox' id='remember_me' name='remember_me' value='remember_me' />
                                                    <label htmlFor="remember_me">Remember me</label>
                                                </div>
                                                <div className='forgot_pass'>
                                                    <Link href='/auth/forgotpassword'>Forgot Password?</Link>
                                                </div>
                                            </div>
                                            <div className='btn_area'>
                                                <Link href='/auth/reset'></Link>
                                                <Button variant='contained' type='submit'>Register</Button>
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