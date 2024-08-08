import { Container, Grid, Typography } from "@mui/material";
import '../../../public/sass/pages/contactUs.scss'
import contact1 from '../../../public/images/contact1.png'
import contact2 from '../../../public/images/contact2.png'
import Image from "next/image";

export default function Contact() {
    return (
        <div className="contact_container">
            {/* <div className="above_container">
                <div className="left">
                    <Container>
                        <Grid container>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="inner_parent">
                                <Typography className="header">CONTACT US</Typography>
                                     <Typography className="get_in touch">
                                         Get in touch with us.
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
                <div className="right">
                    <Image 
                        src={contact1}
                        alt="images"
                        priority
                    />
                </div>
            </div> */}
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
                                    <Grid item xl={5} lg={5} md={5} sm={0} xs={0}>
                                        <div className="images">
                                            <Image
                                                src={contact2}
                                                alt="image"
                                                priority
                                                
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                                        <form>
                                            <div className="details">
                                                <Grid container>
                                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                        <div className="input_field">

                                                        </div>
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                    <div className="input_field">
                                                        </div>   
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                    <div className="input_field">

                                                    </div>
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                    <div className="input_field">

                                                    </div>
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                    <div className="message_field">
                                                        
                                                    </div>
                                                    </Grid>
                                                </Grid>
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