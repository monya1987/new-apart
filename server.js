const express = require('express');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT ? process.env.PORT : 3000;

app.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) throw err;
        if (dev) {
            console.log(`> Ready on http://localhost:${port}`)
        }
    })
});