require('dotenv').config();

const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () =>  console.log('connected to mongoose'));

app.use(express.json())

const logRoute = require('./routes/logs');
app.use('/api/logs', logRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


