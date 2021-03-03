import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    addNotebookTable: {
        notebookModel: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        notebookSerialNo: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        notebookName: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        anyDeskID: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: true,
            touched: false
        },
        owner: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isLetter: true
            },
            valid: true,
            touched: false
        },
        emailOwner: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isMail: true
            },
            valid: true,
            touched: false
        },
        emailForOTP: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true,
                isMail: true
            },
            valid: true,
            touched: false
        },
        notebookDeliveryDate: {
            elementType: 'date',
            elementConfig: {
                type: 'date'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false
        },
        notebookStatus: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'WORKING', displayValue: 'WORKING' },
                    { value: 'BROKEN', displayValue: 'BROKEN' }
                ]
            },
            value: '',
            validation: {},
            valid: true,
        },
    },
    notebookList: [],
    show: false
}

const notebookOpenModal = (state, action) => {
    return updatedObject(state, { show: true })
}

const notebookCloseModal = (state, action) => {
    return updatedObject(state, { show: false })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOTEBOOK_OPENMODAL: return notebookOpenModal(state, action)
        case actionTypes.NOTEBOOK_CLOSEMODAL: return notebookCloseModal(state, action)
        default: return state
    }
}

export default reducer