import express from 'express';
import DataUtils from './utils/DataUtils.js';
const app = express();
const bodyParser = require('body-parser');
console.log("HERE");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const du = new DataUtils();
const port = process.env.PORT || 3000;

const router = express.Router();


router.get('/names', function(req, res) {
  res.json(du.apiGet());
});

//curl --data "name=amitabh" http://localhost:3000/api/name
router.post('/name', function(req, res) {
  du.apiPost(req);
  res.json({});
});


app.use('/api', router);

app.listen(port);
console.log('App is running on port' + port);
