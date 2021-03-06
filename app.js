const http = require('http');

const port = 5050;

const server = http.createServer((req,res) => {
    switch(req.url){
        case '/':
            res.end(`Root URL`);
            break;
        case '/admin':
            res.end(`Admin URL`);
            break;
        case '/user':
            res.end(`User Page`);
            break;
    };
});

server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})

