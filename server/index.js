var express=require('express');
var app=express();
var mongoose=require('mongoose');
var url="mongodb://127.0.0.1:27017/DailyReport"
var cors=require('cors');
var bodyParser=require('body-parser');
var router=require('./Router')

app.use(cors({orgin:"http://172.16.0.160:3000"}));
app.use(bodyParser.json())

mongoose.set("strictQuery", true);
mongoose.connect(url,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("DB connected")
    }
});


app.use("/",router)


app.listen(3001,()=>{
    console.log("server is listening port 3001")
})