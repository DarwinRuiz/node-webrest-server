import { Prisma } from "@prisma/client";
import { prisma } from "../../data/sqlserver";
import { TodoDatasource, TodoDto, TodoEntity } from "../../domain";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class TodoDataSourceImpl implements TodoDatasource {

    private dataClient: Prisma.todoDelegate<DefaultArgs> = prisma.todo;

    async create(todoDto: TodoDto): Promise<TodoEntity> {
        const newTodo = await prisma.todo.create({ data: todoDto! })
        return TodoEntity.fromObject(newTodo);
    }

    async getAll(): Promise<TodoEntity[]> {
        const todosByDatabase = await this.dataClient.findMany();
        return todosByDatabase.map(TodoEntity.fromObject)
    }

    async findById(id: number): Promise<TodoEntity> {
        const todo = await this.dataClient.findFirst({ where: { id: id } })

        if (!todo) throw 'Todo not found';

        return TodoEntity.fromObject(todo);
    }

    async updateById(id: number, todoDto: TodoDto): Promise<TodoEntity> {
        await this.findById(id);

        const todoUpdate = await this.dataClient.update({ data: { text: todoDto.text }, where: { id } })

        return TodoEntity.fromObject(todoUpdate);
    }

    async deleteById(id: number): Promise<TodoEntity> {
        await this.findById(id);

        const todoDelete = await this.dataClient.delete({ where: { id } })

        return TodoEntity.fromObject(todoDelete);
    }

}