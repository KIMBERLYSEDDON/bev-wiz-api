const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once('open', () => {
    console.log('Successfully connected to the database');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})