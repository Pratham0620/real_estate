import { Button, Checkbox, Container, Grid, Typography } from "@mui/material";
import buy1 from '../../../../../public/images/buy/buy1.png';
import buy2 from '../../../../../public/images/buy/buy2.png';
import buy3 from '../../../../../public/images/buy/buy3.png';
import buy4 from '../../../../../public/images/buy/buy4.png';
import altimg from '../../../../../public/images/buy/gallery.png';
import Sidebar from "../../../components/sell_sidebar";
import { Favorite, FavoriteBorder, FmdGoodOutlined } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import '../../../../../public/sass/pages/sell_myproperties.scss';
export default function MyProperty() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    const items = [
        { src: buy1, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy2, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy3, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy4, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy1, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy2, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy3, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy4, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy1, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy2, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy3, alt: altimg, title: 'Modern House', city: 'Scotland' },
        { src: buy4, alt: altimg, title: 'Modern House', city: 'Scotland' },
    ];


    return (
        <div className="myproperty_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="myproperty_parent">
                            <div className="sidebar">
                                <Sidebar/>
                            </div>
                            <div className="myproperty">
                                <div className="results">
                                    <div className="text">
                                        <Typography variant="h4">398 Results </Typography>
                                        <Typography variant="h6">in Scotland</Typography>
                                    </div>
                                </div>
                                <Grid container rowSpacing={3} columnSpacing={2}>
                                    {items.map((place, index) => (
                                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                                            <div className="card">
                                                <Link href={'#'}>
                                                    <div className="image_div">
                                                        <Image
                                                            src={place.src}
                                                            alt={place.alt}
                                                            priority={false}
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="details">
                                                    <div className="title">
                                                        <Link href={'#'}>
                                                            <Typography>{place.title}</Typography>
                                                        </Link>
                                                    </div>
                                                    <div className="city">
                                                        <FmdGoodOutlined />
                                                        {place.city}
                                                    </div>
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