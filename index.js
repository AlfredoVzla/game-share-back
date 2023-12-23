require('dotenv').config();
const express = require ('express');
const app = express();
const fileUpload = require('express-fileupload');
const routerUser = require('./routes/User');
const cors = require('cors');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use( fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true
}));
app.use('/users',routerUser);

app.listen(PORT,()=>{
    console.log("Servidor corriendo");
})




