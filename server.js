import express from 'express';
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = express.Router();


router.get('/', function(req, res) {
  res.json({message: 'Welcome to the api!'});
});


app.use('/api', router);

app.listen(port);
console.log('App is running on port' + port);
