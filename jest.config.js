module.exports = {
    rootDir: '.',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    modulePathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/', '/client/']
};
