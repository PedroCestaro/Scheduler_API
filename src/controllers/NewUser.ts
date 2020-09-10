import {Request, Response}from 'express'
import database from '../database/Connection';

 export default class NewItem{ /*criando a classe que controla o db*/
    async create(request: Request, response:Response){

        const {
            name,
            email
        } = request.body; /*estes são os dados que eu preciso no corpo da msg*/
       

        const db = await database.transaction();/*aguarda a conexão com o db*/

        try{
            const insertUserId = await db('user').insert({
                name,
                email
            });

            const user_id = insertUserId[0];

            db.commit();

            return response.status(200).send();
        } catch(err){
            await db.rollback();

            console.log('Erro no cadastro: ' + err);

            return response.status(400).json({
                error:"Erro ao cadastrar novo usuário"
            });

        }
    };



    async index(response: Response, request : Request){
        const usersData =await database('user')
            .select('name','email')
            .from('user')
            
            const {users}=usersData[0] 

            return response.json({users})
    }


    }

  

