import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import PageHeader from '../Shared/PageHeader';
import about from '../Assets/images/about.jpg';
import TextField from '../Shared/TextField';

const Contact = () => {

    const validValues = {
        fullName: '',
        email: '',
        phone: '',
        subject: ''
    };

    const errorSchema = Yup.object().shape({
        fullName: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        subject: Yup.string().required('Subject is required')
    });

    const contactHandler = (data) => {
        console.log({ data });
    }
    return (
        <React.Fragment>
            <PageHeader>CONTACT US</PageHeader>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-xs-12 col-md-8'>
                        <h3>Contact Form</h3>
                        <div className='text-start'>
                            <Formik
                                initialValues={validValues}
                                validationSchema={errorSchema}
                                onSubmit={contactHandler}
                            >
                                {(formik) => (
                                    <React.Fragment>
                                        <Form>
                                            <TextField label='Full Name' name='fullName' type='text' />
                                            <TextField label='Email' name='email' type='email' />
                                            <TextField label='Phone' name='phone' type='tel' />
                                            <TextField label='Your subject' name='subject' type='text' />
                                            <button type='submit' className='btn btn-primary px-5'>
                                                SUBMIT
                                            </button>
                                        </Form>
                                    </React.Fragment>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <img className='img-fluid mt-3' src={about} alt='About' loading='lazy' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;
