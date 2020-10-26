import express from 'express';
import https from 'https';
import url from 'url';
import fs from 'fs';
import next from 'next';
import { DEFAULT_LANGUAGE, pathnameToLanguage } from './util';


const port = parseInt(process.env.PORT || '8000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const nextHandler = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            const parsedUrl = url.parse(req.url, true);
            let { pathname = '' } = parsedUrl;
            const { userLanguage, canonical } = pathnameToLanguage(pathname);

            if (userLanguage !== DEFAULT_LANGUAGE) {
                pathname = canonical;
                app.render(req, res, pathname, { userLanguage, ...parsedUrl.query });
                return;
            }

            nextHandler(req, res);
        });


        if (dev) {
            const credentials = {
                key: fs.readFileSync('certs/localhost-key.pem', 'utf8'),
                cert: fs.readFileSync('certs/localhost.pem', 'utf8'),
            };
            const httpsServer = https.createServer(credentials, server);

            httpsServer.listen(port, () => {
                console.log(`> Ready on port ${port}`);
            });
        } else {
            server.listen(port, () => {
                console.log(`> Ready on port ${port}`);
            });
        }
    });
