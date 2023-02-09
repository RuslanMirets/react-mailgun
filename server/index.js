const express = require("express");
const dotenv = require("dotenv");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mg = mailgun.client({
	username: "api",
	key: process.env.MAILGUN_API_KEY,
});
const domain = process.env.MAILGUN_DOMAIN;

app.post("/api/email", (req, res) => {
	const { email, subject, message } = req.body;
	mg.messages
		.create(domain, {
			from: "Excited User <mailgun@sandbox-123.mailgun.org>",
			to: [`${email}`],
			subject: `${subject}`,
			html: `<p>${message}</p>`,
		})
		.then((msg) => {
			console.log(msg);
			res.send({ message: "Email успешно отправлен" });
		})
		.catch((error) => {
			console.error(error);
			res.status(500).send({ message: error.message });
		});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is started at port: ${port}`);
});
