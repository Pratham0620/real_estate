
import { Avatar, Button, Container, Divider, Grid } from '@mui/material';
import '../../../../public/sass/pages/aboutUs.scss';
import Image from 'next/image';
import overview from '../../../../public/images/about/about1.png'
import rhombus from '../../../../public/images/about/component.png'
import vision from '../../../../public/images/about/vision.png'
import { Star } from '@mui/icons-material';
import avatar from '../../../../public/images/about/avatar.png'
import svg from '../../../../public/images/about/svg.png'
import avatar2 from '../../../../public/images/about/avatar2.png'
import avatar3 from '../../../../public/images/about/avatar3.png'
import sponser1 from '../../../../public/images/about/sponser1.jpeg'
import sponser2 from '../../../../public/images/about/sponser2.png'
import sponser3 from '../../../../public/images/about/sponser3.png'
import sponser4 from '../../../../public/images/about/sponser4.png'
import sponser5 from '../../../../public/images/about/sponser5.png'
import sponser6 from '../../../../public/images/about/sponser6.png'
import sponser7 from '../../../../public/images/about/sponser7.png'
import sponser8 from '../../../../public/images/about/sponser8.png'
import sponser9 from '../../../../public/images/about/sponser9.png'
import sponser10 from '../../../../public/images/about/sponser10.jpg'
export default function About() {
    const stars = Array(5).fill(0);
    return (
        <div className='about_container'>
            <div className='overview'>
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='inner_parent'>
                                <Grid container>
                                    <Grid item xl={6} lg={6} md={6} sm={5} xs={12} >
                                        <div className='image'>
                                            <Image
                                                src={overview}
                                                alt='Overview'
                                                
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={7} xs={12}>
                                        <div className='detail'>
                                            <div className='header'>
                                                <Image
                                                    src={rhombus}
                                                    alt='*'
                                                    
                                                />
                                                <h5 className='about'>About us</h5>
                                            </div>
                                            <h4 className='heading'>Our Company Overview</h4>
                                            <h6 className='description'>
                                                We are a real estate company that specializes in developing and managing large
                                                A-class properties in the Baltics. Each and every real estate development being
                                                a reflection of our commitment to excellence – from analysis to design, from
                                                architecture to execution.
                                            </h6>
                                            <Button href='#C1'>Our Partners</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='vision-ethics'>
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='inner_parent'>
                                <Grid container rowSpacing={4}>
                                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        <div className='vision'>
                                            <div className='superset'>
                                                <div className='image'>
                                                    <Image
                                                        src={vision}
                                                        alt='__'
                                                        
                                                    />
                                                </div>
                                                <h4 className='head'>Vision</h4>
                                            </div>
                                            <h6 className='description'>
                                                “Lorem ipsum dolor sit amet consectetur.
                                                Sed id ultrices phasellus molestie. Posuere molestie”
                                            </h6>
                                            <h6 className='description'>
                                                <br />Lorem ipsum dolor sit amet consectetur. Sed id ultrices phasellus
                                                molestie. Posuere molestie eleifend laoreet nisi porttitor et porttitor
                                                rhoncus sed. Et vitae eu orci neque nibh. Laoreet ut nisl massa ut dis
                                                leo nulla nisl sollicitudin. Cras at suscipit sit at gravida. Felis donec
                                                risus velit dolor in gravida vitae.
                                            </h6>
                                        </div>
                                    </Grid>
                                     <Grid item xl={2} lg={2} md={2} sm={0} xs={0} >
                                        <div style={{
                                            height: '100%',
                                            width: '2px',
                                            backgroundColor: 'white', // Change the color as needed
                                            margin: '0 auto' // Adjust spacing around the line
                                        }} />
                                    </Grid> 
                                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12} >
                                        <div className='ethics'>
                                            <div className='superset'>
                                                <div className='image'>
                                                    <Image
                                                        src={vision}
                                                        alt='__'
                                                        
                                                    />
                                                </div>
                                                <h4 className='head'>Ethics</h4>
                                            </div>
                                            <h6 className='description'>
                                                “Lorem ipsum dolor sit amet consectetur.
                                                Sed id ultrices phasellus molestie. Posuere molestie”
                                            </h6>
                                            <h6 className='description'>
                                                <br />Lorem ipsum dolor sit amet consectetur. Sed id ultrices phasellus
                                                molestie. Posuere molestie eleifend laoreet nisi porttitor et porttitor
                                                rhoncus sed. Et vitae eu orci neque nibh. Laoreet ut nisl massa ut dis
                                                leo nulla nisl sollicitudin. Cras at suscipit sit at gravida. Felis donec
                                                risus velit dolor in gravida vitae.
                                            </h6>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='partner'>
                <Container>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='inner_parent'>
                                <div className='reviews'>
                                    <div className='head'>
                                        <div className='statement'>What our customers are
                                            saying us?</div>
                                        <div className='likes'>
                                            <ul>
                                                <li className='heading'><h5>10m+</h5></li>
                                                <li className='info'>Happy people</li>
                                            </ul>
                                            <ul>
                                                <li className='heading'><h5>4.88</h5></li>
                                                <li className='info'>overall rating</li>
                                                <li>{stars.map((_, index) => (
                                                    <Star key={index} style={{ color: 'yellow', marginRight: '4px' }} />
                                                ))}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='comments'>
                                        <Grid container columnSpacing={3} rowSpacing={4}>
                                            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
                                                <div className='main_body'>
                                                    <div className='heads'>
                                                        <div className='profile'>
                                                            <div className='avatar'>
                                                                <Image
                                                                    src={avatar}
                                                                    alt='C'
                                                                    
                                                                />
                                                            </div>
                                                            <div className='name'>
                                                                <p>Cameron Williamson </p>
                                                                <p className='role'>Designer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='pera'>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Ultricies ipsum scelerisque orci id et.
                                                        Venenatis elit sagittis dictumst mattis.
                                                        Vestibulum mauris lacinia libero nunc lorem
                                                        nec orci bibendum laoreet. Tortor interdum
                                                        sit neque praesent in sit tristique.
                                                    </div>
                                                    <div className='quote'>
                                                        <Image
                                                            src={svg}
                                                            alt='o'
                                                            
                                                        />
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
                                                <div className='main_body'>
                                                    <div className='heads'>
                                                        <div className='profile'>
                                                            <div className='avatar'>
                                                                <Image
                                                                    src={avatar2}
                                                                    alt='C'
                                                                    
                                                                />
                                                            </div>
                                                            <div className='name'>
                                                                <p>Esther Hawking </p>
                                                                <p className='role'>Marketing</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='pera'>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Ultricies ipsum scelerisque orci id et.
                                                        Venenatis elit sagittis dictumst mattis.
                                                        Vestibulum mauris lacinia libero nunc lorem
                                                        nec orci bibendum laoreet. Tortor interdum
                                                        sit neque praesent in sit tristique.
                                                    </div>
                                                    <div className='quote'>
                                                        <Image
                                                            src={svg}
                                                            alt=''
                                                            
                                                        />
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} >
                                                <div className='main_body'>
                                                    <div className='heads'>
                                                        <div className='profile'>
                                                            <div className='avatar'>
                                                                <Image
                                                                    src={avatar3}
                                                                    alt='C'
                                                                    
                                                                />
                                                            </div>
                                                            <div className='name'>
                                                                <p>Dane Wilson</p>
                                                                <p className='role'>Developer</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='pera'>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Ultricies ipsum scelerisque orci id et.
                                                        Venenatis elit sagittis dictumst mattis.
                                                        Vestibulum mauris lacinia libero nunc lorem
                                                        nec orci bibendum laoreet. Tortor interdum
                                                        sit neque praesent in sit tristique.
                                                    </div>
                                                    <div className='quote'>
                                                        <Image
                                                            src={svg}
                                                            alt='o'
                                                            
                                                        />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className='support'>
                                    <div id='C1' className='headings'>
                                        Support
                                    </div>
                                    <Grid container rowSpacing={3}>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser1}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser2}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser3}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser4}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser5}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser6}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser10}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser8}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser9}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xl={2} lg={2} md={2} sm={3} xs={4}>
                                            <div className='sponser'>
                                                <Image
                                                    src={sponser7}
                                                    alt=''
                                                    
                                                />
                                            </div>
                                        </Grid>

                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}