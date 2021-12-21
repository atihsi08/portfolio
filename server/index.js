import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {

    let mailOptions = {
        from: `${req.body.email}`,
        to: process.env.EMAIL,
        subject: `Message from: ${req.body.name}`,
        text: `${req.body.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({ status: "fail" });
        } else {
            console.log("Email sent successfully");
            res.json({ status: "success" });
        }
    });
});

const PORT = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
//     res.send("Ecommerce");
// })

app.get('/*', (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/'))
      url = url.substring(1);
    res.sendFile(url);
  });

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
