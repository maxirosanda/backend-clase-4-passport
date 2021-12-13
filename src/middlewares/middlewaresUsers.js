import User from '../models/users.js'

export const authBuyer = async (req,res,next)  =>{

    try{
        const user = await User.find({username:req.body.username}).lean()
        console.log(user)
        console.log(req.body)
        if(Object.entries(user).length!=0){

            if( req.body.password==user[0].password){
                next()
            }else{
                res.status(200).redirect('/login')
            }

        }else{
            res.status(200).redirect('/login')
        }
 
        
    }catch(e){console.log(e)}




}