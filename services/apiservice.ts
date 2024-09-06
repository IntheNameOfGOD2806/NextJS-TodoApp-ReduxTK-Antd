import axios from "../utils/axiosCustomize";
const postCreateTodo = (id: string, title: string, completed: boolean) => {


    return axios.post(
        'api/todo/add',
        {
            id: id,
            title: title,
            completed: completed
        }
    );
}
const getTodoById = (id: string) => {
    return axios.get(
        `api/todo?id=${id}`
    );
}
const getTodos = () => {
    return axios.get<ITodo[]>(
        `api/todo/getAll`
    );
}


const deleteTodo = (id: string) => {
    return axios.delete(
        `api/todo/delete?id=${id}`, {

    }
    )
}

export { deleteTodo, getTodoById, postCreateTodo, getTodos };

