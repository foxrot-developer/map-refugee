import React from 'react';

import PageHeader from '../Shared/PageHeader';
import about from '../Assets/images/about.jpg';

const About = () => {
    return (
        <React.Fragment>
            <PageHeader>ABOUT US</PageHeader>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-xs-12 col-md-8'>
                        <h3>About Welcome Way</h3>
                        <div className='text-start'>
                            <p>
                                Just like you, we have been watching the horrific invasion of Ukraine by Russia as it unfolds everyday. Seeing the mass number of Ukrainians fleeing their homes is hard to watch, and makes us want to do something concrete to help them.
                            </p>
                            <p>
                                Welcome Way is a portal to match Ukraine refugees with caring hosts in different countries. Many of these refugees simply have nowhere to go, and a shelter is less than a friendly place for families, especially with children.
                            </p>
                            <p>
                                We match up refugees with hosts that have available space. Whether the refugees need temporary shelter while they continue their journey, or they need a longer term shelter, we are matching them up.
                            </p>
                            <p>
                                Our secondary goal is to help the refugee families with funding for living. Having been forced out of their homes and jobs, many have little to no funds left. Our goal is to help supplement the refugee families and host families with any excess funds that we raise.
                            </p>
                            <p>
                                We take NO salary or money from this project. All funds are directly used to support this project and the refugees.
                            </p>
                            <p>
                                I would like to give special thanks to Gillzsoft for their support and coding expertise, and also a big thank you to Zohaib J. of SDH for their Geolocation and database assistance.
                            </p>
                            <p>
                                -John Jernigan/One Black Dog Media
                            </p>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <img className='img-fluid' src={about} alt='About' loading='lazy' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;
