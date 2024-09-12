'use client'
import { Container, Grid, IconButton, Pagination, Stack, Typography } from "@mui/material";
import '../../../../../public/sass/pages/blogs.scss';
import Image from "next/image";
import blog1 from '../../../../../public/images/blog/blog1.png';
import blog2 from '../../../../../public/images/blog/blog2.png';
import blog3 from '../../../../../public/images/blog/blog3.png';
import blog4 from '../../../../../public/images/blog/blog4.png';
import blog5 from '../../../../../public/images/blog/blog5.png';
import blog6 from '../../../../../public/images/blog/blog6.png';
import blog7 from '../../../../../public/images/blog/blog7.png';
import { ArrowOutward } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
export default function Blog() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const cardData = [
        {
            image: blog7,
            altText: "blog1",
            date: "Alec Whitten • 1 Jan 2023",
            heading: "What Is UDS In Apartment & How To Calculate It",
            description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        },
        {
            image: blog2,
            altText: "blog2",
            date: "Demi Wilkinson • 1 Jan 2023",
            heading: "How To Buy An Apartment Complex",
            description: "Mental models are simple expressions of complex processes or relationships.",
        },
        {
            image: blog3,
            altText: "blog3",
            date: "Candice Wu • 1 Jan 2023",
            heading: "Apartment with Adequate Storage Space?",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        },
        {
            image: blog4,
            altText: "blog4",
            date: "Natali Craig • 1 Jan 2023",
            heading: "What Makes Apartments an Ideal Choice?",
            description: "Collaboration can make our teams stronger, and our individual designs better.",
        },
        {
            image: blog5,
            altText: "blog5",
            date: "Drew Cano • 1 Jan 2023",
            heading: "What are the advantages of apartments with gyms?",
            description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        },
        {
            image: blog6,
            altText: "blog6",
            date: "Orlando Diggs • 1 Jan 2023",
            heading: "Apartment Construction: How To Do The Quality Check",
            description: "Starting a community doesn’t need to be complicated, but how do you get started?",
        },
    ];
    return (
        <div className="blog_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="inner_parent">
                            <div className="highlighted">
                                <Grid container columnSpacing={3}>
                                    <Grid item xl={6} lg={6} md={6} sm={5} xs={12} >
                                        <Link href='/blogs/blog_detail'>
                                            <div className="images">
                                                <Image
                                                    src={blog1}
                                                    alt="blog1"

                                                />
                                            </div>
                                        </Link>

                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={7} xs={12} >
                                        <p className="date">
                                            Olivia Rhye • 1 Jan 2023
                                        </p>
                                        <Link href='/blogs/blog_detail'>
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
                                        </Link>
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
                                    {cardData.map((card, index) => (
                                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12} key={index}>
                                            <div className="card">
                                                <Link href='/blogs/blog_detail'>
                                                    <div className="images">
                                                        <Image
                                                            src={card.image}
                                                            alt={card.altText}

                                                        />
                                                    </div>
                                                </Link>
                                                <p className="date">
                                                    {card.date}
                                                </p>
                                                <Link href='/blogs/blog_detail'>
                                                    <h4 className="heading">
                                                        {card.heading}
                                                        <IconButton
                                                            href="#"
                                                            disableRipple
                                                            className="arrow"
                                                        >
                                                            <ArrowOutward />
                                                        </IconButton>
                                                    </h4>
                                                </Link>
                                                <p className="description">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </Grid>
                                    ))}
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