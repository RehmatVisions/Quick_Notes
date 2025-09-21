import {Note} from '../models/note.model.js'


export const createNote=async(req,res)=>{
try {
    const {title,content}=req.body;
    if(!title||!content){
    return res.status(400).json({
        message:"title and content are required",
        success:false
    })
}
const note=new Note({
    title,
    content,
    user:req.userId
})
await note.save();
return res.status(201).json({
    message:"Note Created Successfully",
    success:true,
    note
})


} catch (error) {
    console.log("create note error",error)
    return res.status(500).json({
          message:"Internal Server Error",
        success:false,
        error:error.message
    })
}
}


export const getNotes=async(req,res)=>{
    try {
        const notes = await Note.find({user:req.userId}).sort({createdAt:-1})
         return res.status(200).json({
            message:"Notes fetched successfully",
            success:true,
            notes
         })

    } catch (error) {
        console.log("get notes error",error)
        return res.status(500).json({
                  message:"Internal Server Error",
            success:false,
            error:error.message
        })
    }
}

export const updateNote=async(req,res)=>{
    try {
        const {id} =req.params;
        const {title,content}=req.body;
        const note =await Note.findOneAndUpdate(
            {_id:id,
                user:req.userId
            },
            {title,content},
            {new:true}
        )
        if(!note){
            return res.status(404).json({
                message:"Note not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Note updated successfully",
            success:true,
            note
        })
    } catch (error) {
        console.log("error",error)
        return res.status(500).json({
                  message:"Internal Server Error",
                  success:false
        })
    }
}

export const deleteNote=async(req,res)=>{
try {
    const {id}=req.params;
    const note=await Note.findOneAndDelete({_id:id,user:req.userId})
    if(!note){
        return res.status(404).json({
            message:"Note not found",
            success:false
        })
    }
    return res.status(200).json({
        message:"Note deleted successfully",
        success:true,
        note
    })
} catch (error) {
    console.log("Delete note error",error);
    return res.status(500).json({
        message:"Internal Server Error",
        success:false,
        error:error.message
    })
}
}