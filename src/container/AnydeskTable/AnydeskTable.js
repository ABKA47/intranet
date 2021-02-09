import React, { Component } from 'react'

class AnydeskTable extends Component {
    render() {
        return (
            <div className="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">AnyDesk ID</th>
                            <th scope="col">UserName</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>160 695 460</td>
                            <td>Pinar Sak</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>809 400 073</td>
                            <td>Micheal Joyce</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>606 765 180</td>
                            <td>Sibel Uzun</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AnydeskTable