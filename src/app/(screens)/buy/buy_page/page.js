'use client'
import { Box, Button, Checkbox, Container, Typography, Grid, TextField } from "@mui/material";
import '../../../../../public/sass/pages/buy.scss';
import {useEffect, useState } from "react";
import { Favorite, FavoriteBorder,Close, FmdGoodOutlined } from "@mui/icons-material";
import { FormControl, FormControlLabel, FormGroup, IconButton, Input, MenuItem, Select, Slider} from "@mui/material";
import {   } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import buy1 from '../../../../../public/images/buy/buy1.png';
import buy2 from '../../../../../public/images/buy/buy2.png';
import buy3 from '../../../../../public/images/buy/buy3.png';
import buy4 from '../../../../../public/images/buy/buy4.png';
import altimg from '../../../../../public/images/buy/gallery.png';
import {getApi} from '../../../../helpers/General';
function valuetext(value) {
    return `$${value}`;
}

export default function Buy() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [ buy , setBuy] = useState([]);
    const getBuy = async()=>{
        let resp = await getApi('property');
        if (resp && resp.status){
            let {data} = resp;
            if(data && data.data){
                setBuy(data.data);
            }
        }
    }

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';

    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    };

    const types = ['All', 'Shop', 'Office', 'Apartment', 'Family House', 'Modern Villa'];

    const [value, setValue] = useState([0, 10000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const marks = [
        {
            value: 100,
            label: valuetext(value[0])
        },
        {
            value: 10000,
            label: valuetext(value[1])
        }
    ]

    const options = [
        { value: 'Scotland', label: 'Scotland' },
        { value: 'India', label: 'India' },
        { value: 'America', label: 'America' }
    ];

    // const features = ['Ac & Heating', 'Clubhouse', 'Dishwasher', 'Spa', 'Balcony', 'Pool', 'Fitness Centre', 'Valet Parking']

    // const style = ['A-Frame', 'Dome', 'Cottage', 'Spanish']

    const [loc, setloc] = useState('');

    const handleDropChange = (event) => {
        setloc(event.target.value);
    };
    useEffect(()=>{
        getBuy();
    },[])
    console.log("buy",buy);

    return (
        <div className="buy_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="outer_container">
                            <div className={`${drawerOpen === true ? 'open' : 'close'} left`}>
                                <div className="title">
                                    <>Filter</>
                                    <IconButton onClick={handleDrawerClose} >
                                        <Close />
                                    </IconButton>
                                </div>
                                <div className="location">
                                    <h3 className="heading">Location</h3>
                                    <TextField
                                        id="location"
                                        name="location"
                                        type="text"
                                        size="small"
                                        placeholder="Enter Location"
                                        fullWidth
                                    />
                                    {/* <Box>
                                        <FormControl>
                                            <Select
                                                labelId="Location"
                                                value={loc}
                                                id="Loaction"
                                                onChange={handleDropChange}
                                                displayEmpty
                                                renderValue={(selected) => {
                                                    if (selected.length === 0) {
                                                        return <span style={{ color: '#888' }}>Enter Place</span>;
                                                    }
                                                    return <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <FmdGoodOutlined style={{ marginRight: 8, color: "lightgray" }} />
                                                        {selected}
                                                    </div>;
                                                }}

                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '0.5px solid lightgrey',
                                                    },
                                                    '& .MuiSelect-select': {
                                                        paddingTop: 1,
                                                        paddingBottom: 1,
                                                        paddingLeft: 2,
                                                    },
                                                }}
                                            >
                                                {options.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                        sx={{
                                                            backgroundColor: 'whitesmoke !important',
                                                            '&:hover': {
                                                                backgroundColor: '#0e55ab !important',
                                                                color: 'white',
                                                            },
                                                        }}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box> */}
                                </div>
                                <div className="place_type">
                                    <h3 className="heading">Type of Place</h3>
                                    <Grid container >
                                        {types.map((label, index) => (
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} key={index}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox disableRipple
                                                        sx={{
                                                            transition: 'transform 0.1s ease-in-out',
                                                            '&.Mui-checked': {
                                                                // color: purple[300],
                                                                color: 'rgba(24, 69, 182, 1)'
                                                                // color: 'linear-gradient(164.6deg, #9991F4 -16.94%, rgba(224, 222, 247, 0) 124.1%)'

                                                            },
                                                        }} />}
                                                        label={label}
                                                        sx={{
                                                            // '.MuiFormControlLabel-label': {
                                                            //     color: '#000', // default color
                                                            // },
                                                            '.Mui-checked + .MuiFormControlLabel-label': {
                                                                color: 'rgba(24, 69, 182, 1)',
                                                                // color: 'linear-gradient(164.6deg, #9991F4 -16.94%, rgba(224, 222, 247, 0) 124.1%)',
                                                                transform: 'scale(1.06)',
                                                                transition: 'transform 0.1s ease-in-out',
                                                                // color when checkbox is checked
                                                            },
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                                <div className="price_range">
                                    <h3 className="heading">Price range</h3>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Slider
                                            getAriaLabel={() => 'Price range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            min={100}
                                            max={10000}
                                            disableSwap
                                            marks={marks}
                                            sx={{
                                                // color: green[900],
                                                color: 'rgba(24, 69, 182, 1)',
                                                maxWidth: 200,
                                            }}
                                            getAriaValueText={valuetext}
                                        />
                                    </Box>
                                </div>
                                <div className="size">
                                    <h3 className="heading">Size</h3>
                                    <div className="areas">
                                        <div className="min">
                                            <p className="placeholder">Min</p>
                                            <Input
                                                id="min"
                                                name="min"
                                                type="text"
                                                placeholder="sq ft"
                                                disableUnderline
                                                sx={{
                                                    paddingLeft: '40px'
                                                }}

                                            />
                                        </div>
                                        <div className="max">
                                            <p className="placeholder">Max</p>
                                            <Input
                                                id="max"
                                                name="max"
                                                type="text"
                                                placeholder="sq ft"
                                                disableUnderline
                                                sx={{
                                                    paddingLeft: '40px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="features">
                                    <h3 className="heading">Features</h3>
                                    <Grid container>
                                        {features.map((item, index) => (
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} key={index}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox disableRipple
                                                        sx={{
                                                            transition: 'transform 0.1s ease-in-out', // color when checkbox is checked

                                                            '&.Mui-checked': {
                                                                // color: green[900],
                                                                color: 'rgba(24, 69, 182, 1)'

                                                            },
                                                        }} />} label={item}
                                                        sx={{
                                                            // '.MuiFormControlLabel-label': {
                                                            //     color: '#000', // default color
                                                            // },
                                                            '.Mui-checked + .MuiFormControlLabel-label': {
                                                                // color: green[900],
                                                                color: 'rgba(24, 69, 182, 1)',

                                                                transform: 'scale(1.06)',
                                                                transition: 'transform 0.1s ease-in-out',// color when checkbox is checked
                                                            },
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                                <div className="style">
                                    <h3 className="heading">Style</h3>
                                    <Grid container>
                                        {style.map((item, index) => (
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} key={item}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox disableRipple
                                                        sx={{
                                                            transition: 'transform 0.1s ease-in-out', // color when checkbox is checked

                                                            '&.Mui-checked': {
                                                                // color: green[900],
                                                                color: 'rgba(24, 69, 182, 1)',
                                                            },
                                                        }} />} label={item}
                                                        sx={{
                                                            // '.MuiFormControlLabel-label': {
                                                            //     color: '#000', // default color
                                                            // },
                                                            '.Mui-checked + .MuiFormControlLabel-label': {
                                                                // color: green[900],
                                                                color: 'rgba(24, 69, 182, 1)',
                                                                transform: 'scale(1.06)',
                                                                transition: 'transform 0.1s ease-in-out', // color when checkbox is checked
                                                            },
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Grid>

                                        ))}
                                    </Grid>
                                </div> */}
                            </div>
                            <div className="right">
                                <div className="results">
                                    <div className="text">
                                        <Typography variant="h4">398 Results </Typography>
                                        <Typography variant="h6">in Scotland</Typography>
                                    </div>
                                    <div className="filter">
                                        <Button onClick={handleDrawerOpen} className="title" disableRipple>Filter</Button>
                                    </div>
                                </div>
                                <Grid container rowSpacing={3} columnSpacing={2}>
                                    {buy.map((place, index) => (
                                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                                            <div className="card">
                                                <Link href='/buy/buy_detail'>
                                                    <div className="image_div">
                                                        <Image
                                                            src={place.images}
                                                            alt={"Pictures"}
                                                            priority={false}
                                                            loading="lazy"
                                                            width={400}
                                                            height={400}
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="details">
                                                    <div className="title">
                                                        <Link href='/buy/buy_detail'>
                                                            <Typography>{place.type.charAt(0).toUpperCase() + place.type.slice(1) }</Typography>
                                                        </Link>
                                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{
                                                            color: "#d50000",
                                                        }} />}
                                                        />
                                                    </div>
                                                    <div className="city">
                                                        <FmdGoodOutlined />
                                                        {place.city.charAt(0).toUpperCase() + place.city.slice(1)}
                                                    </div>
                                                </div>
                                            </div>
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