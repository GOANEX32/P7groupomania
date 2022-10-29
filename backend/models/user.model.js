const mongoose = require('mongoose');

const {isEmail} = require('validator');

const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [isEmail, 'Invalid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    },
    avatar: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    bio: {
        type: String,
        max: 1024
    },
    followers: {
        type: String,
    },
    following: {
        type: String,
    },
    likes: {
        type: String,
    },
    isAdmin:{
        type:Boolean , default: false
    },


},
{
timestamps: true,
}
);

//play function before saving the user in the database
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
}
);

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            return user;
        }
        throw new Error('Invalid password');
    }
    throw new Error('Invalid email');
}



const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;