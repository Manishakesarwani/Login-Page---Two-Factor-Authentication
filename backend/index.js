const express = require("express");
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const cors = require("cors");

const app = express();

//Middleware
app.use(express.json());
dotenv.config()
app.use(cors());


//Routes
const UserRoute = require("./routes/userRoutes");

app.get("/", (req, res, next)=>{
    console.log("Method", req.method);
    console.log("Path", req.path);

    return res.status(200).json({
        message: "Home Page"
    });
});

app.use("/user", UserRoute);

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Database connected and server is up, listening to the http://localhost:${PORT}`);
    })
})
.catch((e)=>{
    console.log(e.message);
})
