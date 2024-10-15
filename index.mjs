import { MailtrapClient } from "mailtrap";

const TOKEN = '86034d930eb294890346a6dc93eabe0e'
const SENDER_EMAIL= 'hello@demomailtrap.com'
const RECIPIENT_EMAIL= 'mandalpriyanshu22@gmail.com';

if(!TOKEN) {
    throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ 
    token: TOKEN
});

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL};

client
.send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Mailtrap Sending!",
})
.then(console.log)
.catch(console.error);