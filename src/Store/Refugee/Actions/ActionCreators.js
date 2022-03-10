import * as actionTypes from './ActionTypes';
import Axios from '../../../Axios/Axios';
import Toast from '../../../Shared/Toast';
import { handleUserType } from '../../storeIndex';

export const refugee_login = (data, history) => dispatch => {
    Axios.post('refugee/login', data)
        .then(response => {
            dispatch({
                type: actionTypes.REFUGEE_LOGIN,
                payload: response.data
            });
            Toast.success("Refugee login successful");
            history('/registration');
            dispatch(handleUserType('refugee'));
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        })
};

export const refugee_signup = (data, history) => dispatch => {
    Axios.post('refugee/register', data)
        .then(response => {
            Toast.success("Refugee registration successful");
            history('/login')
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};