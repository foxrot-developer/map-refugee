import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Multiselect } from "multiselect-react-dropdown";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '../Shared/TextField';
import logo from '../Assets/images/logo.png';
import { refugee_signup } from '../Store/storeIndex';

function RefugeeRegistration() {

    const history = useNavigate();
    const dispatch = useDispatch();

    const [speakingLanguages, setSpeakingLanguages] = useState('');

    const refugeeValidValues = {
        email: '',
        age: '',
        children: 'yes',
        childNum: '',
        childrenAges: '',
        phone: '',
        country: 'Poland',
        password: '',
        fullName: ''
    };

    const refugeeErrorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        fullName: Yup.string().required('Full name is required'),
        age: Yup.string().required('Age is required'),
        children: Yup.string().required('Field is required'),
        childNum: Yup.string().nullable().notRequired().when('children', {
            is: (value) => value === 'yes',
            then: (rule) => rule.required("Field is required")
        }),
        childrenAges: Yup.string().nullable().notRequired().when('children', {
            is: (value) => value === 'yes',
            then: (rule) => rule.required("Field is required")
        }),
        phone: Yup.string().required('Phone is required'),
        country: Yup.string().required('Country is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be 8 characters')
    });

    const refugeeRegistrationHandler = (data) => {
        data.languages = speakingLanguages;
        dispatch(refugee_signup(data, history));
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
                <h1 className='py-2'>REFUGEE SIGNUP</h1>
            </div>
            <div className='col-xs-12 col-md-6 border rounded p-3 form-section'>
                <div className='form-head'>
                    <h2 className='py-2'>REGISTRATION</h2>
                </div>
                <div className='text-start'>
                    <Formik
                        initialValues={refugeeValidValues}
                        validationSchema={refugeeErrorSchema}
                        onSubmit={refugeeRegistrationHandler}
                    >
                        {(formik) => (
                            <React.Fragment>
                                <Form>
                                    <TextField label='Full Name' name='fullName' type='text' />
                                    <TextField label='Age' name='age' type='text' />
                                    <p>Children</p>
                                    <label htmlFor='children' className='mx-3'>
                                        <Field type='radio' name='children' value='yes' className='me-2' />
                                        Yes
                                    </label>
                                    <label htmlFor='children' className='mb-3'>
                                        <Field type='radio' name='children' value='no' className='me-2' />
                                        No
                                    </label>
                                    <TextField label='If yes, how many?' name='childNum' type='text' />
                                    <TextField label='If yes, ages?' name='childrenAges' type='text' placeholder='E.g 2, 20 etc...' />
                                    <TextField label='Phone' name='phone' type='tel' placeholder='E.g +143265555' />
                                    <TextField label='Email' name='email' type='email' />
                                    <label htmlFor='country'>What country are you going to?</label>
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
                                        REGISTER REFUGEE
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

export default RefugeeRegistration;
