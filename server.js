const express = require('express');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const redirects = [
    { from: '/old-link-1', to: '/new-link-1' },
    { from: '/old-link-2', to: 'https://externalsite.com/new-link-2' },
];

const port = process.env.PORT ? process.env.PORT : 3000;

app.prepare().then(() => {
    const server = express();

    redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
        server[method](from, (req, res) => {
            res.redirect(type, to)
        })
    });

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