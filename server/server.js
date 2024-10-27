const path = require('path')
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config({
    path: path.join(process.cwd(), '..', '.env')
});

const corsOptions = {
    origin: [`${process.env.VITE_ORIGIN}:${process.env.VITE_SERVER_PORT}`],
};

app.use(cors(corsOptions));

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.get(process.env.VITE_API_ENDPOINT, async (req, res) => {
    try {
        const data = await fetch(process.env.API_URL, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'x-api-key': process.env.API_KEY,
                'content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        const dataJson = await data.json();
        res.json(dataJson);
    } catch (error) {
        console.log(error);
    }
});

app.listen(process.env.VITE_SERVER_PORT, () => {
    console.log(`Server started on ${ process.env.VITE_ORIGIN }:${ process.env.VITE_SERVER_PORT }`);
});
