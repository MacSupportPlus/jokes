const mongoose = require('mongoose'),
    uri = "jokes";

mongoose.connect(`mongodb://localhost/${uri}`, {


    useNewUrlParser: true, 
    useUnifiedTopology:true 

})
    .then(() => console.log("You're now in the mainframe ... "))
    .catch(() => console.log("Meltdown!!! MELTDOWN", err))
