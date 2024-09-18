'use client'
import { Button, Container, Grid, Typography } from '@mui/material';
import '../../../../../public/sass/pages/detail.scss';
import { BathtubTwoTone, Call, EmailOutlined, FilterNone, FmdGoodTwoTone, HotelOutlined, LocationOnRounded } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';
import propti from '../../../../../public/images/home/property.png';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Link from 'next/link';


export default function Detail() {

    const [More, setMore] = useState(false);

    const Read = () => {
        setMore(!More)
    };
    const description = `Lorem ipsum dolor sit amet consectetur.
                        Nullam vulputate facilisis dictum vel
                        fermentum condimentum gravida amet. Amet
                        massa sit sit in nisi pretium faucibus id.
                        Vulputate eu elementum in lacus sed natoque.
                        Fermentum molestie cursus molestie non convallis
                        id duis ac.
                        Lorem ipsum dolor sit amet consectetur.
                        Nullam vulputate facilisis dictum vel
                        fermentum condimentum gravida amet. Amet
                        massa sit sit in nisi pretium faucibus id.
                        Vulputate eu elementum in lacus sed natoque.
                        Fermentum molestie cursus molestie non convallis
                        id duis ac.`;

    const Utils = [
        {
            icon: <FilterNone />,
            title: 'Area',
            value: '400 sq ft'
        },
        {
            icon: <HotelOutlined />,
            title: 'Bedroom',
            value: '4'
        },
        {
            icon: <BathtubTwoTone />,
            title: 'Bathroom',
            value: '1'
        }
    ]
    const cardsData = [
        {
            imageSrc: propti,
            title: "Eaton Garth Penthouse",
            address: "7722 18th Ave, Brooklyn",
            price: "$395",
            chips: ["for sale", "for rent", "featured"],
            features: { bedrooms: 4, bathrooms: 2, area: 400 },
        },
        {
            imageSrc: propti,
            title: " New Apartment Nice Wiew",
            address: "42 Avenue O, Brooklyn",
            price: "$250,000",
            chips: ["for sale", "featured"],
            features: { bedrooms: 2, bathrooms: 1, area: 200 },
        },
        {
            imageSrc: propti,
            title: "Diamond Manor Apartment",
            address: "7802 20th Ave, Brooklyn",
            price: "$500",
            chips: ["for rent"],
            features: { bedrooms: 4, bathrooms: 1, area: 1000 },
        },
    ];
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className='buy_detail'>
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className='detail_parent'>
                            <Grid container columnSpacing={4} rowSpacing={1.5}>
                                <Grid item xl={7} lg={7} md={7} sm={6} xs={12}  >
                                    <>
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff',
                                            }}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >
                                            <SwiperSlide>
                                                <img src="/images/buy/image1.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/image2.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/image3.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/buy1.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/buy2.png" />
                                            </SwiperSlide>
                                        </Swiper>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={2}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <img src="/images/buy/image1.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/image2.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/image3.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/buy1.png" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/buy/buy2.png" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </>
                                </Grid>
                                <Grid item xl={5} lg={5} md={5} sm={6} xs={12} >
                                    <div className='title'>
                                        <div className='heading'>
                                            <Typography >The Modern House</Typography>
                                            <Typography >$395,000</Typography>
                                        </div>
                                        <div className='address'>
                                            <FmdGoodTwoTone />
                                            <h4>2972 Westheimer Rd. Santa Ana, Illinois 85486</h4>
                                        </div>
                                        <p>Listed 30 days ago</p>
                                    </div>
                                    <div className='description'>
                                        <h4>Description</h4>
                                        <p>
                                            {More ? description : description.substring(0, 300)}
                                        </p>
                                        <Button variant='standard' onClick={Read}>
                                            {More ? 'Read Less' : 'Read More'}
                                        </Button>
                                    </div>
                                    <div className='utils'>
                                        <ul className='utils_list'>
                                            {Utils.map((items, index) => (
                                                <li className='utils_item' key={index}>
                                                    <div className='utils_head'>
                                                        {items.icon}
                                                        {items.title}
                                                    </div>
                                                    <div className='value'>
                                                        {items.value}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='agent_details'>
                                        <h4>Agent Details</h4>
                                        <div className='details'>
                                            <p>Name:</p>
                                            <h6>Esther Howard</h6>
                                        </div>
                                        <div className='details'>
                                            <p>Address:</p>
                                            <h6>8080 Railroad St.</h6>
                                        </div>
                                        <div className='details'>
                                            <p><Call />Call:</p>
                                            <a href='tel:(603) 555-0123'>
                                                <h6>(603) 555-0123</h6>
                                            </a>
                                        </div>
                                        <div className='details'>
                                            <p><EmailOutlined />Email:</p>
                                            <a href='mailto:debbie.baker@example.com'>
                                                <h6>debbie.baker@example.com</h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='btn_area'>
                                        <Button variant='contained'>
                                            <Link href='/buy/buy_fill'>
                                                Get In Touch
                                            </Link>
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className='explore'>
                                <h4>Explore other properties</h4>
                                <Grid container columnSpacing={2.5} rowSpacing={2.5}>
                                    {cardsData.map((card, index) => (
                                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                                            <Link href={"#"}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image src={card.imageSrc} alt={card.title} />
                                                    </div>
                                                    <ul className="chip_list">
                                                        {card.chips.map((chip, chipIndex) => (
                                                            <li key={chipIndex} className={chip === "featured" ? "chip featured" : "chip"}>{chip}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">{card.title}</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>{card.address}</p>
                                                        </div>
                                                        <div className='bottom'>

                                                            <ul className="list_feature">
                                                                <li><HotelOutlined /> {card.features.bedrooms}</li>
                                                                <li><BathtubTwoTone /> {card.features.bathrooms}</li>
                                                                <li><FilterNone /> {card.features.area} sq ft</li>
                                                            </ul>

                                                            <h5 className="price">
                                                                {card.chips.includes("for rent") ? (<>{card.price}<span style={{ fontWeight: '100' }}>/month</span></>) : `${card.price}`}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
} 