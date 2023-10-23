import { Request, Response } from 'express';
import { TodoDto } from '../../domain/dtos/todos/todo.dto';
import { TodoRepository } from '../../domain/repositories/todo.repository';

export class TodosController {

    constructor(private readonly todoRepository: TodoRepository) { }


    public getTodos = async (request: Request, response: Response) => {
        try {
            const todos = await this.todoRepository.getAll();
            return response.json(todos)
        } catch (error) {
            return response.status(500).json({ error: `${error}` });
        }
    }

    public getTodoById = async (request: Request, response: Response) => {
        try {
            const id: number = +request.params.id

            if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

            const todo = await this.todoRepository.findById(id);

            return response.status(200).json(todo)
        } catch (error) {
            return response.status(500).json({ error: `${error}` });
        }
    }


    public createTodo = async (request: Request, response: Response) => {
        try {
            const todoRequestData: any = request.body;

            const [error, createTodoDto] = TodoDto.create(todoRequestData);

            if (error) return response.status(404).json(error)

            const newTodo = await this.todoRepository.create(createTodoDto!);

            return response.status(201).json(newTodo)
        } catch (error) {
            return response.status(500).json({ error: `${error}` });
        }
    }


    public updateTodo = async (request: Request, response: Response) => {
        try {
            const todoRequestData: any = request.body;

            const id: number = +request.params.id

            if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

            if (todoRequestData.text === undefined || todoRequestData.text === null) return response.status(404).json({ error: 'The text field is required' })

            const todoUpdate = await this.todoRepository.updateById(id, { text: todoRequestData.text });

            return response.status(200).json(todoUpdate);
        } catch (error) {
            return response.status(500).json({ error: `${error}` });
        }
    }

    public deleteTodo = async (request: Request, response: Response) => {
        try {
            const id: number = +request.params.id

            if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

            const todoDelete = await this.todoRepository.deleteById(id);

            return response.status(200).json(todoDelete)
        } catch (error) {
            return response.status(500).json({ error: `${error}` });
        }
    }
}