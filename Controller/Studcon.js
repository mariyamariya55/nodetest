
const SampleModel=require('../Models/Studmon')


exports.create=async(req,res,next)=>{
    const sample=new SampleModel(req.body)
    try{
        await sample.save();
        return res.status(201).json({message:"ceated successfully",data:sample});

    }
    catch(err){
        return res.status(400).json({message:"something wrong",message:err.message});

    }
}

exports.getall=async (req,res,next)=>{

    try{
        const samples=await SampleModel.find();
        return res.status(200).json({message:"Retrived succssfully",data:samples})

    } catch (err){
        return res.status(500).json({message:"Something went wrong",error:err.message})
    }
}; 
exports.getbyid= async (req,res)=>{
try{

    const {id}=req.params;
    const data=await SampleModel.findById(id);
    return res.status(200).json({data});

}
catch(err){

    return res.status(400).json({message:err.message})
}
}

exports.update=async (req,res,next)=>{

    try{

        const samples = await SampleModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if(!samples){
            return res.status(400).json(400).json({error:"Record not found"})
        }
        res.status(200).json({message:"Record Updated",data:samples
        })
    }
    catch(err){
        return res.status(400).json({message:err.message})
    }
}

exports.remove=async(req,res,next)=>{

    try{

        const {id}=req.params;

        const deleteRecord=await SampleModel.findByIdAndDelete(id)
        if(!deleteRecord){
            return res.status(404).json({message:"Record deleted successfully",data:deleteRecord})
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err.message});
        

        
    }
}
exports.topstudent=async(req,res)=>{

    try{
        const student=await SampleModel.aggregate([
            {
                $addFields:{
                    totalmarks:{
                        $sum:["$student_marks.english","$student_marks.taml","$student_marks.maths","$student_marks.science","$student_social"]
                    }
                }
            },
            { $sort: { totalMarks: -1 } },
            { $limit: 3 }
            
        ])
        res.send(student);
    } catch (e) {
      res.status(500).send(e);
    }
  };