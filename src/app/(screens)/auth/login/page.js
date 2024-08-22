'use client'
import { Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import '../../../../../public/sass/pages/auth.scss'
import Image from 'next/image'
import Logo from '../../../../../public/images/logo.png'
import { EmailOutlined, LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import Link from 'next/link'
import background from '../../../../../public/images/auth/background_image.png'
export default function Login() {
    const [showPassword, setshowPassword] = useState(false);

    const Clickpassword = () => { setshowPassword((show) => !show ) }
    

    return (
        <div className='auth_section'>
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
                                        <Typography variant='h4'>Login</Typography>
                                        <Typography variant='h6'>If you don’t have a registered account. You can <Link href='/auth/signup'>Register here !</Link> </Typography>
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
                                        <div className='extras'>
                                            <div className='remember'>
                                                <input type='checkbox' id='remember_me' name='remember_me' value='remember_me' />
                                                <label htmlFor="remember_me">Remember me</label>
                                            </div>
                                            <div className='forgot_pass'>
                                                <Link href='#'>Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className='btn_area'>
                                            <Button variant='contained'>Login</Button>
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