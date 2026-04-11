import { sleep } from 'k6';
import { getUsers } from '../endpoints/users.js';
import { thresholds } from '../thresholds/thresholds.config.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
    stages: [
        { duration: '10s', target: 300 }, // Sudden burst
        { duration: '1m', target: 300 },  // Maintain peak
        { duration: '10s', target: 0 },   // Scale down
    ],
    thresholds: thresholds,
};

export default function () {
    getUsers();
    sleep(1);
}

export function handleSummary(data) {
    return {
        "reports/k6/spike-test-summary.html": htmlReport(data),
    };
}
