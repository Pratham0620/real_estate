'use client'
import { Home, Search, Villa } from "@mui/icons-material";
import { Button, Container, FormControl, Grid, Input, InputAdornment, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
import '../../../public/sass/pages/homepage.scss';
import { useState } from "react";
import Image from "next/image";
import house from '../../../public/images/homesearch.svg';
import house2 from '../../../public/images/contact2.png';
import icon1 from '../../../public/images/feature_icon1.png';
import icon2 from '../../../public/images/feature_icon2.png';
import icon3 from '../../../public/images/feature_icon3.png';
import icon4 from '../../../public/images/feature_icon4.png';


export default function Homepage() {
    const [property, setProperty] = useState('');

    const handleChange = (event) => {
        setProperty(event.target.value);
    };

    const MenuProps = {
        PaperProps: {
          style: {
 // Adjust this value as needed
            width: 150,
          },
        },
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      };

    // const [item, setItem] = useState(0);

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
                                                MenuProps={MenuProps}
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
                                                <MenuItem value={"Bungalow"}>Bunglow</MenuItem>
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
                                    </div>
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
                                        <Grid container  spacing={7} marginTop={1}>
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
            <div className=""></div>

        </div>
    )
}
{/* <div className="tab_main">
                                        <ul>
                                            <li onClick={()=>setItem(0)}></li>
                                            <li onClick={()=>setItem(1)}></li>
                                        </ul>
                                        {item == 0?<div>

                                        </div>:""}
                                        {item == 1?<div>

                                        </div>:""}
                                    </div> */}