import { sleep } from 'k6';
import { getUsers } from '../endpoints/users.js';
import { login } from '../endpoints/auth.js';
import { thresholds } from '../thresholds/thresholds.config.js';
import { testData } from '../utils/testData.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    stages: [
        { duration: '2m', target: 50 },  // Normal load
        { duration: '3m', target: 100 }, // Scaling up
        { duration: '2m', target: 200 }, // Stress point
        { duration: '2m', target: 0 },   // Ramp down
    ],
    thresholds: {
        ...thresholds,
        // Stress test might allow slightly higher response times
        'http_req_duration': ['p(95)<2000'],
    },
};

export default function () {
    getUsers();
    sleep(1);
    login(testData.users[0].email, testData.users[0].password);
    sleep(1);
}

export function handleSummary(data) {
    return {
        "reports/k6/stress-test-summary.html": htmlReport(data),
    };
}
