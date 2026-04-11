import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://reqres.in/api';

export function getUsers() {
    const res = http.get(`${BASE_URL}/users?page=2`);
    check(res, {
        'GET /users status is 200': (r) => r.status === 200,
    });
    return res;
}
