import React, { Component } from 'react'

class NoteBookTable extends Component {
    render() {
        return (
            <div className="container">
                <table class="table table-hover">
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
                            <th scope="col">Who has the notebook?</th>
                            <th scope="col">Notebook Status</th>
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
                            <td>User(Kullanicida Demek)</td>
                            <td>Working(Laptopun Durumu Calisiyor Demek)</td>
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
                            <td>IT</td>
                            <td>Working</td>
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
                            <td>IT(Geri Alindi Demek!)</td>
                            <td>Broken(Laptop Bozulmus Demek)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NoteBookTable