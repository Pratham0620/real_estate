'use client'
import { Button, Container, FormControl, FormLabel, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import '../../../../../public/sass/pages/buy_fill.scss'
import { useState } from 'react';
import Link from 'next/link';

export default function Fill() {
    const fields = [
        {
            id: 'first_name',
            label: 'First Name',
        },
        {
            id: 'last_name',
            label: 'Last Name',
        },
        {
            id: 'email',
            label: 'Email',
        },
        {
            id: 'contact_number',
            label: 'Contact number',
        }
    ]
    const [City, setCity] = useState('');

    const handleCitychange = (event) => {
        setCity(event.target.value);
    };
    const cities = ['Mumbai', 'Delhi', 'Bangalore'];

    const [State, setState] = useState('');
    const handleStatechange = (event) => {
        setState(event.target.value)
    }
    const states = ['Maharashtra', 'Delhi', 'Karnataka'];

    return (
        <div className='fill_container'>
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='fill_parent'>
                            <h3>Fill Details</h3>
                            <form>
                                <Grid container columnSpacing={2} rowSpacing={2}>
                                    {fields.map((items, index) => (
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
                                            <div className="input_field">
                                                <FormLabel sx={{ color: 'black', fontWeight: '500' }}>{items.label}</FormLabel>
                                                <TextField
                                                    id={items.id}
                                                    type="text"
                                                    name={items.id}
                                                    size='small'
                                                    placeholder={`Enter Your ${items.label}`}
                                                />
                                            </div>
                                        </Grid>

                                    ))}
                                    {

                                    }
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <FormControl fullWidth>
                                            <FormLabel sx={{
                                                color: 'black', fontWeight: '500'
                                            }}>City</FormLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={City}
                                                placeholder='Enter Your City'
                                                onChange={handleCitychange}
                                                size='small'
                                            >
                                                {cities.map((city, index) => (
                                                    <MenuItem key={index} value={city}>
                                                        {city}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <FormControl fullWidth>
                                            <FormLabel sx={{
                                                color: 'black', fontWeight: '500'
                                            }}>State</FormLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={State}
                                                placeholder='Enter Your State '
                                                onChange={handleStatechange}
                                                size='small'

                                            >
                                                {states.map((state, index) => (
                                                    <MenuItem key={index} value={state}>
                                                        {state}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <div className='btn'>
                                    <Link href='/buy/buy_submitted'>
                                        <Button variant='outlined'>Submit</Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}