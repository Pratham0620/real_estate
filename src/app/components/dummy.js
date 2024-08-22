'use client'
import { BathroomTwoTone, BathtubTwoTone, Diversity3Outlined, FilterNone, Home, HotelOutlined, LocationOffOutlined, LocationOnOutlined, LocationOnRounded, Search, Villa } from "@mui/icons-material";
import { Button, Container, FormControl, Grid, Input, InputAdornment, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
// import '../../../public/sass/pages/homepage.scss';
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

export default function Dummy() {
    const [age, setage] = useState('');

    const handleChange = (event) => {
        setage(event.target.value);
    };
    const [searchOption, setsearchoption] = useState(0)
    const [item, setItem] = useState(0);

    return (
        <div className="home_container">
             {/* <FormControl sx={{ m: 1, minWidth: 150 }}>
                                                <Select
                                                    labelId="property_type"
                                                    value={property}
                                                    id="propety_type"
                                                    onChange={handleChange}
                                                    displayEmpty
                                            
                                                    renderValue={(selected) => {
                                                        if (selected.length === 0) {
                                                            return <span style={{ color: '#888' }}>Property type</span>;
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
                                            </FormControl> */}

                                            
                                            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          
        </div>
    )
}