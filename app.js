const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//const PORT = 3001
const PORT = process.env.PORT;
const heroes = require("./routes/heroes")

const authentication = require("./middleware/authanticator")
const emailJob = require("./middleware/emailSender")
const auth = require("./routes/auth")
const users = require("./routes/users")
const home = require("./routes/home")
var app = express();

connectDb();

app.use((req,res,next) => {
    console.log("Middleware function");
    next(); // need this to move to route handler
})

app.use(cors());
app.use(express.json());
app.use(emailJob);
app.use(authentication);
app.use("/", home);
app.use("/api/heroes", heroes); //custom middleware
app.use("/api/users", users);
app.use("/api/auth", auth);

// If collection is not exists it will create automatically and document too (Hero -> heros happen automatically)
async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost/herodb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected!');
    } catch (error) {
        console.log(error.message);
    }
}





const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('App runs on port 5000!!', port);
});

app.listen(PORT, () => {
    //console.log('Listen on Port ${Port}  ');
})
