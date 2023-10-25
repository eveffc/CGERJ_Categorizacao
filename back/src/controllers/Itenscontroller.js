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
        try{
            const{id} = req.params;
            const item = await itens.findById(id);

            if(!item){
                return res.status(404).json();
            }
            return res.json(item);

        }catch(err){
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    //create
    async create(req, res) {
        try {
            const { nome, tipo, descricao } = req.body;
            const existingItem = await itens.findOne({ item: nome });
    
            if (existingItem) {
                return res.status(400).json({ message: "Item already exists." });
            }
    
            const newItem = await itens.create({ item: nome, tipo, descricao });
            return res.status(201).json(newItem);
    
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    //update (resolver mais pra frente)
    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, tipo, descricao } = req.body;
    
            const item = await itens.findById(id);
    
            if (!item) {
                return res.status(404).json();
            }
    
            await itens.updateOne({ nome, tipo, descricao });
            await item.save();
    
            return res.status(200).json();
    
        } catch (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    //delete (resolver mais pra frente)
    async destroy(req, res){
        try{
            const {id} = req.params;
            const item = await itens.findById(id);

            if(!user){
                return res.status(404).json();
            }

            await item.deleteOne();
            return res.status(200).json();

        }catch(err){
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
export default new ItensController();