

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const carRoute = require('./routes/car');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DBConnection successfull"))
.catch((err) => {
    console.log(err)
});

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded( { extended: true} ));
app.use(express.json());


//Backend routes
app.use('/api/catalog', carRoute);
app.use('/api/auth', authRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});