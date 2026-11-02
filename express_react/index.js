import express from 'express';
import cors from 'cors';
import fs from 'fs';
import product from product("type":"json")

const app = express();
app.use(cors());
app.use(express.json());
//get
app.get('/products',(req,res)=>{

})
//post
app.post(
    
)
app.listen(4000, () => {
})