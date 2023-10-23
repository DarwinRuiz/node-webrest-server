


export class TodoEntity {

    constructor(public id: number, public text: string, public completeAt?: Date | undefined | null) { }


    get isCompleted() {
        return !!this.completeAt;
    }


    public static fromObject(object: { [key: string]: any }): TodoEntity {
        const { id, text, completeAt } = object;

        if (!id) throw 'Id is required';
        if (!text) throw 'Text is required';

        if (completeAt) {
            const newCompleteAt = new Date(completeAt)

            if (isNaN(newCompleteAt.getTime())) throw 'CompleteAt is not a valid Date';

            return new TodoEntity(id, text, newCompleteAt);
        }

        return new TodoEntity(id, text);
    }
}