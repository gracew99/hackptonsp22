const path = require("path");
const express = require('express');
const {spawn} = require('child_process');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var axios = require('axios');
var FormData = require('form-data');

// const dotenv = require('dotenv').config();
// const config = require('./config');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
  res.setHeader("Access-Control-Allow-Headers", "*"),
  next();
})

  // return upcoming classIds for classes userId is registered for
  app.post('/checkMessage', (req, res) => {
    //   const containerId = req.params.containerId
      // console.log("iS THIS WORKING")
      console.log(req.body)
      console.log("!!!!!")
      if (req.body.type === "message_reply") {
        console.log(req.body.message_reply.body)
        const message = req.body.message_reply.body  
        const recipientId = req.body.message_reply.recipient
        var data = new FormData();

        var config = {
        method: 'get',
        url: 'https://api.botdoc.io/v1/module_container/container/?recipient='+recipientId,
        headers: { 
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns', 
            ...data.getHeaders()
        },
        data : data
        };
        axios(config)
        .then(function (response) {
            const containerId = response.data.results[0].id;

            let dataToSend
            // spawn new child process to call the python script
            const python = spawn('python3', ['hatespeech.py', ''+message]);
            // collect data from script
            python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = {class: data.toString()};

            
            //    dataToSend = dataToSend['top_class']
            });
            // in close event we are sure that stream from child process is closed
            python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            // send data to browser
            if (dataToSend.class === "offensive_language\n" || dataToSend.class === "hate_speech\n") {
                
                var data = new FormData();
                data.append('container', containerId);
                data.append('body', 'HATEFUL OR OFFENSIVE SPEECH DETECTED. THIS IS AGAINST COMMUNITY GUIDELINES AND USERS WHO ENGAGE IN SUCH BEHAVIOR WILL BE REMOVED FROM THE PLATFORM');
                data.append('title', 'WARNING: ');

                var config = {
                method: 'post',
                url: 'https://api.botdoc.io/v1/module_container/message/',
                headers: { 
                    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns', 
                    ...data.getHeaders()
                },
                data : data
                };

                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                console.log(error);
                });
                console.log("ALERT")
            }
            res.send(dataToSend)
            });
        })
        .catch(function (error) {
        console.log(error);
        });

      
    //    res.status(201).send({text: "hey"})
    } else {
      res.send({})
    } 
    
  })

  app.listen(process.env.PORT || 8000, () =>
  console.log(`Express server is running on localhost:${process.env.PORT || 8000}`)
);