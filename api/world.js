exports.handler = function (event, context, callback) {
	const body = JSON.parse(event.body);

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
			console.log('All works fine, yaaas!');
		}
	});

	// Route to inbox config
	app.use(express.json());

	app.post('/', (req, res, next) => {
		console.log(req.body);
		const name = req.body.name;
		const email = req.body.email;
		const number = req.body.number;
		const message = req.body.message;

		var mail = {
			from: `${name} <${email}>`,
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
				res.json({
					msg: 'fail'
				})
			} else {
				res.json({
					msg: 'success'
				})
			}
		})
	})
	callback(null, {
		statusCode: 200,
		body: `I received your POST request. This is what you sent me: ${body.name}`,
	});
}








