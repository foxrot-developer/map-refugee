import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TextField from '../Shared/TextField';
import '../Assets/css/login.css';
import logo from '../Assets/images/logo.png';
import { host_login } from '../Store/storeIndex';

const HostLogin = () => {

    const dispatch = useDispatch();
    const history = useNavigate();

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (data) => {
        dispatch(host_login(data, history));
    }

    return (
        <div className='container login'>
            <div className='row d-flex align-items-center justify-content-center h-100'>
                <div className='col-xs-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                    <img src={logo} alt='Logo' loading='lazy' className='img-fluid' />
                    <h1 className='py-2'>HOST LOGIN</h1>
                </div>
                <div className='col-xs-12 col-md-6 border rounded p-3 form-section'>
                    <div className='form-head'>
                        <h2 className='py-2'>LOGIN</h2>
                    </div>
                    <div className='text-start'>
                        <Formik
                            initialValues={validValues}
                            validationSchema={errorSchema}
                            onSubmit={loginHandler}
                        >
                            {(formik) => (
                                <React.Fragment>
                                    <Form>
                                        <TextField label='Email' name='email' type='email' />
                                        <TextField label='Password' name='password' type='password' />
                                        <button type='submit' className='btn btn-primary px-5'>
                                            Login
                                        </button>
                                    </Form>
                                </React.Fragment>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostLogin;
