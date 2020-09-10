import express from 'express';
import NewUser from './controllers/NewUser';
import NewTask from './controllers/newTask';


const routes = express.Router(); 
const newUser = new NewUser();
const newTask = new NewTask();


routes.post("/newUser", newUser.create);
routes.get("/newUser",newUser.index);

routes.post('/newTask',newTask.create);
routes.get('/newTask',newTask.index);


export default routes;