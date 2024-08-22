'use client'
import Image from "next/image";
import "../../../public/sass/pages/navbar.scss";
import Logo from "../../../public/images/logo.png"
import { Button, Container, Icon, Grid, item, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Close, Menu, MoreVert } from "@mui/icons-material";
import Link from "next/link";

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
                                    <li><Link className="list_item" href='#'>Home</Link></li>
                                    <li><Link className="list_item" href='#'>Buy</Link></li>
                                    <li><Link className="list_item" href='#'>About us</Link></li>
                                    <li><Link className="list_item" href='#'>Blogs</Link></li>
                                    <li><Link className="list_item" href='#'>Contact us</Link></li>
                                    <li><Link className="list_item" href='#'>Liked Properties</Link></li>
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
                                                <li className="lisItem"><Link href="#">Home</Link></li>
                                                <li className="lisItem"><Link href="#">Buy</Link></li>
                                                <li className="lisItem"><Link href="#">About us</Link></li>
                                                <li className="lisItem"><Link href="#">Blogs</Link></li>
                                                <li className="lisItem"><Link href="#">Contact us</Link></li>
                                                <li className="lisItem"><Link href="#">Liked Properties</Link></li>
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