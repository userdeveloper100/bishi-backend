import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// sample route
app.get('/api/ping', (_req, res) => {
    res.send('pong');
});

export default app;
