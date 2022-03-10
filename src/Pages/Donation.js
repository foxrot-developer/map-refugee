import React from 'react';

import PageHeader from '../Shared/PageHeader';
import about from '../Assets/images/about.jpg';

const Donation = () => {
    return (
        <React.Fragment>
            <PageHeader>DONATIONS</PageHeader>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-xs-12 col-md-8'>
                        <h3>Donations</h3>
                        <div className='text-start'>
                            <p className='fw-bold'>
                                YOU can help the Ukraine refugees right now
                            </p>
                            <p>
                                There is an immediate urgency to help the Ukraine refugees. Everday there are countless people fleeing the Ukraine to surrounding countries, with nowhere to go. Their lives have been catastrophically upheaved. They have lost their jobs, and were only able to take minimal possessions with them.
                            </p>
                            <p>
                                Welcome Way helps match Ukraine refugees with welcoming, caring hosts in neighboring countries through an easy-to-use online interface. Your donation helps to spread the word of Welcome Way to help refugees to find shelter with caring hosts. In addition, your donation helps to give support to these refugees. 100% of your donation goes to the promotion of this service and also directly to the refugees.
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

export default Donation;
