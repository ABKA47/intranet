import React, { Component } from 'react'

// Modal
import Modal from '../../components/UI/Modal/Modal'

// Notebook Modal Component
import NotebookModal from './NotebookModal/NotebookModal'

// Redux Actions
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class NoteBookTable extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Modal show={this.props.show} modalClosed={this.props.onCloseModal}>
                    <NotebookModal />
                </Modal>
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
                            <th scope="row">1</th>
                            <td>Dell Vostro 14</td>
                            <td>7RQR9H2</td>
                            <td>TBUKPC05</td>
                            <td>606 765 180</td>
                            <td>Omer Ayan</td>
                            <td>oayanuk@turkishbank.co.uk</td>
                            <td>oayanuk@turkishbank.co.uk</td>
                            <td>01.05.2017</td>
                            <td>Working</td>
                            <td><button onClick={() => this.props.onOpenModal(1)} type="button" className="btn btn-danger">Edit</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Dell Vostro 14</td>
                            <td>7RQR9H2</td>
                            <td>TBUKPC05</td>
                            <td>606 765 180</td>
                            <td>Omer Ayan</td>
                            <td>oayanuk@turkishbank.co.uk</td>
                            <td>oayanuk@turkishbank.co.uk</td>
                            <td>01.05.2017</td>
                            <td>Working</td>
                            <td><button type="button" className="btn btn-danger">Edit</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Dell Vostro 14</td>
                            <td>7RQR9H2</td>
                            <td>TBUKPC05</td>
                            <td>606 765 180</td>
                            <td>Omer Ayan</td>
                            <td>oayanuk@turkishbank.co.uk</td>
                            <td>oayanuk@turkishbank.co.uk</td>
                            <td>01.05.2017</td>
                            <td>Broken</td>
                            <td><button type="button" className="btn btn-danger">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    show: state.notebookTable.show
})

const mapDispatchToProps = dispatch => ({
    onOpenModal: (id) => dispatch(actions.notebookOpenModal(id)),
    onCloseModal: () => dispatch(actions.notebookCloseModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(NoteBookTable)