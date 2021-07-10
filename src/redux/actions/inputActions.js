import actionTypes from '../actionTypes'

const inputActions =  {
    setInputTitle : title => ({
        type: actionTypes.SET_INPUT_TITLE,
        title
    }),
    setInputContent: content => ({
        type: actionTypes.SET_INPUT_CONTENT,
        content
    }),
    setInputId: id => ({
        type: actionTypes.SET_INPUT_ID,
        id
    }),
    resetInput: () => ({
        type: actionTypes.RESET_INPUT
    })
}

export default inputActions