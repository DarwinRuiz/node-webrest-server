import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";
import { GetTodoUseCase } from "../interfaces/todo.interface";


export class GetTodo implements GetTodoUseCase {

    constructor(private readonly repository: TodoRepository) { }

    execute(id: number): Promise<TodoEntity> {
        return this.repository.findById(id);
    }

}