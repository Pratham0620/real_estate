'use client'
import { Button, Container, FormControl, FormLabel, Grid, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
import profile from '../../../../../../public/images/sell/profile.png';
import { useState } from "react";
import '../../../../../../public/sass/pages/edit.scss';
import Sidebar from "@/app/components/sell_sidebar";

export default function Edit() {
    const [city, setCity] = useState('');
    const cities = ['Ludhiana', 'Patiala', 'Ambala', 'Amritsar'];
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    const [state, setState] = useState('');
    const states = ['Punjab', 'Delhi', 'Uttarkhand', 'Haryana']
    const handleStateChange = (event) => {
        setState(event.target.value)
    }


    return (
        <div className="edit_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="edit_parent">
                            <div className="sidebar">
                                <Sidebar />
                            </div>
                            <div className="edit_right">
                                <form>
                                    <div className='head'>
                                        <div className="profile_photo">
                                            <Image
                                                src={profile}
                                                alt="Hi"
                                            />
                                        </div>
                                            <div className="heading">Edit Profile</div>
                                    </div>
                                    <Grid container spacing={2}>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <FormLabel>First Name</FormLabel>
                                            <TextField
                                                size="small"
                                                id="first_name"
                                                name="first_name"
                                                placeholder="Enter First Name"
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <FormLabel>Last Name</FormLabel>
                                            <TextField
                                                size="small"
                                                id="last_name"
                                                name="last_name"
                                                placeholder='Enter Your Last Name'
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                            <FormLabel>Email</FormLabel>
                                            <TextField
                                                size="small"
                                                id="email"
                                                name="email"
                                                placeholder="Enter Email"
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                            <FormLabel>Address</FormLabel>
                                            <TextField
                                                size="small"
                                                id="address"
                                                name="address"
                                                placeholder="Address here"
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                                            <FormLabel>Contact Number</FormLabel>
                                            <TextField
                                                size="small"
                                                id="contact"
                                                name="contact"
                                                placeholder="Enter Phone Number"
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <FormLabel>City</FormLabel>
                                            <FormControl fullWidth>
                                                <Select
                                                    size="small"
                                                    labelId="city"
                                                    id="city"
                                                    value={city}
                                                    onChange={handleCityChange}
                                                >
                                                    {cities.map((item, index) => (
                                                        <MenuItem value={item} key={index}>{item}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <FormLabel>State</FormLabel>
                                            <FormControl fullWidth>
                                                <Select
                                                    size="small"
                                                    labelId="city"
                                                    id="city"
                                                    value={state}
                                                    onChange={handleStateChange}
                                                >
                                                    {states.map((item, index) => (
                                                        <MenuItem value={item} key={index}>{item}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <FormLabel>Password</FormLabel>
                                            <TextField
                                                size="small"
                                                id="password"
                                                name="password"
                                                placeholder="Enter Password"
                                                type="password"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className="buttons">
                                        <Button>Cancel</Button>
                                        <Button>Save</Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}