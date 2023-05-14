const express=require('express');
const app=express();

const cors=require('cors');

app.use(express.json());
app.use(cors({
    origin:"*"
}))

const port=process.env.port||8000;
require('./db/conn')
const router=require('./routes/crudRouters');
const tokenRouter=require('./routes/tokenRouters');
const otpverification=require('./routes/otpRouters');
const productrouter = require('./routes/product_Routes/routes');

app.use(router);
app.use(tokenRouter);
app.use(otpverification);
app.use(productrouter);

app.listen(port,()=>{
    console.log('Connnected to the port');
})

