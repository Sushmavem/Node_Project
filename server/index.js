const express = require('express')
const app = express()
const PORT = 8000

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