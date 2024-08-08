'use client'
import Image from "next/image";
import "../../../public/sass/pages/navbar.scss";
import Logo from "../../../public/images/logo.png"
import { Button, Container, Icon, Grid, item, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Close, Menu, MoreVert } from "@mui/icons-material";

export default function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <div className="header_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="inner_parent">
                            <div className="left_container">
                                <div className="appLogo">
                                    <Image
                                        src={Logo}
                                        alt="Logo"
                                        priority={true}
                                    />
                                </div>
                            </div>
                            <div className='middle_container'>
                                <ul className="nav_list">
                                    <li><a className="list_item" href='#'>Home</a></li>
                                    <li><a className="list_item" href='#'>Buy</a></li>
                                    <li><a className="list_item" href='#'>About us</a></li>
                                    <li><a className="list_item" href='#'>Blogs</a></li>
                                    <li><a className="list_item" href='#'>Contact us</a></li>
                                    <li><a className="list_item" href='#'>Liked Properties</a></li>
                                </ul>
                            </div>
                            <div className="right_container">
                                <Button className="login">
                                    <Typography>Login</Typography>
                                </Button>
                                <div className="menu">
                                    <Icon onClick={() => setShow(true)}>
                                        <Menu/>
                                    </Icon>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            {
                show ?
                    <div className="responsive_header">
                        <Container>
                            <Grid container>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <div className="innerparent">
                                        <div className="header">
                                            <div className="Logo">
                                                <Image
                                                    src={Logo}
                                                    alt="Logo"
                                                    priority={true}
                                                />
                                            </div>
                                            <div >
                                                <IconButton onClick={() => { setShow(false) }}>
                                                    <Close />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="navlist">
                                            <ul>
                                                <li className="lisItem"><a href="#">Home</a></li>
                                                <li className="lisItem"><a href="#">Buy</a></li>
                                                <li className="lisItem"><a href="#">About us</a></li>
                                                <li className="lisItem"><a href="#">Blogs</a></li>
                                                <li className="lisItem"><a href="#">Contact us</a></li>
                                                <li className="lisItem"><a href="#">Liked Properties</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    : null
            }
        </div>

    );
}