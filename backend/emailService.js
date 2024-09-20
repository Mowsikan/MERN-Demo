const nodemailer = require('nodemailer');

// Set up the transporter with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email provider (e.g., Outlook, Yahoo)
    auth: {
        user: 'mowsikan02@gmail.com', // Your email address
        pass: 'dxjl fyfa rdei zzcl'   // Your email password or app-specific password
    }
});

// Function to send email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'mowsikan02@gmail.com', // Sender's email address
        to: to, // Recipient's email address
        subject: subject, // Email subject
        text: text // Email body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

module.exports = sendEmail;
