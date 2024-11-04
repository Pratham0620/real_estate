'use client'

import Sidebar from "@/app/components/sell_sidebar";
import { Button, Container, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import profile from '../../../../../../public/images/sell/profile.png'
import '../../../../../../public/sass/pages/profile.scss';
import Link from "next/link";
import { Edit, EditCalendar } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getApi } from "../../../../../helpers/General";

export default function Profile() {
    const [profileData, setProfileData] = useState({});
    
    const getProfileData = async () => {
        let resp = await getApi("user/view");
        if (resp && resp.status){
            let {data} = resp;
            if(data && data.data){
                setProfileData(data.data);
            }
        }
    }

    useEffect(() => {
        getProfileData();
    }, [])

    const userData = [
        { label: "First Name", value: profileData.first_name},
        { label: "Last Name", value: profileData.last_name },
        { label: "Email", value: profileData.email },
        { label: "Password", value: '**********' },
        { label: "Contact Number", value: profileData.phone_number },
        { label: "Address", value: profileData.address },
        { label: "City", value: profileData.city },
        { label: "State", value: profileData.state },
    ];

    return (
        <div className="profile_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="profile_parent">
                            <div className="sidebar">
                                <Sidebar />
                            </div>
                            <div className="profile_right">
                                <form>
                                    <div className='head'>
                                        <div className="profile_photo">
                                            <Image
                                                src={profile}
                                                alt="Hi"
                                            />
                                            <IconButton>
                                                <Edit/>
                                            </IconButton>
                                        </div>
                                        <div className="heading">Profile</div>
                                    </div>
                                    <div className="inputs__">
                                        {userData.map((item, index) => (
                                            <div className="data" key={index}>
                                                <h3>{item.label}</h3>
                                                <p>{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="button">
                                        <Link href='/profile_dashboard/account/edit'>
                                            <Button>
                                                Edit
                                            </Button>
                                        </Link>
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