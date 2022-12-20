
const customeMiddleware = (req,res,next)=>{
    console.log("This is customeMiddleware")
    next();
}

module.exports= customeMiddleware;