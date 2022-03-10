import * as actionTypes from './ActionTypes';
import Axios from '../../../Axios/Axios';
import Toast from '../../../Shared/Toast';
import { handleUserType } from '../../storeIndex';

export const host_login = (data, history) => dispatch => {
    Axios.post('host/login', data)
        .then(response => {
            dispatch({
                type: actionTypes.HOST_LOGIN,
                payload: response.data
            });
            Toast.success("Host login successful");
            history('/registration')
            dispatch(handleUserType('host'))
        })
        .catch(error => {
            Toast.error(error.response.data.message)
        })
};

export const host_signup = (data, history) => dispatch => {
    Axios.post('host/register', data)
        .then(response => {
            Toast.success("Host registration successful");
            history('/login')
        })
        .catch(error => {
            Toast.error(error.response.data.message);
        });
};