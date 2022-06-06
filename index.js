const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to Home page');
})
app.get('/about', (req, res)=>{
    res.send('Welcome to about page');
})
app.get('/blog', (req, res)=>{
    res.send('Welcome to blog\'s page');
})

app.listen(port, ()=>{console.log(`Server running at port ${port}`)});