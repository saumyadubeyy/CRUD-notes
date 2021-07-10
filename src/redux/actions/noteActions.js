import actionTypes from '../actionTypes'

 const noteActions = {
    addNote: (note) => ({
        type: actionTypes.ADD_NOTE,
        note
    }),
    updateNote: (index, note) => ({
        type: actionTypes.UPDATE_NOTE,
        index,
        note
    }),
    deleteNote: (index) => ({
        type: actionTypes.DELETE_NOTE,
        index
    })

}

export default noteActions
