'use client'
import '../../../../../public/sass/pages/auth.scss';
import { Container, Grid, InputAdornment, TextField, Typography, Button, IconButton } from "@mui/material";
import Image from 'next/image';
import Logo from '../../../../../public/images/logo.png';
import { EmailOutlined, LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import background from '../../../../../public/images/background_image.png'

export default function Reset(){
    const [showPassword, setshowPassword] = useState(false);

    const Clickpassword = () => { setshowPassword((show) => !show) }
    return (
        <div className='auth_section reset_section'>
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
                                        <Typography variant='h4'>Reset Password</Typography>
                                        <Typography variant='h6'>Please enter the email address you use when creating your account, We’ll send you the instructions to reset your password </Typography>
                                    </div>
                                    <form>
                                        <div className='form_fields'>
                                        <TextField
                                                id='password'
                                                type={showPassword ? 'text' : 'password'}
                                                name='password'
                                                label='Old Password'
                                                placeholder='Old Password'
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
                                                label='New Password'
                                                placeholder='New Password'
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
                                        <div className='btn_area'>
                                            <Button variant='contained'>Reset Password</Button>
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