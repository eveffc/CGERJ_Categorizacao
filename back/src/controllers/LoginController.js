class LoginController{
    async index (req, res){
       return res.json({message:'teste1'});
    }
}
export default new LoginController();