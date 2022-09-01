const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.ducdy.mongodb.net/dataName?retryWrites=true&w=majority', {
    useNewUrlParser: true,


    useUnifiedTopology: true
}).then(() => { console.log('DB is connected') }
).catch(err => { console.log(err) });


