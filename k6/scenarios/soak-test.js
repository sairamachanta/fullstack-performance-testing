import { sleep } from 'k6';
import { getUsers } from '../endpoints/users.js';
import { thresholds } from '../thresholds/thresholds.config.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    stages: [
        { duration: '2m', target: 50 },  // Ramp up
        { duration: '26m', target: 50 }, // Sustained heavy load
        { duration: '2m', target: 0 },   // Ramp down
    ],
    thresholds: thresholds,
};

export default function () {
    getUsers();
    sleep(1);
}

export function handleSummary(data) {
    return {
        "reports/k6/soak-test-summary.html": htmlReport(data),
    };
}
