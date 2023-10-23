import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";
import { DeleteTodoUseCase } from "../interfaces/todo.interface";


export class DeleteTodo implements DeleteTodoUseCase {

    constructor(private readonly repository: TodoRepository) { }

    execute(id: number): Promise<TodoEntity> {
        return this.repository.deleteById(id);
    }

}