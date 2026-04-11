export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function headers() {
    return {
        'Content-Type': 'application/json',
    };
}
