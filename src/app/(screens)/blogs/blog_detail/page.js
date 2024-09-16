import { Container, Grid } from '@mui/material';
import '../../../../../public/sass/pages/fullblog.scss';
import { AccountCircle } from '@mui/icons-material';
import Image from 'next/image';
import Blog from '../../../../../public/images/blog/Blog.png';

export default function Fullblog() {
    return (
        <div className='blog_container'>
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent'>
                            <h1>
                                What is apartment? Understand the Difference Between a Flat and an Apartment
                            </h1>
                            <div className='account'>
                                {/* <div className='avatar'> */}
                                <AccountCircle />
                                {/* </div> */}
                                <div className='detail'>
                                    <p >Olivia Rhye</p>
                                    <p >1 Jan 2023</p>
                                </div>
                            </div>
                            <div className='image'>
                                <Image
                                    src={Blog}
                                    alt='blog'
                                    
                                />
                            </div>
                            <h6>
                                Traveling is an enriching experience that opens up new horizons,
                                exposes us to different cultures, and creates memories that last a lifetime.
                                However, traveling can also be stressful and overwhelming, especially if you don't
                                plan and prepare adequately. In this blog article, we'll explore tips and tricks
                                for a memorable journey and how to make the most of your travels.
                            </h6>
                            <h6 >
                                One of the most rewarding aspects of traveling is
                                immersing yourself in the local culture and customs.
                                This includes trying local cuisine, attending cultural events and festivals,
                                and interacting with locals. Learning a few phrases in the local
                                language can also go a long way in making connections and showing respect.
                            </h6>
                            <h5>
                                Research Your Destination
                            </h5>
                            <h6 >
                                Before embarking on your journey, take the time to research your destination.
                                This includes understanding the local culture, customs, and laws, as well as
                                identifying top attractions, restaurants, and accommodations. Doing so will
                                help you navigate your destination with confidence and avoid any cultural faux pas.
                            </h6>
                            <h6 >

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                                Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
                                Viverra adipiscing at in tellus.
                            </h6>
                            <h5>
                                Plan Your Itinerary
                            </h5>
                            <h6 >
                                While it's essential to leave room for spontaneity and unexpected adventures,
                                having a rough itinerary can help you make the most of your time and budget.
                                Identify the must-see sights and experiences and prioritize them according to
                                your interests and preferences. This will help you avoid overscheduling and
                                ensure that you have time to relax and enjoy your journey.
                            </h6>
                            <h6 >

                                While it's essential to leave room for spontaneity and unexpected adventures,
                                having a rough itinerary can help you make the most of your time and budget.
                                Identify the must-see sights and experiences and prioritize them according
                                to your interests and preferences. This will help you avoid overscheduling
                                and ensure that you have time to relax and enjoy your journey.
                            </h6>
                            <div>
                                <ul>
                                    <li> In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                        Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.</li>
                                    <li> In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                        Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.</li>
                                    <li> In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                        Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.</li>
                                </ul>

                                {/* <table>
                                    <thead>

                                        <tr>
                                            <th>Nma of Animal</th>
                                            <th>Food</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Buffalo</td>
                                            <td>Grass</td>
                                        </tr>
                                        <tr>
                                            <td>Tiger</td>
                                            <td>Meat</td>
                                        </tr>
                                        <tr>
                                            <td>Monkey</td>
                                            <td>Banana</td>
                                        </tr>
                                        <tr>
                                            <td>Elephant</td>
                                            <td>SugarCane</td>
                                        </tr>
                                        <tr>
                                            <td>Meena</td>
                                            <td>Chappal</td>
                                        </tr>
                                    </tbody>
                                </table> */}

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}