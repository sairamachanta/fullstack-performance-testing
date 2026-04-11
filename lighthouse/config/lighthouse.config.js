export default {
    ci: {
        collect: {
            url: ['https://reqres.in'],
            numberOfRuns: 3,
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['warn', { minScore: 0.9 }],
                'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
                'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
                'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
                'interactive': ['error', { maxNumericValue: 3800 }],
                'total-blocking-time': ['error', { maxNumericValue: 200 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
