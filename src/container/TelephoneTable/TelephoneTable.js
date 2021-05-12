import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class TelephoneTable extends Component {
    componentDidMount() {
        this.props.onFetchTelephoneList()
    }

    render() {
        return (
            <div className="container">
                <input
                    type="text"
                    placeholder="Search by Name"
                    className="form-control"
                    style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
                    // onChange={(event) => this.props.onChangeSearchFilter(event.target.value)}
                />
                <table className="table table-hover">
                    <thead style={{ backgroundColor: "#dc6114" }} >
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Extention</th>
                            <th>Direct Line</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.telephoneList.map(tel => (
                                <tr key={tel.telephoneID}>
                                    <td>{tel.telephoneID}</td>
                                    <td>{tel.userName}</td>
                                    <td>{tel.title}</td>
                                    <td>{tel.extention}</td>
                                    <td>{tel.directLine}</td>
                                    <td>{tel.location}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    telephoneList: state.telephoneTable.telephoneList
})

const mapDispatchToProps = dispatch => ({
    onFetchTelephoneList: () => dispatch(actions.fetchTelephoneLists())
})


export default connect(mapStateToProps, mapDispatchToProps)(TelephoneTable)