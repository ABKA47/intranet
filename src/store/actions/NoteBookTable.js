import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const notebookOpenModal = (id) => {
    return {
        type: actionTypes.NOTEBOOK_OPENMODAL,
        NotebookID: id
    }
}

export const notebookCloseModal = () => {
    return {
        type: actionTypes.NOTEBOOK_CLOSEMODAL
    }
}

export const fetchNotebookList = (notebookList) => {
    return {
        type: actionTypes.FETCHNOTEBOOKLIST,
        NotebookList: notebookList
    }
}

