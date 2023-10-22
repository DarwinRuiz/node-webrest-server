import { Request, Response } from 'express';

export class TodosController {

    private todos: Record<string, any>[] = [
        { id: 1, text: 'Buy milk', createAt: new Date() },
        { id: 2, text: 'Buy bread', createAt: null },
        { id: 3, text: 'Buy butter', createAt: new Date() },
    ]

    constructor() { }


    public getTodos = (request: Request, response: Response) => {
        return response.json(this.todos)
    }

    public getTodoById = (request: Request, response: Response) => {
        const id: number = +request.params.id

        if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

        const todo = this.todos.find((todo) => todo.id === id)

        if (todo === undefined || todo.length === 0) return response.status(404).json({ error: `TODO with id ${id} not found` });

        return response.status(200).json(todo)
    }


    public createTodo = (request: Request, response: Response) => {
        const todoRequestData: any = request.body;

        if (todoRequestData.text === undefined || todoRequestData.text === null) return response.status(404).json({ error: 'The text field is required' })

        const lastTodo = this.todos.reduce((max, todo) => (todo.id > max.id ? todo : max), this.todos[0]);

        const newTodo = { id: (lastTodo.id + 1), text: todoRequestData.text, createAt: new Date() };

        this.todos.push(newTodo);

        return response.status(201).json(newTodo)
    }


    public updateTodo = (request: Request, response: Response) => {
        const todoRequestData: any = request.body;

        const id: number = +request.params.id

        if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

        const todoUpdate = this.todos.find((todo) => todo.id === id)

        if (todoUpdate === undefined || todoUpdate.length === 0) return response.status(404).json({ error: `TODO with id ${id} not found` });

        if (todoRequestData.text === undefined || todoRequestData.text === null) return response.status(404).json({ error: 'The text field is required' })

        todoUpdate.text = todoRequestData.text;

        this.todos.map((todo) => {
            if (todo.id === id) {
                return todoUpdate;
            }
            return todo;
        })

        return response.status(200).json(todoUpdate);
    }

    public deleteTodo = (request: Request, response: Response) => {
        const id: number = +request.params.id

        if (isNaN(id)) return response.status(400).json({ error: 'Invalid id, the id is not a number' });

        const todo = this.todos.find((todo) => todo.id === id)

        if (todo === undefined || todo.length === 0) return response.status(404).json({ error: `TODO with id ${id} not found` });

        this.todos = this.todos.filter((todo) => todo.id !== id);

        return response.status(200).json(todo)
    }
}