const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
router.get('/api/hello', (req, res) => {
  res.send({ express: 'Mail server is up and running \u2665' });
});

router.post('/api/world', (req, res) => {

	const express = require('express');
	const app = express();

	// Transporter config
	const nodemailer = require('nodemailer');
	const creds = require('./config');

	var transport = {
		host: 'smtp.ionos.co.uk',
		auth: {
			user: creds.USER,
			pass: creds.PASS
		}
	}

	var transporter = nodemailer.createTransport(transport)

	transporter.verify((error, success) => {
		if (error) {
			console.log(error);
		} else {
			console.log(`All works fine, yaaas!`);
		}
	});

	// Route to inbox config
	app.use(express.json());

	const name = req.body.name;
	const email = req.body.email;
	const number = req.body.number;
	const message = req.body.message;

	var mail = {
		from: `${name} <noreply@cameronmcdougall.eu>`,
		to: 'hey@cameronmcdougall.eu',
		subject: 'Enquiry from portfolio',

		html: `<h4><strong>Name:</strong> ${name}</h4>
			   <h4><strong>Email:</strong> ${email}</h4>
			   <h4><strong>Number:</strong> ${number}</h4>
			   <hr>
			   <p><strong>Message:</strong> ${message}</p>`
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			 res.send({
    			msg: `Something's up with the mail server at the moment, your message has not been sent. Please try again later or get in touch with me through the social media links down below.`
  			});
		} else {
			 res.send({
			 	code: 200,
    			msg: `Thanks, ${req.body.name}! Your message has been successfuly sent.`
  			});
		}
	})

  
});

// path must route to lambda
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);