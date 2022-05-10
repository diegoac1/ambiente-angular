const PROXY_CONFIG = [
    {
        context: ['/api/personagens'],
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug',
        //pathRewrite: { '^/api': '' }
    }
];

module.exports = PROXY_CONFIG;