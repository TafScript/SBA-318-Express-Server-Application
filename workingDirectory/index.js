import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;


//middleware 
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("views"));

//root route
app.get("/", (req, res) => {
    res.send("Rest API test")
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})


// initial route.
app.get('/data', (req, res) => {
    //.status() must be connected to
    //receive data from api (not a regular route).
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
    //might send to DOM
    //const { logo } = req.body || {};

    if (!id) {
        return res.status(404).send({ message: 'Requested data not found.'})
    }

    res.send({
        //id: `${id}`,
        
    })
})