const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

const app = express();


app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(router);

app.listen(3000, () => {
    console.log('Server running on port 3000');
}
);
