## GoVo-entry-management-System

### Contents
1. [Overview](#overview)
2. [Features](#FEATURES)
3. [Setup](#setup)
4. [Screens](#screens)
4. [Routes Used](#routes)
5. [Table Schema](#Schema)
6. [Directory](#Directory)



### Overview
---
+ This Web App is made for the purpose of innovacer summergeeks-SDE. Link deployed on heroku [here](https://api-express-testing.herokuapp.com/).
+ Tech stack used : [Material Bootsrap](https://mdbootstrap.com/), [NodeJS](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/), [ExpressJS](https://expressjs.com/), [Nodemailer](https://nodemailer.com/about/) for emails and [way2sms](https://www.way2sms.com) for Mobile Messages,
+ Assigment Details [here](https://summergeeks.in/static/assignments/summergeeks%202020%20-%20SDE%20Assignment.pdf).
+ Server is deployed on [Heroku](https://www.heroku.com) and Database on [MongoDb Atlas](https://www.mongodb.com/cloud/atlas)
## FEATURES
+ Check-in and Check-out options for Visitor
+ Host can register itself with name, mail, phone no. and address.
+ For Check-in, visitor need to provided : name, email, phone , host name and host email id.
+ Visitor information is saved into the database with checkin timestamp.
+ After visitor check-in, a mail and a SMS is sent to the host.
+ On leaving the place, visitor do check-out. Details to be provided are name and phone no. only.
+ As soon as visitor check-out, an email is sent to his email id with all his details.
+ List of Hosts is also available.

+ Modular approach for coding. Features like Database, Email and SMS are placed separate modules and can be executed independently.
+ Code is easy to understand without any complexity.


    

    
### Setup
---
Before proceeding please download and install [NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center/community) because it is required.

1. Download/Clone the Repository
2. Navigate into the Repository folder on your disk using Terminal
3. Make sure that you have the Node and MongoDB installed
4. Run the following command to run the setup,`npm install`  
5. Create .env file for environment setup

	`EMAIL = gmail-id`<br>
`PASSWORD = gmail_password`<br>
`SMSAPIKEY = way2sms API key` <br>
`SMSSECRET = way2sms Secret key` <br>
`MONGO_URL = MongoDB Atlas connection link `     
    
Now everything required should be installed, go ahead and run the following command whenever you want to run the app,
`node index.js`
##### The App would now be Up and Running on localhost:3000
    
    
### Screens
---
#### Landing Page,
![Landing page](https://user-images.githubusercontent.com/31367960/70207098-ad906c80-174f-11ea-9d80-972d6daa6f53.png)

#### Check In Email Notification

![CheckIn Email](https://user-images.githubusercontent.com/31367960/70207211-15df4e00-1750-11ea-97bc-270e9dfb0011.png)

#### Check In Message Notification
![CheckIn Message](https://user-images.githubusercontent.com/31367960/70207308-69519c00-1750-11ea-82d6-668c61d24d95.png)



### Routes
---

| Route  | Description | Signature |
| ------------- | ------------- | ------------- |
| /CheckIn |(post) Search for Host name and then creates a new Visitor Entry in MongoDB | Body: { `Name`, `Phone`, `Email`, `Address`, `hostname` , `hostemail`, `CheckInTime`} |
| /CheckOut |(post) Update the Checkout time of Visitor in MongoDB  | Body: { `Name`, `Email`} |
| /AddHost |(post) Add new Host Entry in MongoDB  | Body: { `Name`, `Phone`, `Email`, `Address`} |
| /HostList |(get) Get array of host list form MongoDB  |  |
| /sendemail |(post) Send email using nodemailer modular  | Body: { `tosend`, `message`} |
| /sendsms |(post) Send sms using way2sms  | Body: { `tosend`, `message`} |


### Schema
---
#### Host Schema
![image](https://user-images.githubusercontent.com/31367960/70206502-c6981e00-174d-11ea-905f-f4dc4e995a6f.png)

#### Visitor Schema
![image](https://user-images.githubusercontent.com/31367960/70206580-03fcab80-174e-11ea-9e5c-c3a0859a0b68.png)

### Directory Structure 
![image](https://user-images.githubusercontent.com/31367960/70207693-86d33580-1751-11ea-8066-00761b2cb1f1.png)

