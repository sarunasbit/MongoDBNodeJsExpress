const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
.connect(DB, {
    useNewUrlParser: true
})
.then(()=> console.log('DB connection is ok'))



const port = process.env.PORT || 8888;

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
});

