let researcher = (req,res,next) => {
    if(req.user.role === 0 || req.user.role === 1){
        return res.send('You are not allowed, get out now.')
    }
    next();
}

module.exports = { researcher }