'use client'

import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import '../../../../public/sass/pages/contactUs.scss';
import contact2 from '../../../../public/images/contact/contact2.png'
import contact3 from '../../../../public/images/contact/contact3.png'
import contact4 from '../../../../public/images/contact/contact3.png'
import contact5 from '../../../../public/images/contact/contact3.png'

import Image from "next/image";
import Link from "next/link";
import { FormLabel } from "react-bootstrap";


export default function Contact() {

    const inputFields = [
        { id: 'first_name', name: 'first_name', type: 'text', placeholder: 'Enter Your First Name', label: 'First Name' },
        { id: 'last_name', name: 'last_name', type: 'text', placeholder: 'Enter Your Last Name', label: 'Last Name' },
        { id: 'phone_number', name: 'phone_number', type: 'text', placeholder: 'Enter Your Phone Number', label: 'Phone Number' },
        { id: 'email', name: 'email', type: 'email', placeholder: 'Enter Your Email', label: 'Email' },
    ];

    return (
        <div className="contact_container">
            <div className="upper_container">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="inner_parent">
                                <Typography className="header">CONTACT US</Typography>
                                <Typography className="get_in_touch">
                                    Get in touch with us.<br />
                                    We’d love to hear from you.
                                </Typography>
                                <Typography className="description">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Ultricies ipsum scelerisque orci id et.
                                    Venenatis elit sagittis dictumst mattis.
                                    Vestibulum mauris lacinia libero nunc lorem nec orci bibendum laoreet.
                                    Tortor interdum sit neque praesent in sit tristique.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="lower_container">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="header">
                                <Typography variant="h4">Have a question or need assistance?</Typography>
                                <Typography variant="h6">Reach out to us via email, phone, or the contact form below. We're eager to assist you.</Typography>
                            </div>
                            <div className="main_content">
                                <Grid container>
                                    <Grid item xl={5} lg={5.5} md={0} sm={0} xs={0}>
                                        <div className="images">
                                            <div className="house">
                                                <Image
                                                    src={contact2}
                                                    alt="image"


                                                />
                                            </div>
                                            <div className="rectangle1">
                                                <Image
                                                    src={contact3}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="rectangle2">
                                                <Image
                                                    src={contact4}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="elipse">

                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={7} lg={6.5} md={12} sm={12} xs={12}>
                                        <form>
                                            <div className="details">
                                                <Grid container rowSpacing={3} columnSpacing={4}>
                                                    {inputFields.map((field, index) => (
                                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
                                                            <FormLabel  >{field.label}</FormLabel>
                                                            <div className="input_field">
                                                                <TextField
                                                                    id={field.id}
                                                                    type={field.type}
                                                                    name={field.name}
                                                                    placeholder={field.placeholder}
                                                                />
                                                            </div>
                                                        </Grid>
                                                    ))}
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <FormLabel >Message</FormLabel>
                                                        <div className="input_field message">
                                                            <TextField
                                                                id="meassage"
                                                                type="text"
                                                                name="meassage"
                                                                placeholder="Write Message"
                                                                multiline
                                                                rows={6}
                                                            />
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <div className="button_submit">
                                                    <Link href='/contact'>
                                                        <Button>Submit</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

            </div>
        </div>

    )
}