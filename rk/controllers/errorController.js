module.exports = (err,req,res,next)=>{
    console.log(err)
    console.log('error occured 🦉🦉🦉🦉🦉🦉');
    res.status('400').json({
        "status":"error",
        "error":err.message
    })
    next();
}