const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: 'smtp.ionos.co.uk',
        port: 8888,
        auth:{
         user: 'hey@cameronmcdougall.eu',
         pass: 'Crooked.Nose@@!23'
    }
    });

    transporter.sendMail({
        from: `${data.name} <${data.email}>`,
        to: 'hey@cameronmcdougall.eu',
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}
