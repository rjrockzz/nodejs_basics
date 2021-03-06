const {pbkdf2} = require('crypto');

const start = Date.now();
pbkdf2('password', 'mySecret', 10000, 1000, 'sha256', () => {
    console.log('done', Date.now() - start);
});

console.log('Called first', Date.now() - start);