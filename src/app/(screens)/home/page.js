'use client'
import { ArrowBack, ArrowForward, BathtubTwoTone, ChevronLeft, ChevronRight, FilterNone, Home, HotelOutlined, LocationOnRounded, Search, SearchRounded, Villa } from "@mui/icons-material";
import { Button, Container, FormControl, Grid, IconButton, Input, InputAdornment, MenuItem, Select, Typography } from "@mui/material";
import '../../../../public/sass/pages/homepage.scss';
import { useState } from "react";
import Image from "next/image";
import house from '../../../../public/images/home/homesearch.svg';
import house2 from '../../../../public/images/home/contact2.png';
import icon1 from '../../../../public/images/home/feature_icon1.png';
import icon2 from '../../../../public/images/home/feature_icon2.png';
import icon3 from '../../../../public/images/home/feature_icon3.png';
import icon4 from '../../../../public/images/home/feature_icon4.png';
import propti from '../../../../public/images/home/property.png';
import big from '../../../../public/images/home/big_picture.png';
import small from '../../../../public/images/home/small_pic.png'
import slide1 from '../../../../public/images/home/slide1.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";

export default function Homepage() {
    const [property, setProperty] = useState('');
    const handleChange = (event) => {
        setProperty(event.target.value);
    };
    const [searchOption, setsearchoption] = useState('')
    const [item, setItem] = useState(0);

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

    return (
        <div className="home_container">
            <div className="search_container">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="inner_parent">
                                <div className="title">
                                    <Home />
                                    <Typography variant="h5">Best Real Estate</Typography>
                                </div>
                                <Typography variant="h4">Make Yourself At Home</Typography>
                                <Typography variant="h6">Luxury Homes from Lusaka to Livingstone. Experience Zambia's Most Desired Real Estate.</Typography>
                                <form>
                                    <ul className="search_type">
                                        <li onClick={() => { setsearchoption(searchOption == 0 ? null : 0) }} className={`typebtn ${searchOption == 0 ? 'active' : ''}`} >Buy</li>
                                        <li onClick={() => { setsearchoption(searchOption == 1 ? null : 1) }} className={`typebtn ${searchOption == 1 ? 'active' : ''}`}  >Rent</li>
                                    </ul>
                                    <div className="search_bar">
                                        <div className="left">
                                            <FormControl fullWidth>
                                                <Select
                                                    size="small"
                                                    labelId="property-label"
                                                    id="property"
                                                    value={property}
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    renderValue={(selected) => {
                                                        if (selected.length === 0) {
                                                            return <span style={{ color: '#888' }}>Property type</span>;
                                                        }
                                                        return <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            {selected}
                                                        </div>;;
                                                    }}
                                                >
                                                    <MenuItem value={'Modern Villa'}>Modern Villa</MenuItem>
                                                    <MenuItem value={'Town House'}>Office</MenuItem>
                                                    <MenuItem value={'Family House'}>Family House</MenuItem>
                                                    <MenuItem value={'Apartment'}>Apartment</MenuItem>
                                                    <MenuItem value={'Other'}>Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="right">
                                            <div className="input_field">
                                                <Input
                                                    id="search_item"
                                                    name="search_item"
                                                    type="text"
                                                    fullWidth
                                                    placeholder="Search by location or Property ID..."
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <Search />
                                                        </InputAdornment>
                                                    }
                                                    disableUnderline
                                                />
                                            </div>
                                            <Button className="search_button">
                                                <Typography>Search</Typography>
                                            </Button>
                                            <IconButton>
                                                <SearchRounded />
                                            </IconButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="house">
                                <Image
                                    src={house}
                                    alt="hello"

                                />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="features">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="feature_parent">
                                <Grid container>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <Grid container>
                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={6}>
                                                <Typography variant="h4">The new way to find your new home</Typography>
                                                <Typography variant="h6">Find your dream place to live in with more than 10k+ properties listed.</Typography>
                                                <Button className="browse">
                                                    <Typography>
                                                        Browse Properties
                                                    </Typography>
                                                </Button>

                                            </Grid>
                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={6}>
                                                <div className="images">
                                                    <Image
                                                        src={house2}
                                                        alt="our features"

                                                    />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <Grid container spacing={4} marginTop={0.4} >
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon1}
                                                        alt="1."

                                                    />
                                                </div>
                                                <Typography variant="h5">Property Insurance</Typography>
                                                <Typography variant="h6">
                                                    We offer our customer property protection
                                                    of liability coverage and insurance for their better life.
                                                </Typography>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon2}
                                                        alt="2."

                                                    />
                                                </div>
                                                <Typography variant="h5">Best Price</Typography>
                                                <Typography variant="h6">
                                                    Not sure what you should be charging for your property?
                                                    No need to worry, let us do the numbers for you.
                                                </Typography>

                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon3}
                                                        alt="1."

                                                    />
                                                </div>
                                                <Typography variant="h5">Lowest Commission</Typography>
                                                <Typography variant="h6">
                                                    You no longer have to negotiate commissions
                                                    and haggle with other agents it only cost 2%!                                                </Typography>

                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon4}
                                                        alt="1."

                                                    />
                                                </div>
                                                <Typography variant="h5">Overall Control</Typography>
                                                <Typography variant="h6">
                                                    Get a virtual tour, and schedule visits before you rent or buy any properties.
                                                    You get overall control.
                                                </Typography>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="featured_properties">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="properties_parent">
                                <Typography variant="h5">Featured Properties</Typography>
                                <Typography variant="h6">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                </Typography>
                                <div className="properties_tab">
                                    <ul className="list">
                                        <li className={`list_item ${item == 0 ? 'active' : ''}`} onClick={() => setItem(0)} >All Properties</li>
                                        <li className={`list_item ${item == 1 ? 'active' : ''}`} onClick={() => setItem(1)} >Villa</li>
                                        <li className={`list_item ${item == 2 ? 'active' : ''}`} onClick={() => setItem(2)} >Apartment</li>
                                        <li className={`list_item ${item == 3 ? 'active' : ''}`} onClick={() => setItem(3)} >Office</li>
                                    </ul>
                                    {item == 0 ? <div className="property_grid">
                                        <Grid container spacing={2.5} >
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
                                    </div> : ""}
                                    {item == 1 ? <div className="property_grid">
                                        <Grid container spacing={2.5} >
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
                                    </div> : ""}
                                    {item == 2 ? <div className="property_grid">
                                        <Grid container spacing={2.5} >
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
                                    </div> : ""}
                                    {item == 3 ? <div className="property_grid">
                                        <Grid container spacing={2.5} >
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
                                    </div> : ""}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="slider_div">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="inner_parent">
                                <>
                                    <Swiper
                                        slidesPerView={5}
                                        spaceBetween={0}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        centeredSlides={true} // Center the active slide
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <div className="swiper-button-next">
                                            <ArrowForward />
                                        </div>
                                        <div className="swiper-button-prev">
                                            <ArrowBack />
                                        </div>
                                    </Swiper>
                                </>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="find_properties">
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="find">
                                <Typography variant="h5">Find Properties in this cities</Typography>
                                <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="big_picture">
                                            <div className="big_images">
                                                <Image
                                                    src={big}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="info">
                                                <p className="property">8 Properties</p>
                                                <p className="city">New York</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <div className="small_picture">
                                            <div className="small_images">

                                                <Image
                                                    src={small}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="info">
                                                <p className="property">8 Properties</p>
                                                <p className="city">New York</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <div className="small_picture">
                                            <div className="small_images">

                                                <Image
                                                    src={small}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="info">
                                                <p className="property">8 Properties</p>
                                                <p className="city">New York</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <div className="small_picture">
                                            <div className="small_images">

                                                <Image
                                                    src={small}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="info">
                                                <p className="property">8 Properties</p>
                                                <p className="city">New York</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <div className="small_picture">
                                            <div className="small_images">
                                                <Image
                                                    src={small}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="info">
                                                <p className="property">8 Properties</p>
                                                <p className="city">New York</p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="big_picture">
                                            <div className="big_images">
                                                <Image
                                                    src={big}
                                                    alt="image"

                                                />
                                            </div>
                                            <div className="info">
                                                <p className="property">8 Properties</p>
                                                <p className="city">New York</p>
                                            </div>
                                        </div>
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