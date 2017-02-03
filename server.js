import express from 'express';
import DataUtils from './utils/DataUtils.js';
const app = express();
const bodyParser = require('body-parser');
console.log("HERE");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const du = new DataUtils();
const port = process.env.PORT || 3001;

const router = express.Router();


router.get('/names', function(req, res) {
  res.json(du.apiGet());
});

//curl --data "name=amitabh" http://localhost:3000/api/name
router.post('/name', function(req, res) {
  du.apiPost(req);
  res.json({});
});


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //
  //         // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //
  //                 // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  //
  //                         // Set to true if you need the website to include cookies in the requests sent
  //                             // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  //
  //                                     // Pass to next layer of middleware
  next();
});

app.use('/api', router);
app.listen(port);
console.log('App is running on port' + port);
