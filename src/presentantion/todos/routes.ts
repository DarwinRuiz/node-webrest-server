import { Router, Request, Response } from "express";
import { TodosController } from "./controller";
import { TodoDataSourceImpl, TodoRepositoryImpl } from "../../infrastructure";



export class TodoRoutes {

    static get routes(): Router {
        const router = Router();

        const datasource = new TodoDataSourceImpl()
        const todoRepository = new TodoRepositoryImpl(datasource);

        const todoscontroller = new TodosController(todoRepository);

        router.get('/', todoscontroller.getTodos);
        router.post('/', todoscontroller.createTodo);
        router.put('/:id', todoscontroller.updateTodo);
        router.delete('/:id', todoscontroller.deleteTodo);
        router.get('/:id', todoscontroller.getTodoById);

        return router;
    }
}