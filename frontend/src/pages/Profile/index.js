import React, {useState, useEffect} from 'react';
import './style.css';
import '../../services/api';
import {Link, useHistory, useParams} from 'react-router-dom';
import api from '../../services/api';

export default function List(){
    const history = useHistory();
    const {id} = useParams();
    const initUser = {
        name: '',
        curse: ''
    }
    const [user, setUser] = useState(initUser); 

    useEffect(()=>{
        if(id){
            api.get(`/users/show/${id}`).then(response=>{
                setUser(...response.data)
            })
        }   
    }, []); 

    function onSubmit(event){
        event.preventDefault(); //Para não recarregar a página
        const method = id ? 'put' : 'post'; //Caso possua id: put. Senão: post
        const url = id? `/users/update/${id}` : `/users/create`;
        api[method](url, user).then(response =>{
            history.push('/users/list');
        })
    }

    function onChange(event){
        const {name, value} = event.target;
        setUser({...user, [name]:value}) //Desestruturação
    }

    return (
        <header id="profile-container">
            <h1>Cadastro</h1>
            <form onSubmit={onSubmit}>
                <strong>Nome</strong>
                <input name="name" onChange={onChange} value={user.name}></input>
                <strong>Curso</strong>
                <input name="curse" onChange={onChange} value={user.curse}></input>
                <div className="actions">
                    <Link className="button" onClick={()=>history.push('/')}>Cancelar</Link>
                    <button className="button" type="submit">Salvar</button>
                </div>
            </form>
        </header>
    )
}