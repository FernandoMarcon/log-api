import express from 'express';
import routes from './src/routes/logRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/logDB', {
				useNewUrlParser: true,
				useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req,res) => 
	res.send('LEVACC Log API')
);

app.listen(PORT, () => 
				console.log(`Server running on port ${PORT}`)
);
