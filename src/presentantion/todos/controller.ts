import { Request, Response } from 'express';
import { TodoDto } from '../../domain/dtos/todos/todo.dto';
import { TodoRepository } from '../../domain/repositories/todo.repository';
import { CreateTodo, DeleteTodo, GetTodo, GetTodos, UpdateTodo } from '../../domain';
import { ResponseBody } from '../interfaces/response-body.interface';

export class TodosController {


    constructor(private readonly todoRepository: TodoRepository) { }


    public getTodos = (request: Request, response: Response) => {
        new GetTodos(this.todoRepository).execute()
            .then(todos => this.formatResponse(response, 200, 'Request successful', todos))
            .catch(error => this.formatResponse(response, 500, `${error}`));
    }


    public getTodoById = (request: Request, response: Response) => {
        const id: number = +request.params.id

        if (isNaN(id)) return this.formatResponse(response, 400, 'Invalid id, the id is not a number')

        new GetTodo(this.todoRepository).execute(id)
            .then(todo => this.formatResponse(response, 200, 'Request successful', [todo]))
            .catch(error => this.formatResponse(response, 500, `Internal server error: ${error}`));
    }


    public createTodo = (request: Request, response: Response) => {
        const todoRequestData: { [key: string]: any } = request.body;
        if (todoRequestData.text === undefined || todoRequestData.text === null) return this.formatResponse(response, 400, 'The text field is required')

        const [error, createTodoDto] = TodoDto.create(todoRequestData);
        if (error) return response.status(404).json(error)

        new CreateTodo(this.todoRepository).execute(createTodoDto!)
            .then(todo => this.formatResponse(response, 201, 'Created successful', [todo]))
            .catch(error => this.formatResponse(response, 500, `Internal server error: ${error}`));
    }


    public updateTodo = (request: Request, response: Response) => {
        const todoRequestData: { [key: string]: any } = request.body;

        const id: number = +request.params.id

        if (isNaN(id)) return this.formatResponse(response, 400, 'Invalid id, the id is not a number')

        if (todoRequestData.text === undefined || todoRequestData.text === null) return this.formatResponse(response, 400, 'The text field is required')

        new UpdateTodo(this.todoRepository).execute(id, { text: todoRequestData.text })
            .then(todo => this.formatResponse(response, 201, 'Updated successful', [todo]))
            .catch(error => this.formatResponse(response, 500, `Internal server error: ${error}`));
    }


    public deleteTodo = (request: Request, response: Response) => {
        const id: number = +request.params.id
        if (isNaN(id)) return this.formatResponse(response, 400, 'Invalid id, the id is not a number')

        new DeleteTodo(this.todoRepository).execute(id)
            .then(todo => this.formatResponse(response, 200, 'Deleted successful', [todo]))
            .catch(error => this.formatResponse(response, 500, `Internal server error: ${error}`));
    }

    private formatResponse = (response: Response, status: number, message: string, data: { [key: string]: any }[] = []): Response<any, Record<string, any>> => {
        return response.status(status).json({ status, message, data } as ResponseBody)
    }
}