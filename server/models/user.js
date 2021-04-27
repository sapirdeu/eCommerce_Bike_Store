const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_I = 10;
require('dotenv').config();

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type:String,
        required: true,
        minlength: 5
    },
    name:{
        type:String,
        required: true,
        maxlength:100
    },
    lastname:{
        type:String,
        required: true,
        maxlength:100
    },
    cart:{
        type:Array,
        default: []
    },
    history:{
        type:Array,
        default: []
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    }
});


userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);
    
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();  
            });
        })
    } else{
        next()
    }
});

userSchema.methods.comparePassword = function(candidatePassword, collbackFunc){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err){
            return collbackFunc(err);
        }
        collbackFunc(null, isMatch);
    })
}

userSchema.methods.generateToken = function(collbackFunc){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET);

    user.token = token;
    user.save(function(err,user){
        if (err){
            return collbackFunc(err);
        }
        collbackFunc(null,user);
    })
}

userSchema.statics.findByToken = function(token, collbackFunc){
    var user = this;

    // check if the token is correct
    jwt.verify(token, process.env.SECRET, function(err, decode){
        // find the one who has "_id" of decode and "token" of token
        user.findOne({"_id": decode, "token": token}, function(err, user){
            if(err){
                return collbackFunc(err);
            }
            collbackFunc(null,user);
        })
    });
}


const User = mongoose.model('User',userSchema);

module.exports = { User }