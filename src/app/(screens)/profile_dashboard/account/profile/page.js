import Sidebar from "@/app/components/sell_sidebar";
import { Button, Container, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import profile from '../../../../../../public/images/sell/profile.png'
import '../../../../../../public/sass/pages/profile.scss';
import Link from "next/link";
import { EditCalendar } from "@mui/icons-material";

export default function Profile() {
    const userData = [
        { label: "First Name", value: "Mehrab" },
        { label: "Last Name", value: "Sunagi" },
        { label: "Email", value: "Mehrunsungai@gmail.com" },
        { label: "Password", value: "dwabfdehbcjd", isPassword: true },
        { label: "Contact Number", value: "4382473829750" },
        { label: "Address", value: "647364 Peter Tower" },
        { label: "City", value: "Tokyo" },
        { label: "State", value: "Japan" },
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
                                                <EditCalendar />
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