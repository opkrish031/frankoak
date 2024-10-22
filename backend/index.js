const express = require('express');
const cors = require('cors');
const appRouter = require('./src/app');

const app = express();
require('dotenv').config();
require('./src/database/config')

app.use(express.json());
app.use(cors());

app.use('/api',appRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
})
