import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";
import { GetTodosUseCase } from "../interfaces/todo.interface";


export class GetTodos implements GetTodosUseCase {

    constructor(private readonly repository: TodoRepository) { }

    execute(): Promise<TodoEntity[]> {
        return this.repository.getAll();
    }

}