import express from 'express';
import next from 'next';


const port = parseInt(process.env.PORT || '7000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            handle(req, res);
        });

        server.listen(port, () => {
            console.info(`> Ready on port ${port}`);
        });
    });
