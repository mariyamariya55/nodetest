const mongoose=require("mongoose");
const bcrypt=require('bcryptjs')

const{Schema}=mongoose;

const SampleSchema=new Schema({
username:{type:String},
password:{type:String}

})
SampleSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports= mongoose.model("User",SampleSchema)
