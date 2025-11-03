require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const PORT = 9600

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB")
})

app.get('',(req, res)=>
{
    res.send("Hello Sushma !!");
});

app.listen(PORT,() =>
{
console.log(`server running on PORT ${PORT}`)
})

app.use(express.json());
app.post('/api/data',(req,res)=>
{
    res.send(req.body);
    console.log(req.body);
}
)