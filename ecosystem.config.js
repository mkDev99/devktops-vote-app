module.exports = {
    apps: [
        {
            name: 'vote-api',
            script: 'serve -s build -p 3001',
            instances: 2,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
		REACT_APP_API_URL: 'https://nst6cqldr1.execute-api.ap-southeast-1.amazonaws.com'
            },
        },
    ],
};
