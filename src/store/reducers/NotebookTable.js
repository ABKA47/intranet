import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    addNotebookTable: {
        notebookID: {
            elementType: 'label',
            elementConfig: {
                type: 'text'
            },
            value:'',
        },
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
    updateNotebookTable: {
        notebookID: {
            elementType: 'label',
            elementConfig: {
                type: 'text'
            },
            value:'',
        },
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
    notebookListFilter: [],
    notebookListModal: [],
    show: false
}

const notebookOpenModal = (state, action) => {
    let modalNotebook = state.notebookList.filter(notebookList => notebookList.notebookID === action.NotebookID)
    state.updateNotebookTable.notebookID.value = modalNotebook[0].notebookID
    state.updateNotebookTable.notebookModel.value = modalNotebook[0].notebookModal
    state.updateNotebookTable.notebookSerialNo.value = modalNotebook[0].notebookSerialNo
    state.updateNotebookTable.notebookName.value = modalNotebook[0].notebookName
    state.updateNotebookTable.anyDeskID.value = modalNotebook[0].anydeskID
    state.updateNotebookTable.owner.value = modalNotebook[0].owner
    state.updateNotebookTable.emailOwner.value = modalNotebook[0].ownerMail
    state.updateNotebookTable.emailForOTP.value = modalNotebook[0].ownerOTP
    state.updateNotebookTable.notebookDeliveryDate.value = modalNotebook[0].deliveryDate
    state.updateNotebookTable.notebookStatus.value = modalNotebook[0].notebookStatus
    return updatedObject(state, { notebookListFilter: modalNotebook, show: true })
}

const notebookCloseModal = (state, action) => {
    return updatedObject(state, { show: false })
}

const updateNotebookState = (state, action) => {
    return updatedObject(state, { updateNotebookTable: action.updatedNotebook })
}

const fetchNotebookList = (state, action) => {
    return updatedObject(state, { notebookList: action.NotebookList })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOTEBOOK_OPENMODAL: return notebookOpenModal(state, action)
        case actionTypes.NOTEBOOK_CLOSEMODAL: return notebookCloseModal(state, action)
        case actionTypes.NOTEBOOK_UPDATE_STATE: return updateNotebookState(state, action)
        case actionTypes.FETCHNOTEBOOKLIST: return fetchNotebookList(state, action)
        default: return state
    }
}

export default reducer