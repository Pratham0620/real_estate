import Sidebar from "@/app/components/sell_sidebar";
import { Button, Container, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import profile from '../../../../../../public/images/sell/profile.png'
import '../../../../../../public/sass/pages/profile.scss';
import Link from "next/link";
import { EditCalendar } from "@mui/icons-material";

export default function Profile() {
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
                                    <Grid container spacing={2}>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3 >First Name</h3>
                                                <p>Mehrab</p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3 >Last Name</h3>
                                                <p>Sunagi</p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3 >Email</h3>
                                                <p>Mehrunsungai@gmail.com</p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3>Password</h3>
                                                <p typeof="password">dwabfdehbcjd </p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3>Contact Number</h3>
                                                <p>4382473829750</p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3 >Address</h3>
                                                <p>647364 peter tower</p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3 >City</h3>
                                                <p>tokyo</p>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} >
                                            <div className="data">
                                                <h3>State</h3>
                                                <p>Japan</p>
                                            </div>
                                        </Grid>
                                    </Grid>
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