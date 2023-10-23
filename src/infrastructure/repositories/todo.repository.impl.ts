import { TodoDatasource, TodoDto, TodoEntity, TodoRepository } from "../../domain";

export class TodoRepositoryImpl implements TodoRepository {


    constructor(private readonly datasource: TodoDatasource) { }


    create(todoDto: TodoDto): Promise<TodoEntity> {
        return this.datasource.create(todoDto);
    }

    getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<TodoEntity> {
        return this.datasource.findById(id);
    }

    updateById(id: number, todoDto: TodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(id, todoDto);
    }

    deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById(id);
    }

}