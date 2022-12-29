var mongoose=require('mongoose');
let ReportSchema=new mongoose.Schema({
    empid:{
        type:String
    },
    date:{
        type:String
    },
    department:{
        type:String
    },
    task:
    [{
        tasks:{
            type:String  
        },
        work:{
            type:String  
        },
        today_progress:{
            type:String 
        }
    }],
    total_prog:{
        type:String 
    }
});

module.exports=mongoose.model('ReportSchema',ReportSchema)