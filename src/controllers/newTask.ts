import {Request,Response}from 'express';
import database from '../database/Connection';


export default class NewTask{
    async create(request: Request, response: Response){
        const {
            name,
            tasks,
            date
        } = request.body

        const db = await database.transaction();

        try{

            const insertTask = await db('task').insert({
                name,
                tasks,
                date
            });

            const id_task =insertTask[0];

            db.commit()

            return response.status(200).send('Cadastro realizado!'),
            console.log('Status 200 - Cadastro efetuado');

        } catch(err){
            await db.rollback();

            console.log('Erro no cadastro: ' + err);

            return response.status(400).json({
                error:"Erro ao cadastrar novo usuário"
            });

        }

    }

    async index(){

    }
}