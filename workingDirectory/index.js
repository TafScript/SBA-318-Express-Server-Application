const app = require('express')(); //express is a function
const PORT = 3000;                //use parenthese to initialize 
                                 // (not necessary but good to know)
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

app.get('/data', (req, res) => {
    //.status() must be connected to
    //receive data from api.
    res.status(200).send({
        data1: '21.376 ZEC',
        data2: '12.566 XMR'
    })
    
})