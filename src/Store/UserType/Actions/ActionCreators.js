export const handleUserType = userType => dispatch => {
    dispatch({
        type: 'USER_TYPE',
        payload: userType
    });
};