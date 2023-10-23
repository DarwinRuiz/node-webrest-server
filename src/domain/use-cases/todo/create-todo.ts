import { TodoDto } from "../../dtos/todos/todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";
import { CreateTodoUseCase } from "../interfaces/todo.interface";


export class CreateTodo implements CreateTodoUseCase {

    constructor(private readonly repository: TodoRepository) { }

    execute(dto: TodoDto): Promise<TodoEntity> {
        return this.repository.create(dto);
    }

}