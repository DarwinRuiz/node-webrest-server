export interface ResponseBody {
    status: number;
    message: string;
    data: { [key: string]: any }[];
}