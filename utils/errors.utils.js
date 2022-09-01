module.exports.signUpErrors = (err) => {
    let errors = {pseudo: '', email: '', password: ''};

    if(err.message.includes('pseudo')) {
        errors.pseudo = 'Pseudo is required';
    }

    if(err.message.includes('email')) errors.email = 'Email incorrect';


    if(err.message.includes('password')) errors.password = 'Password incorrect';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo')) 
        errors.pseudo = 'Pseudo already exists';


    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) 
        errors.email = 'Email already exists';
    
    return errors;
};


module.exports.signInErrors = (err) => {
    let errors = {email: '', password: ''};

    if(err.message.includes('email')) errors.email = 'Email incorrect';

    if(err.message.includes('password')) errors.password = 'Password incorrect';
    
    return errors;
}


module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize : ""};

    if (err.message.includes('invalid file'))
       errors.format = "Format incompatible";

    if (err.message.includes('ma size'))
       errors.maxSize = " le fichier dépasse 500ko"

       
    return errors

}   
    