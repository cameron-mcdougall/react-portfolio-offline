const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// API calls
router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

router.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// path must route to lambda
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);