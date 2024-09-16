'use client';
import { Container, Grid, MenuItem, Select, TextField, FormControl, FormLabel, Button } from "@mui/material";
import Sidebar from "../../../components/sell_sidebar";
import Image from "next/image";
import '../../../../../public/sass//pages/sell_add.scss';
import type1 from '../../../../../public/images/sell/type1.png';
import type2 from '../../../../../public/images/sell/type2.png';
import type3 from '../../../../../public/images/sell/type3.png';
import type4 from '../../../../../public/images/sell/type4.png';
import type5 from '../../../../../public/images/sell/type5.png';
import typeP1 from '../../../../../public/images/sell/typeP1.png';
import typeP2 from '../../../../../public/images/sell/typeP2.png';
import typeP3 from '../../../../../public/images/sell/typeP3.png';
import typeP4 from '../../../../../public/images/sell/typeP4.png';
import typeP5 from '../../../../../public/images/sell/typeP5.png';

import { useState } from "react";
import Link from "next/link";

export default function Addproperty() {
    const [click, setClick] = useState(null);

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [bed, setBed] = useState('');
    const handleBedchange = (event) => {
        setBed(event.target.value)
    }

    const [bath, setBath] = useState('');
    const handleBathChange = (event) => {
        setBath(event.target.value);
    };

    const [floor, setFloor] = useState('');
    const handleFloorChange = (event) => {
        setFloor(event.target.value);
    };

    const [roles, setRoles] = useState('');
    const handleRoleChange = (event) => {
        setRoles(event.target.value);
    };

    const Property = [
        {
            image1: type1,
            image2: typeP1,
            title: 'Modern Villa'
        },
        {
            image1: type2,
            image2: typeP2,
            title: 'Office'
        },
        {
            image1: type3,
            image2: typeP3,
            title: 'Apartment'
        },
        {
            image1: type4,
            image2: typeP4,
            title: 'Family House'
        },
        {
            image1: type5,
            image2: typeP5,
            title: 'Other'
        }
    ]
    return (
        <div className="add_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="add_parent">
                            <div className="sidebar">
                                <Sidebar />
                            </div>
                            <div className="add_form">
                                <form>
                                    <div className="form_area">
                                        <div className="top">
                                            <h4>Sell Property Types</h4>
                                            <ul className="property_list">
                                                {Property.map((item, index) => (
                                                    <li className={`list_item ${click === index ? 'active' : ''}`} onClick={() => setClick(click === index ? null : index)} key={index}>
                                                        <div className="property_item">
                                                            <div className="property_image">
                                                                <Image
                                                                    src={(click == index ? item.image2 : item.image1)}
                                                                    alt="1."
                                                                />
                                                            </div>
                                                            <h5>{item.title}</h5>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="inputs_field">
                                            <Grid container spacing={2}>
                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                                    <FormLabel>if other please specify</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="other"
                                                        name="other"
                                                        placeholder="Eg. room"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                                    <FormControl fullWidth >
                                                        <FormLabel>Role</FormLabel>
                                                        <Select
                                                            labelId="role-label"
                                                            id="role"
                                                            size="small"
                                                            value={roles}
                                                            onChange={handleRoleChange}
                                                        >
                                                            <MenuItem value={'Owner'}>Owner</MenuItem>
                                                            <MenuItem value={'Agent'}>Agent</MenuItem>
                                                            <MenuItem value={'seller'}>Seller</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormControl fullWidth >
                                                    <FormLabel>Avaialbility</FormLabel>
                                                        <Select
                                                            labelId="role-label"
                                                            id="role"
                                                            size="small"
                                                            value={roles}
                                                            onChange={handleRoleChange}
                                                        >
                                                            <MenuItem value={'For Rent'}>For Rent</MenuItem>
                                                            <MenuItem value={'For Sale'}>For Sale</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    
                                                </Grid>

                                                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
                                                    <FormControl fullWidth>
                                                        <FormLabel>No. of Bedrooms</FormLabel>

                                                        <Select
                                                            size="small"
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={bed}
                                                            onChange={handleBedchange}
                                                        >
                                                            {number.map((item, index) => (
                                                                <MenuItem value={item} key={index}>{item}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
                                                    <FormControl fullWidth>
                                                        <FormLabel>No. of Bathroom</FormLabel>
                                                        <Select
                                                            size="small"
                                                            labelId="bath-label"
                                                            id="bath"
                                                            value={bath}
                                                            onChange={handleBathChange}
                                                        >
                                                            {number.map((item, index) => (
                                                                <MenuItem value={item} key={index}>{item}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
                                                    <FormControl fullWidth>
                                                        <FormLabel>No. of Floor</FormLabel>
                                                        <Select
                                                            size="small"
                                                            labelId="floor-label"
                                                            id="floor"
                                                            value={floor}
                                                            onChange={handleFloorChange}
                                                        >
                                                            {number.map((item, index) => (
                                                                <MenuItem value={item} key={index}>{item}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                                    <FormLabel>Description</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="other"
                                                        name="other"
                                                        placeholder="Write description and amenties"
                                                        type="text"
                                                        fullWidth
                                                        multiline
                                                        minRows={5}
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormLabel>Rent & Deposit</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="rent"
                                                        name="rent"
                                                        placeholder="Enter here"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormLabel>Price</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="price"
                                                        name="price"
                                                        placeholder="Enter here"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>

                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <FormLabel>Property Address</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="property"
                                                        name="property"
                                                        placeholder="Adress here"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <FormLabel>Area</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="area"
                                                        name="area"
                                                        placeholder="Area"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                            <h4>Personal information</h4>
                                            <Grid container spacing={2}>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormLabel>Name</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter here"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormLabel>Contact Number</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="num"
                                                        name="num"
                                                        placeholder="Enter here"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className="button">
                                            <Link href='/home'>
                                                <Button>Cancel</Button>
                                            </Link>
                                            <Button>Sell</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}