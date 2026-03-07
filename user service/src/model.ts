import mongoose,{Document,Schema} from "mongoose";

//define interface for user model
// IUser extends document to include mongoose document properties like _id, createdAt,updatedAt
// define the schema for user model
// create and export the user model

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    role:string;
    playlist:string[];
}

const schema:Schema<IUser> = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
    },
    playlist:[
        {
            type:String,
            required:true,
        }
    ]
},{
    timestamps:true,
})
export const User = mongoose.model<IUser>("User",schema);
