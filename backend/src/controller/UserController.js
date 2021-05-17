const connection = require('../database/connection');
const crypto = require('crypto');
var data = new Date();

module.exports = {

    async list(req, res){
        const users = await connection('users').select('*');
        return res.json(users); 
    },

    async show(req, res){
        const {id} = req.params;
        const user = await connection('users').where('id', id).select('*');
        return res.json(user); 
    },

    async create(req, res){
        const {name, curse} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const created_at = data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear()
        + ' ' + data.getHours() + ':' + data.getMinutes() + ':'+ data.getSeconds();
        //'9-5-2021 22:10:00';
        await connection('users').insert({
            id,
            name, 
            curse,
            created_at
        })
        return res.json({id})
    },

    async update(req, res){
        const {id} = req.params;
        const {name, curse, created_at} = req.body;
        await connection('users').where('id', id).update({
            id,
            name,
            curse,
            created_at
        })
        //return res.json({id});
        return res.status(204).send(); 
    },

    async delete(req, res){
        const {id} = req.params;
        await connection('users').where('id', id).delete();
        return res.status(204).send(); 
    }
}