import express from 'express';
import dotenv from 'dotenv';

const env = dotenv.config();
if (env.error) {
    throw env.error;
}

const app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(process.env.APP_PORT, () => console.log(`Server running on ${process.env.APP_PORT}`));