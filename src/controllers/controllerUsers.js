import User from '../models/users.js'
export const viewLogin = (req,res) =>{
    res.status(200).render('login')
}

export const login = ( req,res) =>{
    console.log(req.body)
    res.status(200).redirect('/productos')
}

export const viewRegister = (req,res) =>{
    res.status(200).render('register')
}
export const register = async ( req,res) =>{
    try{ 
        console.log(req.body)
        const user = await User(req.body)
        user.save()
        res.status(200).redirect('/productos')
    }catch(e){
        console.log(e)
    }
    
}