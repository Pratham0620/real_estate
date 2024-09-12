"use client"
import Image from "next/image";
import "../../../public/sass/pages/navbar.scss";
import Logo from "../../../public/images/logo.png"
import { Button, Container, Icon, Grid, item, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {

    const [isLogin, setLogin] = useState(true);

    const [show, setShow] = useState(false);
    // const [showD, setShowD] = useState(false);

    const [click, setClick] = useState(null);

    const navItems = [
        { name: 'Home', link: '/home' },
        { name: 'Buy', link: '/buy/buy_page' },
        { name: 'About us', link: '/aboutUs' },
        { name: 'Blogs', link: '/blogs/blog_page' },
        { name: 'Contact us', link: '/contact' },
        { name: 'Liked Properties', link: '/' }
    ];

    const path = usePathname();
    const hideAt = ['/auth/login', '/auth/reset', '/auth/signup', '/auth/forgotpassword'];
    const hide = hideAt.includes(path);
    if (hide) {
        return null;
    };

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

                                    />
                                </div>
                            </div>
                            <div className='middle_container'>
                                <ul className="nav_list">
                                    {navItems.map((item, index) => (
                                        <li className={`list_item ${click === index ? 'active' : ''}`} onClick={() => setClick(index)} key={index}>
                                            <Link href={item.link}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="right_container">
                                {isLogin ?
                                    <Button className='login'>
                                        <Link href='/profile_dashboard/sell'>
                                            <Typography>Profile</Typography>
                                        </Link>
                                    </Button>
                                    :
                                    <Button className="login">
                                        <Link href='/auth/login'>
                                            <Typography>Login</Typography>
                                        </Link>
                                    </Button>
                                }
                                <div className="menu">
                                    <Icon onClick={() => setShow(true)}>
                                        <Menu />
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
                                                {navLinks.map((link, index) => (
                                                    <li className="lisItem" key={index}>
                                                        <Link href={link.href}>{link.label}</Link>
                                                    </li>
                                                ))}
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