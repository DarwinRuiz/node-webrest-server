import { Router, Request, Response } from "express";
import { TodosController } from "./controller";



export class TodoRoutes {

    static get routes(): Router {
        const router = Router();
        const todoscontroller = new TodosController();

        router.get('/', todoscontroller.getTodos);
        router.post('/', todoscontroller.createTodo);
        router.put('/:id', todoscontroller.updateTodo);
        router.delete('/:id', todoscontroller.deleteTodo);
        router.get('/:id', todoscontroller.getTodoById);

        return router;
    }
}