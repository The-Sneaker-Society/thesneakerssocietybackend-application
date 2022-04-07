const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "sneakerssociety.cursd5wkphyn.us-east-2.rds.amazonaws.com",
    user: "sneakerssociety",
    password: "amazonrds",
    database: "thesneakerssocietydatabase"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM Users_Table";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    })
})

// app.get("/api/posts", (req, res) => {
//     // const {ID, First_Name, Last_Name, Email, created_at, updated_at, confirmed, verified, Firebase_id} = req.body;
//     const sqlInsert = "INSERT INTO Users_Table (ID, First_Name, Last_Name, Email, created_at, updated_at, confirmed, verified, Firebase_id) VALUES (104, 'Tanny', 'Pane', 'tannypane@gmail.com', 'Monday, December 6, 2021', 'Monday, December 6, 2021', 'TRUE', 'FALSE', 104)";
//     db.query(sqlInsert, (err, result) => {
//         res.send("Hello World");
//         // }
//     });
// });

app.get("/api/remove/ID", (req, res) => {
    const {ID} = req.params;
    const sqlRemove = "DELETE FROM Users_Table WHERE ID = 103";
    db.query(sqlRemove, ID, (error, result) => {
        res.send(result);
    });
});

app.get("/api/post", (req, res) => {
    const sqlInsert = "INSERT INTO Users_Table (ID, First_Name, Last_Name, Email, created_at, updated_at, confirmed, verified, Firebase_id) VALUES (106, 'Tanny', 'Pane', 'tannypane@gmail.com', 'Monday, December 6, 2021', 'Monday, December 6, 2021', 'TRUE', 'FALSE', 106)";  
    db.query(sqlInsert, (err, result) => {
    // console.log("error", error);
    // console.log("result", result);
    res.send("Hello World");
});
});

app.get("/api/get/:ID", (req, res) => {
    const {ID} = req.params;
    const sqlGet = "SELECT * FROM Users_Table where ID=100";
    db.query(sqlGet, ID, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/api/put/:ID", (req, res) => {
    const {ID} = req.params;
    const sqlGet = "SELECT * FROM Users_Table";
    db.query(sqlGet, ID, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
