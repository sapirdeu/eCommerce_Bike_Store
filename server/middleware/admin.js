let admin = (req,res,next) => {
    if(req.user.role === 0 || req.user.role === 2){
        return res.send('You are not allowed, get out now.')
    }
    next();
}

module.exports = { admin }