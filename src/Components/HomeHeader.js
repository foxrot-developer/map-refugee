import React from 'react';

import Ukraine from '../Assets/images/ukrain.jpg';
import Mark from '../Assets/images/mark.jpg';
import Flag1 from '../Assets/images/flag1.jpg';
import Flag2 from '../Assets/images/flag2.jpg';
import Flag3 from '../Assets/images/flag3.jpg';
import Flag4 from '../Assets/images/flag4.jpg';
import Flag5 from '../Assets/images/flag5.jpg';
import Flag6 from '../Assets/images/flag6.jpg';

const HomeHeader = () => {
    return (
        <div className='container'>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-xs-12 col-md-2'>
                    <img src={Ukraine} alt="Ukraine" className='img-fluid' loading='lazy' />
                </div>
                <div className='col-xs-12 col-md-2'>
                    <img src={Mark} alt="Mark" className='img-fluid' loading='lazy' />
                </div>
                <div className='col-xs-12 col-md-8'>
                    <img src={Flag1} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                    <img src={Flag2} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                    <img src={Flag3} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                    <img src={Flag4} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                    <img src={Flag5} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                    <img src={Flag6} alt="Mark" className='img-fluid mx-2' loading='lazy' />
                </div>
                <div className='col-12'>
                    <p style={{ color: '#fff' }}>Emergency hosting of refugees by welcoming and caring hosts</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;
