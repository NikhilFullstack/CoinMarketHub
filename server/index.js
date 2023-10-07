const express = require("express");
const app =express();



const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const database = require("./config/database");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");


dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"*",
    Credentials:true,
    optionSuccessStatus: 200,
}))

database.connect();


//  routes
app.use("api/auth", authRoutes);
// app.use("api/user", userRoutes);
// app.use("api/admin", adminRoutes);




app.get("/",(req,res)=> {
    return res.json({
        success: true,
        message: "Your server is up and running",
    })
});

app.listen(PORT, ()=>{
    console.log(`app is running at port ${PORT}`);
});
