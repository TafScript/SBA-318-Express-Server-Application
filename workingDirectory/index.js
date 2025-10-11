import express from "express";
import bodyParser from "body-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";
import { timer } from "./middleware/timer.js";
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import commentsRouter from "./routes/comments.js"; 

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

//routes
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

//error handler last
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
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