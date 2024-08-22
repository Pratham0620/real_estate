'use client'
import { BathroomTwoTone, BathtubTwoTone, Diversity3Outlined, FilterNone, Home, HotelOutlined, LocationOffOutlined, LocationOnOutlined, LocationOnRounded, Search, Villa } from "@mui/icons-material";
import { Button, Container, FormControl, Grid, Input, InputAdornment, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
import '../../../public/sass/pages/homepage.scss';
import { useState } from "react";
import Image from "next/image";
import house from '../../../public/images/home/homesearch.svg';
import house2 from '../../../public/images/home/contact2.png';
import icon1 from '../../../public/images/home/feature_icon1.png';
import icon2 from '../../../public/images/home/feature_icon2.png';
import icon3 from '../../../public/images/home/feature_icon3.png';
import icon4 from '../../../public/images/home/feature_icon4.png';
import propti from '../../../public/images/home/property.png';
import big from '../../../public/images/home/big_picture.png';
import small from '../../../public/images/home/small_pic.png'
import slide1 from '../../../public/images/home/slide1.png';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Homepage() {
    const [property, setProperty] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
        document.body.style.overflow = 'hidden';  // Disable scrolling
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';  // Enable scrolling
    };

    const handleChange = (event) => {
        setProperty(event.target.value);
    };
    const [searchOption, setsearchoption] = useState(0)
    const [item, setItem] = useState(0);

    const properties = Array(6).fill(null);

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
                                        <li className="option" onClick={() => { setsearchoption(0) }} >Sell</li>
                                        <li className="option" onClick={() => { setsearchoption(1) }} >Rent</li>
                                    </ul>
                                    <div className="search_bar">
                                        <div className="left">
                                            <Villa />
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                <Select
                                                    labelId="property_type"
                                                    value={property}
                                                    id="propety_type"
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    MenuProps={{
                                                        PaperProps: {
                                                            sx: {
                                                                maxHeight: 'none',
                                                                overflowY: 'hidden',
                                                            },
                                                        },
                                                        onClose: handleMenuClose,
                                                        onOpen: handleMenuOpen,
                                                    }}

                                                    renderValue={(selected) => {
                                                        if (selected.length === 0) {
                                                            return <span style={{ color: '#888' }}>Property type</span>;
                                                        }
                                                        return selected;
                                                    }}
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    // MenuProps={{
                                                    //     PaperProps: {
                                                    //         sx: {
                                                    //             maxHeight: 'none',
                                                    //             overflowY: 'hidden',
                                                    //             overflow: 'hidden'
                                                    //         },
                                                    //     },
                                                    // }}

                                                    sx={{
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            border: 'none',
                                                        },
                                                        '& .MuiSelect-select': {
                                                            paddingTop: 1,
                                                            paddingBottom: 1,
                                                            paddingLeft: 1,
                                                            paddingRight: 1,
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <span style={{ color: '#888' }}>None</span>
                                                    </MenuItem>
                                                    <MenuItem value="Villa">Villa</MenuItem>
                                                    <MenuItem value="Apartment">Apartment</MenuItem>
                                                    <MenuItem value="Office">Office</MenuItem>
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
                                        </div>
                                    </div>

                                    {/* {searchOption == 0 ? 
                                    <div className="search_bar">
                                        <Villa />
                                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                                            <Select
                                                labelId="property_type"
                                                value={property}
                                                id="propety_type"
                                                onChange={handleChange}
                                                displayEmpty
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                        return <span style={{ color: '#888' }}>Property type</span>
                                                    }
                                                    return selected;
                                                }}
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '& .MuiSelect-select': {
                                                        paddingTop: 1,
                                                        paddingBottom: 1,
                                                        paddingLeft: 1,
                                                        paddingRight: 1
                                                    },

                                                }}
                                            >
                                                <MenuItem value="" >
                                                    <span style={{ color: '#888' }}>None</span>
                                                </MenuItem>
                                                <MenuItem value={"Villa"}>Villa</MenuItem>
                                                <MenuItem value={"Apartment"}>Apartment</MenuItem>
                                                <MenuItem value={"Office"}>Office</MenuItem>
                                            </Select>
                                        </FormControl>
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
                                    </div> : ""} */}
                                    {/* {searchOption == 1 ? <div className="search_bar">
                                        <Villa />
                                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                                            <Select
                                                labelId="property_type"
                                                value={property}
                                                id="propety_type"
                                                onChange={handleChange}
                                                displayEmpty
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                        return <span style={{ color: '#888' }}>Property type</span>
                                                    }
                                                    return selected;
                                                }}
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '& .MuiSelect-select': {
                                                        paddingTop: 1,
                                                        paddingBottom: 1,
                                                        paddingLeft: 1,
                                                        paddingRight: 1
                                                    },

                                                }}
                                            >
                                                <MenuItem value="" >
                                                    <span style={{ color: '#888' }}>None</span>
                                                </MenuItem>
                                                <MenuItem value={"Villa"}>Villa</MenuItem>
                                                <MenuItem value={"Apartment"}>Apartment</MenuItem>
                                                <MenuItem value={"Office"}>Office</MenuItem>
                                            </Select>
                                        </FormControl>
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
                                    </div> : ""} */}
                                </form>
                            </div>
                            <div className="house">
                                <Image
                                    src={house}
                                    alt="hello"
                                    priority
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
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Typography variant="h4">The new way to find your new home</Typography>
                                        <Typography variant="h6">Find your dream place to live in with more than 10k+ properties listed.</Typography>
                                        <Button className="browse">
                                            <Typography>
                                                Browse Properties
                                            </Typography>
                                        </Button>
                                        <div className="images">
                                            <Image
                                                src={house2}
                                                alt="our features"
                                                priority
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Grid container spacing={7} marginTop={1}>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon1}
                                                        alt="1."
                                                        priority
                                                    />
                                                </div>
                                                <Typography variant="h5">Property Insurance</Typography>
                                                <Typography variant="h6">
                                                    We offer our customer property protection
                                                    of liability coverage and insurance for their better life.
                                                </Typography>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon2}
                                                        alt="2."
                                                        priority
                                                    />
                                                </div>
                                                <Typography variant="h5">Best Price</Typography>
                                                <Typography variant="h6">
                                                    Not sure what you should be charging for your property?
                                                    No need to worry, let us do the numbers for you.
                                                </Typography>

                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon3}
                                                        alt="1."
                                                        priority
                                                    />
                                                </div>
                                                <Typography variant="h5">Lowest Commission</Typography>
                                                <Typography variant="h6">
                                                    You no longer have to negotiate commissions
                                                    and haggle with other agents it only cost 2%!                                                </Typography>

                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <div className="icons">
                                                    <Image
                                                        src={icon4}
                                                        alt="1."
                                                        priority
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
                                        <li className="list_item" onClick={() => setItem(0)} >All Properties</li>
                                        <li className="list_item" onClick={() => setItem(1)} >Villa</li>
                                        <li className="list_item" onClick={() => setItem(2)} >Apartment</li>
                                        <li className="list_item" onClick={() => setItem(3)} >Office</li>
                                    </ul>
                                    {item == 0 ? <div className="property_grid">
                                        <Grid container rowSpacing={3} >
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div> : ""}
                                    {item == 1 ? <div className="property_grid">
                                        <Grid container rowSpacing={3} >
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div> : ""}
                                    {item == 2 ? <div className="property_grid">
                                        <Grid container rowSpacing={3} >
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div> : ""}
                                    {item == 3 ? <div className="property_grid">
                                        <Grid container rowSpacing={3} >
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                                                <div className="card">
                                                    <div className="featured_image">
                                                        <Image
                                                            src={propti}
                                                            alt="property"
                                                            priority
                                                        />
                                                    </div>
                                                    <ul className="chip_list">
                                                        <li className="chip">for sale</li>
                                                        <li className="chip">for rent</li>
                                                        <li className="chip featured">featured</li>
                                                    </ul>
                                                    <div className="details">
                                                        <h5 className="title">Luxury Famliy Home</h5>
                                                        <div className="address">
                                                            <LocationOnRounded />
                                                            <p>1800-1818 79th St</p>
                                                        </div>
                                                        <ul className="list_feature">
                                                            <li ><HotelOutlined /> 4</li>
                                                            <li ><BathtubTwoTone /> 2</li>
                                                            <li ><FilterNone /> 400</li>
                                                        </ul>
                                                    </div>
                                                    <h5 className="price">$395,000</h5>
                                                </div>
                                            </Grid>
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
                                        centeredSlides={true} // Center the active slide
                                        // initialSlide={1}
                                        navigation={true}
                                        modules={[Pagination, Navigation]}

                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="slide_image">
                                                <Image
                                                    src={slide1}
                                                    alt="image"
                                                    title="..."
                                                    priority={false}
                                                />
                                            </div>
                                        </SwiperSlide>
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
                                <Grid container rowSpacing={2}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="big_picture">
                                            <div className="big_images">
                                                <Image
                                                    src={big}
                                                    alt="image"
                                                    priority
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
                                                    priority
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
                                                    priority
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
                                                    priority
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
                                                    priority
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
                                                    priority
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