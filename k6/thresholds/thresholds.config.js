export const thresholds = {
    http_req_duration: ['avg<500', 'p(95)<1000', 'p(99)<2000'], // Avg < 500ms, p95 < 1s, p99 < 2s
    http_req_failed: ['rate<0.01'],                           // error rate < 1%
    http_reqs: ['rate>10'],                                   // RPS target (10 is a demo value)
};
