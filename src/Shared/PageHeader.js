import React from 'react';

import '../Assets/css/page-header.css';

const PageHeader = props => {
    return (
        <header className='page-header-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='fw-bold'>{props.children}</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;
