class TesteController{
    async index(req, res){
        return res.json({msg:'teste mongo'});
    }
}

export default new TesteController();