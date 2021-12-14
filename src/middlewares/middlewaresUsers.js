
export const authBuyer = async (req,res,next)  =>{

            if(req.isAuthenticated()){
                next()
            }else{
                res.status(200).redirect('/login')
            }

}
export const authSeller = async (req,res,next)  =>{

    if(req.isAuthenticated() && req.user.type == "vendedor"){
        next()
    }else{
        res.status(200).redirect('/login')
    }

}