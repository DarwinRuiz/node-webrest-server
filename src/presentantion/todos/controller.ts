import { Request, Response } from 'express';
import { prisma } from '../../data/sqlserver';
import { CreateTodoDto } from '../../domain/dtos/todos/create-todo.dto';

export class TodosController {

    constructor() { }


    public getTodos = async (request: Request, response: Response) => {
        const todos = await prisma.todo.findMany();
        return response.json(todos)
    }

    public getTodoById = async (request: Request, response: Response) => {
        const id: number = +request.params.id

        if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

        const todo = await prisma.todo.findFirst({ where: { id: id } })

        if (todo === undefined || todo === null) return response.status(404).json({ error: `TODO with id ${id} not found` });

        return response.status(200).json(todo)
    }


    public createTodo = async (request: Request, response: Response) => {
        const todoRequestData: any = request.body;

        const [error, createTodoDto] = CreateTodoDto.create(todoRequestData);

        if (error) return response.status(404).json(error)

        const newTodo = await prisma.todo.create({ data: createTodoDto! })

        return response.status(201).json(newTodo)
    }


    public updateTodo = async (request: Request, response: Response) => {
        const todoRequestData: any = request.body;

        const id: number = +request.params.id

        if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

        const todo = await prisma.todo.findFirst({ where: { id: id } })

        if (todo === undefined || todo === null) return response.status(404).json({ error: `TODO with id ${id} not found` });

        if (todoRequestData.text === undefined || todoRequestData.text === null) return response.status(404).json({ error: 'The text field is required' })

        const todoUpdate = await prisma.todo.update({ data: { text: todoRequestData.text }, where: { id } })

        return response.status(200).json(todoUpdate);
    }

    public deleteTodo = async (request: Request, response: Response) => {
        const id: number = +request.params.id

        if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

        const todo = await prisma.todo.findFirst({ where: { id: id } })

        if (todo === undefined || todo === null) return response.status(404).json({ error: `TODO with id ${id} not found` });

        const todoDelete = await prisma.todo.delete({ where: { id } })

        return response.status(200).json(todoDelete)
    }
}