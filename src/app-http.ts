import http from 'http';
import fs from 'fs';


const server = http.createServer((request, response) => {
    if (request.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf8');
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(htmlFile);

        return;
    }

    if (request.url?.endsWith('.js')) {
        response.writeHead(200, { 'Content-Type': 'application/javascript' });
    }

    if (request.url?.endsWith('.css')) {
        response.writeHead(200, { 'Content-Type': 'text/css' });
    }

    const responseContent = fs.readFileSync(`./public${request.url}`, 'utf8');
    response.end(responseContent);
})

server.listen(3000, () => {
    console.info('listening on port 3000');
});