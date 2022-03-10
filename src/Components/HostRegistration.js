import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Multiselect } from "multiselect-react-dropdown";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '../Shared/TextField';
import logo from '../Assets/images/logo.png';
import { host_signup } from '../Store/storeIndex';

const HostRegistration = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const [speakingLanguages, setSpeakingLanguages] = useState('');

    const hostValidValues = {
        email: '',
        people: '',
        family: 'yes',
        address: '',
        city: '',
        phone: '',
        country: 'Poland',
        password: '',
        fullName: '',
        rooms: ''
    };

    const hostErrorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        fullName: Yup.string().required('Name is required'),
        people: Yup.string().required('Field is required'),
        family: Yup.string().required('Field is required is required'),
        address: Yup.string().required('Field is required is required'),
        city: Yup.string().required('Field is required is required'),
        phone: Yup.string().required('Phone is required'),
        rooms: Yup.string().required('Field is required'),
        country: Yup.string().required('Country is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be 8 characters')
    });

    const hostRegistrationHandler = (data) => {
        data.languages = speakingLanguages;
        dispatch(host_signup(data, history));
    }

    const options = [
        'Poland',
        'Moldova',
        'Romania',
        'Hungary',
        'Slovakia',
        'Czech Republic'
    ];

    const languagesHandler = (selectedList, selectedItem) => {
        setSpeakingLanguages(JSON.stringify(selectedList));
    }

    const removeLanguageHandler = (selectedList, removedItem) => {
        setSpeakingLanguages(JSON.stringify(selectedList));
    }

    return (
        <div className='row d-flex align-items-center justify-content-center h-100 my-5'>
            <div className='col-xs-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                <img src={logo} alt='Logo' loading='lazy' className='img-fluid' />
                <h1 className='py-2'>HOST SIGNUP</h1>
            </div>
            <div className='col-xs-12 col-md-6 border rounded p-3 form-section'>
                <div className='form-head'>
                    <h2 className='py-2'>REGISTRATION</h2>
                </div>
                <div className='text-start'>
                    <Formik
                        initialValues={hostValidValues}
                        validationSchema={hostErrorSchema}
                        onSubmit={hostRegistrationHandler}
                    >
                        {(formik) => (
                            <React.Fragment>
                                <Form>
                                    <TextField label='Name' name='fullName' type='text' />
                                    <TextField label='Phone' name='phone' type='tel' placeholder='E.g +143265555' />
                                    <TextField label='People in your home' name='people' type='text' />
                                    <TextField label='Email' name='email' type='email' />
                                    <TextField label='Street address' name='address' type='text' />
                                    <TextField label='City' name='city' type='text' />
                                    <p>Will you accept a family with one or more children?</p>
                                    <label htmlFor='family' className='mx-3'>
                                        <Field type='radio' name='family' value='yes' className='me-2' />
                                        Yes
                                    </label>
                                    <label htmlFor='family' className='mb-3'>
                                        <Field type='radio' name='family' value='no' className='me-2' />
                                        No
                                    </label>
                                    <TextField label='How many rooms do you have available?' name='rooms' type='text' />
                                    <label htmlFor='country'>Country</label>
                                    <Field as="select" name="country" className='mt-2 mb-3 w-100 py-2'>
                                        <option value="Poland">Poland</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                    </Field>
                                    <label htmlFor='language'>Language(s) that you speak?</label>
                                    <Multiselect showArrow options={options} isObject={false} onSelect={languagesHandler} onRemove={removeLanguageHandler} name='language' />
                                    <TextField label='Password' name='password' type='password' />
                                    <button type='submit' className='btn btn-primary px-5'>
                                        REGISTER HOST
                                    </button>
                                </Form>
                            </React.Fragment>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default HostRegistration;
