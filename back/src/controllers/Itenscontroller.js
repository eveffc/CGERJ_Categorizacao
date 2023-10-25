import itens from "../models/itens";
class ItensController {
    async index (req, res){
        try{
            const item = await itens.find();
            return res.json(item);

        } catch(err){
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async show(req, res){

    }
    async create(req, res){
        try{
            const {nome, tipo, descricao} = req.body;
            const existingItem = await itens.findOne({item: nome});
    
            if (existingItem) {
                return res.status(400).json({message: "Item already exists."});
            }
    
            const newItem = await itens.create({item: nome, tipo, descricao});
            return res.status(201).json(newItem);
            
        } catch (err){
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async update(req, res){
        
    }
    async destroy(req, res){
        
    }
}
export default new ItensController();