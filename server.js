const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'guptashreya8303@gmail.com',
        pass: 'foet iyxv prnq uyga ',
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'guptashreya8303@gmail.com',
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Failed to send email.');
        }
        res.status(200).send('Email sent successfully.');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

