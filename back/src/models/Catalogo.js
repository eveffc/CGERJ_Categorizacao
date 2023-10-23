import mongoose from "mongoose";

const catalogoSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        tipo:{
            type: String,
            required: true,
        },
        imagem: {
            data: Buffer,
            contentType: String
        },
    }
);

export default mongoose.model('Catalogo', catalogoSchema);