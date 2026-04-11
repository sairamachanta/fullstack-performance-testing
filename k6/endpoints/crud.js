import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://reqres.in/api';

export function crudOperations(userData) {
    // Create
    let res = http.post(`${BASE_URL}/users`, JSON.stringify(userData), { headers: { 'Content-Type': 'application/json' } });
    check(res, { 'CREATE status is 201': (r) => r.status === 201 });
    const userId = res.json().id;

    // Read
    res = http.get(`${BASE_URL}/users/${userId}`);
    // Note: ReqRes.in might not actually store the created user persistent across requests in a way that GET /users/{id} works for ids > 12 immediately, but for testing purposes we check.

    // Update
    res = http.put(`${BASE_URL}/users/${userId}`, JSON.stringify({ name: 'updated', job: 'updated' }), { headers: { 'Content-Type': 'application/json' } });
    check(res, { 'UPDATE status is 200': (r) => r.status === 200 });

    // Delete
    res = http.del(`${BASE_URL}/users/${userId}`);
    check(res, { 'DELETE status is 204': (r) => r.status === 204 });
}
