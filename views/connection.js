const mongoose = require('mongoose');

//connect to momgodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){

    console.log('connetion has been made,now make fireworks...');
}).on('error',function(error){
    console.log('connection error:',error);
});