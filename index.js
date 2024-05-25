const express = require('express');
const conn = require('./config/conn');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user');
const app = express();

// MIDDLEWARES
app.use(cors({
    exposedHeaders:['token']
}));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// MIDDLEWARES

conn();

const PORT = 8000;
app.use('/',userRouter);

app.listen(PORT,()=>{
console.log(`server running in PORT ${PORT}`);
});