const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config();
// console.log(process.env);

var con = mysql.createConnection ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended:true }));

// app.get("/", (req, res) => {
//     const sqlSelect = "INSERT INTO myproject (id, Name, Email, Password) VALUES ('11', 'Rolan Tan', 'tanrolan@gmail.com', 'hfggrgrg')";
//     db.query(sqlSelect, (err, result) => {
//         res.send("hello World");
//     });
// });
app.get("/", (req, res) => {
    const sqlSelect = "select First_Name, Last_Name, Email from Users_Table";
    con.query(sqlSelect, (err, result) => {
        res.send("hello world");
    });
});
app.get("/", (req, res) => {
    const sqlSelect = "select author, text from Posts_Table";
    con.query(sqlSelect, (err, result) => {
        res.send("hello world");
    });
});
app.get("/", (req, res) => {
    const sqlSelect = "select First_Name, Last_Name, Email from Friends_List_Table";
    con.query(sqlSelect, (err, result) => {
        res.send("hello world");
    });
});
});
// app.post("/api/insert", (req, res) => {
//     const id = req.body.id;
//     const Name = req.body.Name;
//     const Email = req.body.Email;
//     const Password = req.body.Password;

    // const sqlInsert = "INSERT INTO myproject (id, Name, Email, Password) VALUES (?,?,?,?)";
    // db.query(sqlInsert, [id, Name, Email, Password], (err, result)=> {
    //     console.log(result);
// });
// });
app.listen(3005, () => {
    console.log("running on port 3005");
});
