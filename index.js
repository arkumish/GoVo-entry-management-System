const express = require('express')
const app = express()
const port =process.env.PORT|| 3000;


const accountSid = 'ACa3439b460913e7cf76ee8775d52a59e7'; 
const authToken = 'da936bb859527b9ef104fd0595d1332a'; 
const client = require('twilio')(accountSid, authToken); 
 



app.get('/', (req, res) => res.send('Hello World this is arpit!'))

app.get('/testing1', (req, res) =>{ 
    client.messages 
    .create({ 
       body: 'testing night', 
       from: '+12055128463',       
       to: '+919325611554' 
     }) 
    .then(message => console.log(message.sid + "  " + message.status)) 
    .done();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))