import axios, { AxiosInstance } from 'axios';
// import cookies from 'js-cookie';

const baseURL = 'http://localhost:8080';

export const client: AxiosInstance = axios.create({
    baseURL,
    // headers: {
    //     access_token: cookies.get('access_token'),
    // },
});

export function applyToken(jwt: string) {
    client.defaults.headers.common.Authorization = jwt;
}

export function clearToken() {
    delete client.defaults.headers.common.Authorization;
}
