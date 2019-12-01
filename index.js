const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const { authToken } = require('./cred.js');
var dbquery = require('./dbquery');

const app = express()
const port =process.env.PORT|| 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


mongoose.connect('mongodb://127.0.0.1:27017/GoVo', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected');
});



app.post('/CheckIn',dbquery.CheckIn);
app.post('/CheckOut',dbquery.CheckOut);
app.post('/AddHost',dbquery.AddHost);
// app.post('/HostList',dbquery.HostList);

app.get('/testing',(req,resp)=>{
  request.get('http://dummy.restapiexample.com/api/v1/employees',function(err,res,body){
    if(err)console.log(err);
    else
    resp.send(res);
  })

})

app.post('/sendsms', (req,resp)=>{

var mssg = "SomeOne wants to meet" + "\nName : " + req.body.Name +"\nEmail : " + req.body.Email + "\n Phone : " + req.body.Phone + "\n CheckIn : " + req.body.CheckIn;

  var obj = {
  apikey:"ZQGJD2757YZXZ0VRBHU6SZ7EPIYGF1WB",
  secret:"2OS9TZ8V3Z4EG19X",
  usetype:"stage",
  phone: req.body.hostphone,
  message: mssg,
  senderid: "aarpit24@gmail.com"

  }
  request.post({
    url: 'https://www.way2sms.com/api/v1/sendCampaign',
    body: obj,
    json: true
  },function(err,res,body){
    if(err)console.log(err);
    else{
      console.log(res);
    resp.send(res);
    }

});

})

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  console.log(req.body);
  //res.send(__dirname + '/public/index.html');
  app.readFile(__dirname + '/public/index.html', 'utf8', (err, text) => {
    app.send(text);
});



  //res.render('public/try.html');
})






const accountSid = 'ACa3439b460913e7cf76ee8775d52a59e7'; 

const client = require('twilio')(accountSid, authToken); 
 
//making static folder
 app.use(express.static(path.join(__dirname,'public')));

// app.get('/', (req, res) => res.send('Hello World this is arpit!'))

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