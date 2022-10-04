import React from 'react';
import "./../css/Teste.css"

class Teste extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        this.setState({linguagens: getUsers()});
    }

    render() {
        let content = <p>Carregando...</p>

        if (this.state.linguagens.length !== 0) {
            content = (<ul>
                {this.state.linguagens.map(item => (
                    <li key={item.id}>
                        <p><b>Nome: </b> {item.name}</p>
                        <p><b>Email: </b> {item.email}</p>
                        <p><b>Password: </b> {item.password}</p>
                    </li>
                ))}
            </ul>)
        }

        return (
            <div>
                <h1>Login</h1>
                <input type="text" id="email"/>
                <button onClick={()=>login()}>Login</button>
                <h1>Lista de Usuários</h1>
                {content}
            </div>
        );
    }
}

function getUsers() {
    var users = [];

    fetch("https://api.baserow.io/api/database/rows/table/103692/?user_field_names=true",
        {
            headers : {
                Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
            }
        })
        .then(res => res.json())
        .then(res => res.results)
        .then(res => users = res)
        .then(res => console.log(res))
        
        console.log("Users: ");
        console.log(users);

        return users;
}

function login(){
    getUsers();
}

export default Teste;