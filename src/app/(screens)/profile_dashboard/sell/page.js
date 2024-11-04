'use client';
import { Container, Grid, MenuItem, Select, TextField, FormControl, FormLabel, Button, Typography, IconButton } from "@mui/material";
import Sidebar from "../../../components/sell_sidebar";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../../../../../public/sass//pages/sell_add.scss';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Close } from "@mui/icons-material";
import { getApi, postApi } from '../../../../helpers/General'

export default function Addproperty() {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [imageNames, setImageNames] = useState([]);

    const handleChange = async (event) => {
        const files = Array.from(event.target.files);
        const base64Files = await Promise.all(files.map(file => getBase64(file)));
        for (let i = 0; i < files.length; i++) {
            let response = await postApi('image/upload', {
                image: base64Files[i], 
                folder_name: 'properties_image'
            });
    
            if (response && response.fileName) { 
                setImageNames(prevNames => ({   
                    ...prevNames,
                    [response.fileName]: files[i].name 
                }));
            }
            console.log("response",response);
        }
    }

    const handleRemoveImage = async (name) => {
        let _name = `C:/NodeJS/realEstate_server/uploads/properties_image/${name}`;
        let response = await postApi('image/delete', { image:_name });
        if(response.status){
            setImageNames(prevNames => {
                const updatedNames = { ...prevNames };  
                delete updatedNames[name]; 
                return updatedNames;  
            });
            console.log('image_deleted');
        }
        else{
            console.log("error in deleting image");
        }
    };

    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })

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
    const [category, setCategory] = useState([]);
    const getData = async () => {
        let resp = await getApi('category');
        if (resp && resp.status) {
            let { data } = resp;
            if (data && data.data) {
                setCategory(data.data);
            }
        }
    }
    useEffect(() => {
        getData();
    }, [])
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
                                                {category.map((item, index) => (
                                                    <li className={`list_item ${click === index ? 'active' : ''}`} onClick={() => setClick(click === index ? null : index)} key={index}>
                                                        <div className="property_item">
                                                            <div className="property_image">
                                                                <Image
                                                                    src={(click == index ? item.icon[1] : item.icon[0])}
                                                                    alt="1."
                                                                    width={100}
                                                                    height={100}
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
                                                    {click == 4 ?
                                                        <>
                                                            <FormLabel>if other please specify</FormLabel>
                                                            <TextField
                                                                size="small"
                                                                id="other"
                                                                name="other"
                                                                placeholder="Eg. room"
                                                                type="text"
                                                                fullWidth
                                                            />
                                                        </>
                                                        : ''
                                                    }
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
                                                {/* <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormLabel>Rent & Deposit</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="rent"
                                                        name="rent"
                                                        placeholder="Enter here"
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid> */}
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6} >
                                                    <FormLabel>City</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="city"
                                                        name="city"
                                                        placeholder="Enter City"
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
                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Button
                                                        component="label"
                                                        role={undefined}
                                                        variant="contained"
                                                        tabIndex={-1}
                                                        startIcon={<CloudUploadIcon />}
                                                    >
                                                        Upload images
                                                        <VisuallyHiddenInput
                                                            type="file"
                                                            onChange={handleChange}
                                                            multiple
                                                        />
                                                    </Button>
                                                    {Object.keys(imageNames).length > 0 && (
                                                        <Typography variant="body2" sx={{ display: 'flex', marginTop: 1 }}>
                                                            {Object.entries(imageNames).map(([key,name]) => (
                                                                <span key={key} style={{ display: 'flex', alignItems: 'center', margin: '4px 0' }}>
                                                                    {name}
                                                                    <IconButton
                                                                        size="small"
                                                                        onClick={() => handleRemoveImage(key)}
                                                                        sx={{ marginLeft: 1 }}
                                                                    >
                                                                        <Close />
                                                                    </IconButton>
                                                                </span>
                                                            ))}
                                                        </Typography>
                                                    )}
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