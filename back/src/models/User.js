import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        password:{
            type: String,
            required: true,
        },
    }
);

export default mongoose.model('User', userSchema);