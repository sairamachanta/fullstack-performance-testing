import { sleep } from 'k6';
import { getUsers } from '../endpoints/users.js';
import { login } from '../endpoints/auth.js';
import { thresholds } from '../thresholds/thresholds.config.js';
import { testData } from '../utils/testData.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    stages: [
        { duration: '1m', target: 50 }, // Ramp up to 50 VUs
        { duration: '3m', target: 50 }, // Stay at 50 VUs
        { duration: '1m', target: 0 },  // Ramp down to 0 VUs
    ],
    thresholds: thresholds,
};

export default function () {
    getUsers();
    sleep(1);
    login(testData.users[0].email, testData.users[0].password);
    sleep(1);
}

export function handleSummary(data) {
    return {
        "reports/k6/load-test-summary.html": htmlReport(data),
    };
}
