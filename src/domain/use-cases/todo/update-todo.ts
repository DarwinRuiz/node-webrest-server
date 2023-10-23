import { TodoDto } from "../../dtos/todos/todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";
import { UpdateTodoUseCase } from "../interfaces/todo.interface";


export class UpdateTodo implements UpdateTodoUseCase {

    constructor(private readonly repository: TodoRepository) { }

    execute(id: number, dto: TodoDto): Promise<TodoEntity> {
        return this.repository.updateById(id, dto);
    }

}