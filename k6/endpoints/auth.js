import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://reqres.in/api';

export function login(email, password) {
    const payload = JSON.stringify({
        email: email,
        password: password,
    });
    const params = {
        headers: { 'Content-Type': 'application/json' },
    };
    const res = http.post(`${BASE_URL}/login`, payload, params);
    check(res, {
        'POST /login status is 200': (r) => r.status === 200,
        'token is present': (r) => r.json().token !== undefined,
    });
    return res;
}
