const app = require('express')();  //<-- Express is a function
const PORT = 3000;                //use parenthese to initialize 
                                 // (not necessary but stops IDE warning.)
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})


// initial route.
app.get('/data', (req, res) => {
    //.status() must be connected to
    //receive data from api.
    res.status(200).send({
        data1: '21.376 ZEC',
        data2: '12.566 XMR'
    })
    
})

//posting data to url params.
app.post('/data/:id', (req, res) => {
    // can avoid runtime problems by initializing
    // empty object if no data from request.

    //destructured variable definitions.
    const { id } = req.params || {};
    const { logo } = req.body || {};

    if (!logo) {
        res.status(404).send({ message: 'Requested data not found.'})
    }
})