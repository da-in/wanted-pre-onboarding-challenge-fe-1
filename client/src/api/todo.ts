import { client } from './client';
import { Todo, TodoParams } from './types';

export async function getTodos() {
    const response = await client.get<{ data: Todo[] }>('/todos');
    return response.data;
}

export async function getTodoById(id: string) {
    const response = await client.post<{ data: Todo }>(`/todos/${id}`);
    return response.data;
}

export async function createTodo(params: TodoParams) {
    const response = await client.post<{ data: Todo }>('/todos', params);
    return response.data;
}

export async function updateTodo(id: string, params: TodoParams) {
    const response = await client.post<{ data: Todo }>(`/todos/${id}`, params);
    return response.data;
}

export async function deleteTodo(id: string) {
    const response = await client.delete<{ data: Todo }>(`/todos/${id}`);
    return response.data;
}
