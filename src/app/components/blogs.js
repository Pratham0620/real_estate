'use client'
import { Container, Grid, IconButton, Pagination, Stack, Typography } from "@mui/material";
import '../../../public/sass/pages/blogs.scss';
import Image from "next/image";
import blog1 from '../../../public/images/blog/blog1.png';
import blog2 from '../../../public/images/blog/blog2.png';
import blog3 from '../../../public/images/blog/blog3.png';
import blog4 from '../../../public/images/blog/blog4.png';
import blog5 from '../../../public/images/blog/blog5.png';
import blog6 from '../../../public/images/blog/blog6.png';
import blog7 from '../../../public/images/blog/blog7.png';
import { ArrowOutward } from "@mui/icons-material";
import { useState } from "react";
export default function Blog() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="blog_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="inner_parent">
                            <div className="highlighted">
                                <Grid container columnSpacing={3}>
                                    <Grid item xl={6} lg={6} md={6} sm={5} xs={12} >
                                        <div className="images">
                                            <Image
                                                src={blog1}
                                                alt="blog1"
                                                priority
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={7} xs={12} >
                                        <p className="date">
                                            Olivia Rhye • 1 Jan 2023
                                        </p>
                                        <h4 className="heading">
                                            Ready To Move In Apartments vs Ongoing Construction
                                            <IconButton
                                                href="#"
                                                disableRipple
                                                className="arrow"
                                            >
                                                <ArrowOutward />
                                            </IconButton>
                                        </h4>
                                        <p className="description">
                                            A grid system is a design tool used to arrange content on a webpage.
                                            It is a series of vertical and horizontal lines that create a matrix
                                            of intersecting points, which can be used to align and organize page elements.
                                            Grid systems are used to create a consistent look and feel across a website,
                                            and can help to make the layout more visually appealing and easier to navigate.
                                            A grid system is a design tool used to arrange content on a webpage.
                                            It is a series of vertical and horizontal lines that create a matrix of intersecting
                                            points, which can be used to align and organize page elements. Grid systems are used to
                                            create a consistent look and feel across a website, and can help to make the layout more
                                            visually appealing and easier to navigate.
                                        </p>

                                    </Grid>
                                </Grid>
                            </div>
                            <div className="all_blogs">
                                <p className="head">
                                    All Blog Posts
                                </p>
                                <Grid container columnSpacing={3} rowSpacing={3}>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} >
                                        <div className="card">

                                            <div className="images">
                                                <Image
                                                    src={blog7}
                                                    alt="blog1"
                                                    priority
                                                />
                                            </div>
                                            <p className="date">
                                                Alec Whitten • 1 Jan 2023
                                            </p>
                                            <h4 className="heading">
                                                What Is UDS In Apartment & How To Calculate It
                                                <IconButton
                                                    href="#"
                                                    disableRipple
                                                    className="arrow"
                                                >
                                                    <ArrowOutward />
                                                </IconButton>
                                            </h4>
                                            <p className="description">
                                                Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} >
                                        <div className="card">

                                            <div className="images">
                                                <Image
                                                    src={blog2}
                                                    alt="blog1"
                                                    priority
                                                />
                                            </div>
                                            <p className="date">
                                                Demi WIlkinson • 1 Jan 2023
                                            </p>
                                            <h4 className="heading">
                                                How To Buy An Apartment Complex
                                                <IconButton
                                                    href="#"
                                                    disableRipple
                                                    className="arrow"
                                                >
                                                    <ArrowOutward />
                                                </IconButton>
                                            </h4>
                                            <p className="description">
                                                Mental models are simple expressions of complex processes or relationships.
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} >
                                        <div className="card">

                                            <div className="images">
                                                <Image
                                                    src={blog3}
                                                    alt="blog1"
                                                    priority
                                                />
                                            </div>
                                            <p className="date">
                                                Candice Wu • 1 Jan 2023
                                            </p>
                                            <h4 className="heading">
                                                Apartment with Adequate Storage Space?
                                                <IconButton
                                                    href="#"
                                                    disableRipple
                                                    className="arrow"
                                                >
                                                    <ArrowOutward />
                                                </IconButton>
                                            </h4>
                                            <p className="description">
                                                Introduction to Wireframing and its Principles. Learn from the best in the industry.
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} >
                                        <div className="card">

                                            <div className="images">
                                                <Image
                                                    src={blog4}
                                                    alt="blog1"
                                                    priority
                                                />
                                            </div>
                                            <p className="date">
                                                Natali Craig • 1 Jan 2023
                                            </p>
                                            <h4 className="heading">
                                                What Makes Apartments an Ideal Choice?
                                                <IconButton
                                                    href="#"
                                                    disableRipple
                                                    className="arrow"
                                                >
                                                    <ArrowOutward />
                                                </IconButton>
                                            </h4>
                                            <p className="description">
                                                Collaboration can make our teams stronger, and our individual designs better.
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} >
                                        <div className="card">
                                            <div className="images">
                                                <Image
                                                    src={blog5}
                                                    alt="blog1"
                                                    priority
                                                />
                                            </div>
                                            <p className="date">
                                                Drew Cano • 1 Jan 2023
                                            </p>

                                            <h4 className="heading">
                                                What are the advantages of apartments with gyms?


                                                <IconButton
                                                    href="#"
                                                    disableRipple
                                                    className="arrow"
                                                >
                                                    <ArrowOutward />
                                                </IconButton>

                                            </h4>

                                            <p className="description">
                                                JavaScript frameworks make development easy with extensive features and functionalities.
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} >
                                        <div className="card">

                                            <div className="images">
                                                <Image
                                                    src={blog6}
                                                    alt="blog1"
                                                    priority
                                                />
                                            </div>
                                            <p className="date">
                                                Orlando Diggs • 1 Jan 2023
                                            </p>
                                            <h4 className="heading">
                                                Apartment Construction: How To Do The Quality Check
                                                <IconButton
                                                    href="#"
                                                    disableRipple
                                                    className="arrow"
                                                >
                                                    <ArrowOutward />
                                                </IconButton>
                                            </h4>
                                            <p className="description">
                                                Starting a community doesn’t need to be complicated, but how do you get started?
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="pagination">
                                    <Stack spacing={2}>
                                        {/* <Typography>Page: {page}</Typography> */}
                                        <Pagination count={10} page={page} onChange={handleChange} />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}