import mongoose from 'mongoose';

const itensSchema = new mongoose.Schema(
    {
        item:{
            type: String,
            required: true,
            index:{
                unique: true
            }
        },
        tipo:{
            type: String,
            required: true,
        },
        descricao:{
            type: String,
            required: true,
        },
    }
);
export default mongoose.model('Itens',itensSchema);