class LoginController{
    async index (req, res){
       return res.json({message:'Login'});
    }
}
export default new LoginController();