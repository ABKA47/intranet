import React, { Component } from 'react'

// Redux Actions
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

// UI
import Input from '../../../components/UI/Input/Input'
import { ToastContainer, toast } from 'react-toastify';

toast.configure()
class NoteBooktableAdd extends Component {

    checkValidation(value, rules) {
        let isValid = true

        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.isMail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isLetter) {
            //const pattern = /^[A-Za-z]+|\O$/;
            const pattern = /^[a-zA-Z\s]*$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const newNotebookAdd = { ...this.props.addNotebookTable }
        const newNotebookID = { ...newNotebookAdd[inputIdentifier] }
        newNotebookID.value = event.target.value
        newNotebookID.valid = this.checkValidation(newNotebookID.value, newNotebookID.validation)
        newNotebookID.touched = true
        newNotebookAdd[inputIdentifier] = newNotebookID
        let formIsValid = true
        for (let inputIdentifier in newNotebookAdd) {
            formIsValid = newNotebookAdd[inputIdentifier].valid && formIsValid
        }
        this.props.onUpdateNotebookAddState(newNotebookAdd, formIsValid)
    }

    formSubmit = (event) => {
        event.preventDefault()
        let newNotebookSent = {}
        for (let key in this.props.addNotebookTable) {
            newNotebookSent[key] = this.props.addNotebookTable[key].value
        }
        this.props.onAddNotebook(newNotebookSent)
    }

    render() {
        let notebookArray = []
        for (let key in this.props.addNotebookTable) {
            notebookArray.push({
                id: key,
                config: this.props.addNotebookTable[key]
            })
        }
        const newNotebook = (
            <form onSubmit={this.formSubmit}>
                {
                    notebookArray.map(newNB => (
                        <div key={newNB.id} className="container m-2">
                            <Input
                                key={newNB.id}
                                elementType={newNB.config.elementType}
                                elementConfig={newNB.config.elementConfig}
                                value={newNB.config.value}
                                invalid={!newNB.config.validation}
                                shouldValidate={newNB.config.validation}
                                touched={newNB.config.touched}
                                placeholder={newNB.config.placeholder}
                                onChange={(event) => this.inputChangedHandler(event, newNB.id)}
                            />
                        </div>
                    ))
                }
                <button
                    onClick={
                        () => toast.success("The Notebook has been added to the list!",
                            {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 8000
                            }
                        )}
                    disabled={!this.props.formIsValid} type="btn" className="container btn btn-primary">SUBMIT</button>
            </form>
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3">{newNotebook}</div>
                    <div className="col-lg-9">
                        <h2>Test test test</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    addNotebookTable: state.notebookTable.addNotebookTable,
    formIsValid: state.notebookTable.formIsValid
})

const mapDispatchToProps = (dispatch) => ({
    onUpdateNotebookAddState: (addNotebook, formIsValid) => dispatch(actions.updateNotebookAddState(addNotebook, formIsValid)),
    onAddNotebook: (notebook) => dispatch(actions.addNotebook(notebook))
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteBooktableAdd)