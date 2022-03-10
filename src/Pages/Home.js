import React from 'react';
import { useNavigate } from 'react-router-dom';

import HomeHeader from '../Components/HomeHeader';
import '../Assets/css/home.css';

import Form from '../Assets/images/form.png';

const Home = () => {

    const history = useNavigate();

    return (
        <React.Fragment>
            <div className='header-main-section'>
                <HomeHeader />
            </div>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-xs-12 col-md-6'>
                        <div onClick={() => history('/registration')} style={{ cursor: 'pointer' }}>
                            <h3>REFUGEE SIGNUP</h3>
                            <img src={Form} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <div onClick={() => history('/registration')} style={{ cursor: 'pointer' }}>
                            <h3>HOST SIGNUP</h3>
                            <img src={Form} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
