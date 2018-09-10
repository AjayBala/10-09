export default function(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case 'LOGIN_VALUES':
            newState = Object.assign({}, state);
            newState.userValues = action.payload;
            return newState;

        case 'GET_EMAILID':
            newState = Object.assign({}, state);
            newState.emailId = action.payload;
            return newState;

        default:
            return state;
    }
}
