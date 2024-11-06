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
import { getApi, postApi, validatorMake, foreach } from '../../../../helpers/General'
import { toast } from "react-toastify";

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

    const [click, setClick] = useState('');
    const [property, setProperty] = useState('');
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        getData();
    }, [])

    const [imageNames, setImageNames] = useState([]);

    const defaultvalue = {
        type: '',
        role: '',
        availabilty: '',
        bedrooms: '',
        bathrooms: '',
        floors: '',
        description: '',
        city: '',
        address: '',
        price: '',
        area: '',
        contact_name: '',
        contact_number: '',
        email: '',
        image: [],
        cat_id: '',
    }

    const [formData, setFormData] = useState(defaultvalue);
    const [errors, setErrors] = useState(defaultvalue);

    let handleClick = (index) => {
        setClick(click === index ? null : index)
        if (index == 4) {
            setFormData((prevData) => ({
                ...prevData,
                cat_id: category[index]._id,
                type:''
            }))
        }
        else{
            setFormData((prevData) => ({
                ...prevData,
                cat_id: category[index]._id,
                type: category[index].title
            }))  
        }
    }

    const handleImageChange = async (event) => {
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
                setFormData((prevData) => ({
                    ...prevData,
                    image: [...prevData.image, response.fileName]
                }))
            }
        }
    }

    const handleRemoveImage = async (name) => {
        let _name = `C:/NodeJS/realEstate_server/uploads/properties_image/${name}`;
        let response = await postApi('image/delete', { image: _name });
        if (response.status) {
            setImageNames(prevNames => {
                const updatedNames = { ...prevNames };
                delete updatedNames[name];
                return updatedNames;
            });
            setFormData((prevData) => ({
                ...prevData,
                image: prevData.image.filter(images => images !== name)
            }))
            console.log('image_deleted');
        }
        else {
            console.log("error in deleting image");
        }
    };

    let handleInputChange = (e) => {
        let { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        setErrors((prevData) => ({
            ...prevData,
            [name]: null
        }))
    }

    let handleErrors = (errors) => {
        foreach(errors, (index, item) => {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    [index]: item[0]
                }
            })
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationRules = await validatorMake(formData, {
            "type": 'required',
            "role": 'required',
            "availabilty": 'required',
            "bedrooms": 'required',
            "bathrooms": 'required',
            "floors": 'required',
            "description": 'required',
            "city": 'required',
            "address": 'required',
            "price": 'required',
            "area": 'required',
            "contact_name": 'required',
            "contact_number": 'required|min:10|max:14',
            "email": 'required|email',
            "image": 'required',
            "cat_id": 'required'
        })
        if (!validationRules.fails()) {
            let resp = await postApi('property/add', formData);
            if (resp.status) {
                toast.success(resp.message)
                setFormData(defaultvalue)
                setImageNames([]);
            }
            else {
                if (typeof resp.message == 'object') {
                    handleErrors(resp.message.errors)
                }
                else {
                    toast.error(resp.message)
                }
            }
        }
        else {
            handleErrors(validationRules.errors.errors)
        }
    }

    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })

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
                                <form onSubmit={handleSubmit}>
                                    <div className="form_area">
                                        <div className="top">
                                            <h4>Select Property Types</h4>
                                            <ul className="property_list">
                                                {category.map((item, index) => (
                                                    <li className={`list_item ${click === index ? 'active' : ''}`} onClick={() => handleClick(index)} key={index}>
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
                                                                id="type"
                                                                name="type"
                                                                value={formData.type}
                                                                onChange={handleInputChange}
                                                                placeholder="Eg. PentHouse,Studio,FarmHouse etc."
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
                                                            name="role"
                                                            value={formData.role}
                                                            onChange={handleInputChange}
                                                            error= {!!errors.role}
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
                                                            name="availabilty"
                                                            value={formData.availabilty}
                                                            onChange={handleInputChange}
                                                            error={!!errors.availabilty}
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
                                                            name="bedrooms"
                                                            value={formData.bedrooms}
                                                            onChange={handleInputChange}
                                                            error={!!errors.bedrooms}
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
                                                            name="bathrooms"
                                                            value={formData.bathrooms}
                                                            onChange={handleInputChange}
                                                            error={!!errors.bathrooms}
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
                                                            name="floors"
                                                            value={formData.floors}
                                                            onChange={handleInputChange}
                                                            error={!!errors.floors}
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
                                                        name="description"
                                                        placeholder="Write description and amenties"
                                                        type="text"
                                                        value={formData.description}
                                                        onChange={handleInputChange}
                                                        error={!!errors.description}
                                                        helperText={errors.description ? errors.description :''}
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
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter City"
                                                        error={!!errors.city}
                                                        helperText={errors.city ? errors.city :''}
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
                                                        value={formData.price}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter here"
                                                        error={!!errors.price}
                                                        helperText={errors.price ? errors.price :''}
                                                        type="text"
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <FormLabel>Property Address</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="property"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        placeholder="Adress here"
                                                        type="text"
                                                        error={!!errors.address}
                                                        helperText={errors.address ? errors.address : ''}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <FormLabel>Area</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="area"
                                                        name="area"
                                                        value={formData.area}
                                                        onChange={handleInputChange}
                                                        placeholder="In sq ft"
                                                        error={!!errors.area}
                                                        helperText={errors.area ? errors.area :''}
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
                                                            onChange={handleImageChange}
                                                            multiple
                                                        />
                                                    </Button>
                                                    {Object.keys(imageNames).length > 0 && (
                                                        <Typography variant="body2" sx={{ display: 'flex', marginTop: 1 }}>
                                                            {Object.entries(imageNames).map(([key, name]) => (
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
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                                    <FormLabel>Name</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="name"
                                                        name="contact_name"
                                                        value={formData.contact_name}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter here"
                                                        type="text"
                                                        error={!!errors.contact_name}
                                                        helperText={errors.contact_name ? errors.contact_name :''}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                                    <FormLabel>Contact Number</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="Contact_number"
                                                        name="contact_number"
                                                        value={formData.contact_number}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter here"
                                                        type="text"
                                                        error={!!errors.contact_number}
                                                        helperText={errors.contact_number ? errors.contact_number :''}
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <FormLabel>Email</FormLabel>
                                                    <TextField
                                                        size="small"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Email"
                                                        type="text"
                                                        error={!!errors.email}
                                                        helperText={errors.email ? errors.email :''}
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className="button">
                                            <Link href='/home'>
                                                <Button>Cancel</Button>
                                            </Link>
                                            <Button type="submit">Sell</Button>
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