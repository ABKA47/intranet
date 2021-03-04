import React, { Component } from 'react'

// Redux Actions
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

// UI


class NotebookModal extends Component {
    render() {
        let notebookList = (
            <form>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Notebook Model</th>
                            <th scope="col">Serial No</th>
                            <th scope="col">Notebook Name</th>
                            <th scope="col">AnyDesk ID</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Owner Email</th>
                            <th scope="col">Owner Email For OTP</th>
                            <th scope="col">Notebook Delivery Date</th>
                            <th scope="col">Notebook Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            {this.props.notebookListFilter.map(nbList => (
                                <>
                                    <th scope="row">{nbList.notebookID}</th>
                                    <td>{nbList.notebookModal}</td>
                                </>
                            ))
                            }
                            <td><button type="button" className="btn btn-primary">Submit</button></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        )
        return (
            <div>
                {notebookList}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notebookListFilter: state.notebookTable.notebookListFilter,
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps)(NotebookModal)