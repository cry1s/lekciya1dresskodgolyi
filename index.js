const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

const app = express();

app.use(express.json());


app.use(cors({
    allowedOrigin: 'http://localhost:3006' // port of react app
}));
app.use(router);

app.listen(3000, () => {
    console.log('Server running on port 3000'); // port of node app
}
);
