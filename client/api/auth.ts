import { client } from './client';
import { AuthParams, AuthResponse } from './types';

export async function signUp(params: AuthParams) {
    const response = await client.post<AuthResponse>('/users/create', params);
    return response;
}

export async function login(params: AuthParams) {
    const response = await client.post<AuthResponse>('/users/login', params);
    return response;
}
