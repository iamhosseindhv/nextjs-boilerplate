import express from 'express';
import https from 'https';
import fs from 'fs';
import next from 'next';


const port = parseInt(process.env.PORT || '8000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const app = express();

        app.get('*', (req, res) => {
            handle(req, res);
        });


        if (dev) {
            const credentials = {
                key: fs.readFileSync('certs/localhost-key.pem', 'utf8'),
                cert: fs.readFileSync('certs/localhost.pem', 'utf8'),
            };
            const server = https.createServer(credentials, app);

            server.listen(port, () => {
                console.log(`> Ready on port ${port}`);
            });
        } else {
            app.listen(port, () => {
                console.log(`> Ready on port ${port}`);
            });
        }
    });
