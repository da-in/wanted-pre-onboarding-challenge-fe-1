// auth
export interface AuthResponse {
    message: string;
    token: string;
}

export interface AuthParams {
    email: string;
    password: string;
}

// todos
export interface Todo {
    content: string;
    createdAt: string;
    id: string;
    title: string;
    updatedAt: string;
}

export interface TodoParams {
    title: string;
    content: string;
}

// user
export interface User {
    id: string;
    email: string;
    password: string;
    createdAt: string;
}
