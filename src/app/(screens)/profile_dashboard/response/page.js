
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import sell1 from '../../../../../public/images/sell/sell1.png';
import sell2 from '../../../../../public/images/sell/sell2.png';
import sell3 from '../../../../../public/images/sell/sell3.png';
import sell4 from '../../../../../public/images/sell/sell4.png';
import sell5 from '../../../../../public/images/sell/sell5.png';
import sell6 from '../../../../../public/images/sell/sell6.png';
import sell7 from '../../../../../public/images/sell/sell7.png';
import sell8 from '../../../../../public/images/sell/sell8.png';
import '../../../../../public/sass/pages/sell_response.scss';
import { Call, EmailOutlined } from "@mui/icons-material";
import Sidebar from "../../../components/sell_sidebar";
export default function Response() {
    const cardData = [
        {
            image: sell1,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell2,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell3,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell4,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell5,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell6,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell7,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
        {
            image: sell8,
            name: 'Rober Fox',
            phone: '(629) 555-0129',
            buyer: '3891 Ranchview Dr. Richardson, California 62639',
            address: '4140 Parker Rd. Allentown, New Mexico 31134',
            property_type: 'Town House'
        },
    ]
    return (
        <div className="response_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="response_parent">
                            <div className="sidebar">
                                <Sidebar/>
                            </div>
                            <div className="all_response">
                                <Grid container columnSpacing={3} rowSpacing={3}>
                                    {cardData.map((item, index) => (
                                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} key={index}>
                                            <div className="response_item">
                                                <div className="head">
                                                    <Grid container columnSpacing={1} alignItems={'center'}>
                                                        <Grid item xl={4.5} lg={4.5} md={4.5} sm={4.5} xs={4.5} >
                                                            <div className="image">
                                                                <Image
                                                                    src={item.image}
                                                                    alt="image"
                                                                />
                                                            </div>
                                                        </Grid>
                                                        <Grid item xl={7.5} lg={7.5} md={7.5} sm={7.5} xs={7.5} >
                                                            <div className="left">
                                                                <h3>{item.name}</h3>
                                                                <div className="contact">
                                                                    <p><Call /><a href={`tel:${item.phone}`}>{item.phone}</a></p>
                                                                    <p><EmailOutlined />{item.buyer}</p>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                                <div className="bottom">
                                                    <div className="address">
                                                        {item.address}
                                                    </div>
                                                    <h5>{item.property_type}</h5>
                                                </div>
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}