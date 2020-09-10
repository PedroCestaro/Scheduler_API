import express from 'express';
import NewUser from './controllers/NewUser';

const routes = express.Router(); 
const newUser = new NewUser();



routes.post("/newUser", newUser.create);
routes.get("/newUser",newUser.index);


export default routes;