export class CreateTodoDto {
    private constructor(public readonly text: string) { }

    static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {

        const { text } = props;

        if (text === undefined || text === null) return ['The text field is required']
        if (typeof text !== 'string') return ['The text field not is string type']

        return [undefined, new CreateTodoDto(text)];
    }
}