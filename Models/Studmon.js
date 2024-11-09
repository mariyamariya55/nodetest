const mongoose=require("mongoose")
const{Schema}=mongoose;

const SampleSchema=new Schema({

    student_name:{type:String},
    student_age:{type:String},
    student_mark:{
        english:{type:Number},
        tamil:{type:Number},
        maths:{type:Number},
        science:{type:Number},
        social:{type:Number}
    }


})
module.exports= mongoose.model("StudentDetails",SampleSchema)