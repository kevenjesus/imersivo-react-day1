import React, { Component } from 'react';
import Axios from 'axios';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
    }

    componentWillMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({clients: response.data})
            })
            .catch(err => console.log("erro", err));    
    }

    render() {
        return (
        <div>
            <h1>Lista de clientes</h1>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </thead>
                <tbody>
                    {
                        this.state.clients.length === 0 ?
                            <tr>
                                <td colSpan="3">Nenhum dado encontrado</td>
                            </tr> :
                        this.state.clients.map(client => (
                           <tr key={client.id}>
                               <td>{client.name}</td>
                               <td>{client.email}</td>
                               <td>{client.phone}</td>
                           </tr> 
                        ))
                    }
                </tbody>
            </table>
        </div>
        );
    }
}


export default Clients