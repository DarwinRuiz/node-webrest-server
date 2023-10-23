import { TodoDto } from "../dtos/todos/todo.dto";
import { TodoEntity } from "../entities/todo.entity";

export abstract class TodoDatasource {

    abstract create(todoDto: TodoDto): Promise<TodoEntity>;

    abstract getAll(): Promise<TodoEntity[]>;

    abstract findById(id: number): Promise<TodoEntity>;

    abstract updateById(id: number, todoDto: TodoDto): Promise<TodoEntity>;

    abstract deleteById(id: number): Promise<TodoEntity>;
}