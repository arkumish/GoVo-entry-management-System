const express = require('express')
const path = require('path')
const { authToken } = require('./cred.js')


const app = express()

const port =process.env.PORT|| 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const accountSid = 'ACa3439b460913e7cf76ee8775d52a59e7'; 

const client = require('twilio')(accountSid, authToken); 
 
//making static folder
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => res.send('Hello World this is arpit!'))

app.post('/SendSmsTwilio', (req, res) =>{ 
var mssgstatus = "sending initiated";
var mssg = req.body.mssgbody;
//var pno = req.phnumber;

    client.messages 
    .create({ 
       body: mssg, 
       from: '+12055128463',       
       to: '+919325611554'
     }) 
    .then(message => {
     console.log(message.sid + "  " + message.status);
     mssgstatus = message.status; }) 
    .done();

    res.send(mssgstatus);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))