import { Button, Checkbox, Container, Grid, Typography } from "@mui/material";
import '../../../../public/sass/pages/liked.scss';
import Link from "next/link";
import Image from "next/image";
import { Favorite, FavoriteBorder, FmdGoodOutlined } from "@mui/icons-material";
import buy1 from '../../../../public/images/buy/buy1.png';
import buy2 from '../../../../public/images/buy/buy2.png';
import buy3 from '../../../../public/images/buy/buy3.png';
import buy4 from '../../../../public/images/buy/buy4.png';
import altimg from '../../../../public/images/buy/gallery.png';

export default function Liked() {
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
        <div className="liked_container">
            <Container>
                <Grid container>
                    <Grid item>
                        <div className="liked_parent">
                            <div className="results">
                                <div className="text">
                                    <Typography variant="h4">398 Results </Typography>
                                </div>
                            </div>
                            <Grid container rowSpacing={3} columnSpacing={2}>
                                {items.map((place, index) => (
                                    <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
                                        <div className="card">
                                            <Link href='/buy/buy_detail'>
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
                                                    <Link href='/buy/buy_detail'>
                                                        <Typography>{place.title}</Typography>
                                                    </Link>
                                                    <Checkbox checked {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{
                                                            color: "#d50000",
                                                        }} />
                                                    }
                                                        />
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}