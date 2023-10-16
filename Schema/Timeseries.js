const mongoose = require('mongoose');
const timeseriesSchema = mongoose.Schema({
    "amount1" : {type:Number, default: 0,require:true},
    "amount2" : {type:Number, default: 0,require:true},
    "amount3" : {type:Number, default: 0,require:true},
    "amount4" : {type:Number, default: 0,require:true},
    "amount5" : {type:Number, default: 0,require:true},
    "amount6" : {type:Number, default: 0,require:true},
    "amount7" : {type:Number, default: 0,require:true},
    "amount8" : {type:Number, default: 0,require:true},
    "amount9" : {type:Number, default: 0,require:true},
    "amount10" : {type:Number, default: 0,require:true},
   
})
module.exports = mongoose.model('timeseries',timeseriesSchema);