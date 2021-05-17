import React, { useState, useEffect } from 'react';
import './style.css';
import '../../services/api';
import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';

export default function List(){
    const [users, setUsers] = useState([]); //Array vazio por padrão, populando com a função setUsers
    useEffect(()=>{
        api.get('users/list').then(response =>{
            setUsers(response.data);
        })
    }, []); //recebe a função e o array vazio (para quando inicializar) por parêmetro
    //console.log(users);
    const history = useHistory();

    async function handleDelete(id){
        try{
            await api.delete(`/users/delete/${id}`);
            setUsers(users.filter(user=>user.id != id)); //filtro para cada usuário deletado
        }catch(error){
        alert('Algo de errado não está certo!');
        }
    }
    return (
        <header id="list-container">
            <h1>Lista de Usuários</h1>
            <Link className="button" id="create-link" type="button" onClick={()=>history.push('/users/create')}>Adicionar</Link>
            <ul className="users-list">
                {users.map(user =>(
                    <li key={user.id}>
                        <strong>Nome</strong>
                        <p>{user.name}</p>
                        <strong>Curso</strong>
                        <p>{user.curse}</p>
                        <strong>Criando em</strong>
                        <p>{user.created_at}</p>
                        <div className="actions">
                            <button className="button" type="button" onClick={()=>handleDelete(user.id)}>Deletar</button>
                            <Link className="button" to={`/users/update/${user.id}`}>Alterar</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </header>
    )
}