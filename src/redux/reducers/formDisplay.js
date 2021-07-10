import actionTypes from "../actionTypes";

const formDisplay = (state = false, action) => {
    switch(action.type){
        case actionTypes.SET_FORM_DISPLAY :
            return !state;
        default :
            return state;
    }
}

export default formDisplay