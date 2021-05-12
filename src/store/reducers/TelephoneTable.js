import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    telephoneList: [],
    show: false,
}

const allTelephoneList = (state, action) => {
    return updatedObject(state, { telephoneList: action.telephoneList })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHTELEPHONELIST: return allTelephoneList(state, action)
        default: return state
    }
}

export default reducer