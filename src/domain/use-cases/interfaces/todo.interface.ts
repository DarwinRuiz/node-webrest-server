import { TodoDto } from "../../dtos/todos/todo.dto";
import { TodoEntity } from "../../entities/todo.entity";

export interface UpdateTodoUseCase {
    execute(id: number, dto: TodoDto): Promise<TodoEntity>
}

export interface CreateTodoUseCase {
    execute(dto: TodoDto): Promise<TodoEntity>
}

export interface GetTodosUseCase {
    execute(): Promise<TodoEntity[]>
}

export interface GetTodoUseCase {
    execute(id: number): Promise<TodoEntity>
}

export interface DeleteTodoUseCase {
    execute(id: number): Promise<TodoEntity>
}