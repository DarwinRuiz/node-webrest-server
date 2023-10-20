import fs from 'fs';
import http2 from 'http2';


const server = http2.createSecureServer({
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt')
}, (request, response) => {
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

    try {
        const responseContent = fs.readFileSync(`./public${request.url}`, 'utf8');
        response.end(responseContent);
    } catch (error) {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end()
    }
})

server.listen(3000, () => {
    console.info('listening on port 3000');
});