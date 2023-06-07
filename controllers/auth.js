const login=async (req,res,next)=>{
    res.send('login user')
}

const register= async(req,res)=>{
    res.send('register user')
}

module.exports={login,register}