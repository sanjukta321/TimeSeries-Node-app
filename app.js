const express = require('express');
const app = express();
//const TimeSeries = require('./Schema/Timeseries')
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors());
const mongoose = require('mongoose');
const TimeSeries = require('./Schema/Timeseries');
mongoose.connect("mongodb+srv://sanjukta:sanjukta@timeseries.d9vqdeg.mongodb.net/?retryWrites=true&w=majority")
    .then(data => {
        console.log("mongodb connected")
    }).catch(error => {
        console.log("mongodb not connected", error)
    })
//API create
//node js -> express js
app.post('/timeseries', (req, res, next) => {
    let myTimeseries = new TimeSeries();
    myTimeseries.amount1 = req.body.amount1;
    myTimeseries.amount2 = req.body.amount2;
    myTimeseries.amount3 = req.body.amount3;
    myTimeseries.amount4 = req.body.amount4;
    myTimeseries.amount5 = req.body.amount5;
    myTimeseries.amount6 = req.body.amount6;
    myTimeseries.amount7 = req.body.amount7;
    myTimeseries.amount8 = req.body.amount8;
    myTimeseries.amount9 = req.body.amount9;
    myTimeseries.amount10 = req.body.amount10;
    myTimeseries.save().then(data => {
        res.status(200).json({
            "message": "Amount added"
        })
    }).catch(error => {
        res.status(500).json({
            "message": "Amount not added"
        })
    })
})
app.get('/timeseries', (req, res, next) => {
    timeseries.find().then(docs => {
        res.status(200).json({
            "message": "Timeseries fetched",
            records: docs
        })
    }).catch(error => {
        res.status(500).json({
            "message": "Timeseries not fetched"
        })
    })
})
module.exports = app;



