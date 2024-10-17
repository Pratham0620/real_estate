'use client'
import { Box, Button, Checkbox, Container, Typography, Grid, TextField, FormControl, Select, MenuItem, FormLabel } from "@mui/material";
import '../../../../../public/sass/pages/buy.scss';
import { useEffect, useState } from "react";
import { Favorite, FavoriteBorder, Close, FmdGoodOutlined } from "@mui/icons-material";
import { FormControlLabel, FormGroup, IconButton, Input, Slider } from "@mui/material";
import { } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { getApi } from '../../../../helpers/General';

function valuetext(value) {
    return `${value}`;
}

export default function Buy() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [buy, setBuy] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [value, setValue] = useState([100, 10000]);
    const [category,setCategory]= useState([])
    const avail = ['For Sale' , 'For Rent']
    const [loc, setLoc] = useState('');
    const [minSize, setMin] = useState('');
    const [maxSize, setMax] = useState('');
    const [placeType, setPlaceType] = useState([]);
    const [availability, setAvailability] = useState('');

    const getBuy = async () => {
        let resp = await getApi('property', {
            params: {
                location: loc,
                priceRange:value,
                placeType: placeType,
                availability: availability,
                minSize: minSize,
                maxSize: maxSize
            }
        });
        console.log(resp.data)
        if (resp && resp.status) {
            let { data } = resp;
            if (data && data.data) {
                setBuy(data.data);
            }
        }
    }
    const getCategory = async()=>{
        let resp = await getApi('category');
        if(resp && resp.status){
            let {data} = resp;
            if (data && data.data){
                setCategory(data.data)
            }
        }
    }
    const handlePlaceTypeChange = (e, label) => {
        const checked = e.target.checked;
        if (checked) {
            setPlaceType([...placeType, label]);
        } else {
            setPlaceType(placeType.filter(type => type !== label));
        }
    };
    const handleAvailabilityChange = (e) => {
        setAvailability(e.target.value);
    };
    const handleMinChange = (event) => {
        setMin(event.target.value);
    }
    const handleMaxChange = (event) => {
        setMax(event.target.value);
    }
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
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const marks = [
        {
            value: 100,
            label: `$${valuetext(value[0])}`
        },
        {
            value: 10000,
            label: `$${valuetext(value[1])}`
        }
    ]
    const handleLocChange = (e) => {
        setLoc(e.target.value);
    };
    useEffect(() => {
        getBuy();
    }, [loc, minSize, maxSize, placeType, availability, value])
    useEffect(()=>{
        getCategory();
    },[]);
    // console.log("resp",buy);
    console.log('Fetching properties with filters:', { loc, placeType, maxSize, minSize, availability,value});
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
                                        value={loc}
                                        onChange={handleLocChange}
                                    />

                                </div>
                                <div className="place_type">
                                    <h3 className="heading">Availability</h3>
                                    <FormControl fullWidth>
                                        <Select
                                            size="small"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={availability}
                                            defaultValue={''}
                                            onChange={handleAvailabilityChange}
                                        >
                                            {avail.map((item, index) => (
                                                <MenuItem value={item} key={index}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="place_type">
                                    <h3 className="heading">Type of Place</h3>
                                    <Grid container>
                                        {category.map((label, index) => (
                                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} key={index}>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox
                                                        onChange={(e) => handlePlaceTypeChange(e, label._id)}
                                                        disableRipple
                                                        sx={{
                                                            transition: 'transform 0.1s ease-in-out',
                                                            '&.Mui-checked': {
                                                                // color: purple[300],
                                                                color: 'rgba(24, 69, 182, 1)'
                                                                // color: 'linear-gradient(164.6deg, #9991F4 -16.94%, rgba(224, 222, 247, 0) 124.1%)'

                                                            },
                                                        }}/>}
                                                        label={label.title}
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
                                                onChange={handleMinChange}
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
                                                onChange={handleMaxChange}
                                                sx={{
                                                    paddingLeft: '40px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="results">
                                    <div className="text">
                                        <Typography variant="h4">{buy.length} Results </Typography>
                                        {/* <Typography variant="h6"></Typography> */}
                                    </div>
                                    <div className="filter">
                                        <Button onClick={handleDrawerOpen} className="title" disableRipple>Filter</Button>
                                    </div>
                                </div>
                                <Grid container rowSpacing={3} columnSpacing={2}>
                                    {buy.map((place, index) => (
                                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                                            <div className="card">
                                                <Link href={`/buy/${place.slug}`} passHref>
                                                    <div className="image_div">
                                                        <Image
                                                            src={place.image[0]}
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
                                                        <Link href={`/buy/${place.slug}`} passHref>
                                                            <Typography>{place.type.charAt(0).toUpperCase() + place.type.slice(1)}</Typography>
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