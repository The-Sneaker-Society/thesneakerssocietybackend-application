const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config();

import * as User from './controller/Users'
// console.log(process.env);

var con = mysql.createConnection ({
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_User,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE
});
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    const sqlSelect = "INSERT INTO Users_Table (ID, First_Name, Last_Name, Email, created_at, updated_at, confirmed, verified, Firebase_id) VALUES ('104', 'Rolan', 'Tan', 'tanrolan@gmail.com', 'Wednesday, December 22, 2021', 'Wednesday, December 22, 2021', 'TRUE', 'FALSE', '102')";
    con.query(sqlSelect, (err, result) => {
        res.send("Hello World");
    });
});

createUser()

app.get('/users', async (req,res,next) => {
    try {
        // Validate that the correct info is in the req.body
        validateReqBody(req.body, ["email", "firstName", "lastName"])
        
        // Validate email
        validateEmail(email);


        // create data object
        const dataToSend = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            firebaseId: req.body.firebaseId,
            createdAt: new Date.now(),
            updatedAt: new Date.now(),
            confirmed: false,
            verified: false 
        }


        // create Query
       const sqlStatment = createUserQuery(dataToSend)

       // Run Query
       con.query(sqlStatment, (err, result)= {

       })




    } catch (e) {
        throw e;
    }
})

app.get("/users", User.createUser())
app.post("/users", createUser())
app.delete("/users", deleteUser())
app.patch("/users", updateUser())

// app.get("/", (req, res) => {
//     const sqlSelect = "INSERT INTO Posts_Table (ID, author, text, liked_by, likes, created_at, updated_at) VALUES ('100', 'Rolan Tan', 'tanrolan@gmail.com', '20', '20', 'Monday, December 20, 2021 1:34 PM', 'Monday, December 20, 2021 1:34 PM')";
//     con.query(sqlSelect, (err, result) => {
//         res.send("Hello World");
//     });
// });
// app.get("/", (req, res) => {
//     const sqlSelect = "INSERT INTO Friends_List_Table (ID, First_Name, Last_Name, Email, added_at) VALUES ('11', 'Rolan', 'Tan', 'tanrolan@gmail.com', 'Monday, December 20, 2021 1:34 PM')";
//     con.query(sqlSelect, (err, result) => {
//         res.send("Hello World");
//     });
// });
// app.get("", (req, res) => {
//         const sqlSelect = "select * from Users_Table" 
//         con.query(sqlSelect, (err, result) => {
//             res.send(result);
//         })
//     });
//     app.get("", (req, res) => {
//         const sqlSelect = "select * from Posts_Table" 
//         con.query(sqlSelect, (err, result) => {
//             res.send(result);
//         })
//     });
//     app.get("", (req, res) => {
//         const sqlSelect = "select * from Friends_List_Table" 
//         con.query(sqlSelect, (err, result) => {
//             res.send(result);
//         })
//     });
// app.get("", (req, res) => {
//     const sqlSelect = "DELETE FROM `Users_Table` WHERE `First_Name`= 'Rolan'";
//     con.query(sqlSelect, (err, result) => {
//         res.send("Hello World");
//     });
// });
// app.get("", (req, res) => {
//             const sqlSelect = "DELETE FROM `Posts_Table` WHERE `First_Name`= 'Rolan'";
//             con.query(sqlSelect, (err, result) => {
//                 res.send("Hello World");
//             });
//         });
//     app.get("", (req, res) => {
//                 const sqlSelect = "DELETE FROM `Friends_List_Table` WHERE `First_Name`= 'Rolan'";
//                 con.query(sqlSelect, (err, result) => {
//                     res.send("Hello World");
//                 });
//             });
// app.get("/", (req, res) => {
//             const sqlSelect = "UPDATE Posts_Table SET ID = '102' WHERE author = 'Rolan Tan'";
//             con.query(sqlSelect, (err, result) => {
//                 res.send("Hello World");
//             });
//         });
// app.get("/", (req, res) => {
//                 const sqlSelect = "UPDATE Users_Table SET ID = '102' WHERE First_Name = 'Elena'";
//                 con.query(sqlSelect, (err, result) => {
//                     res.send("Hello World");
//                 });
//             });
//     app.get("/", (req, res) => {
//                     const sqlSelect = "UPDATE Posts_Table SET ID = '101' WHERE text = 'Gniteem'";
//                     con.query(sqlSelect, (err, result) => {
//                         res.send("Hello World");
//                     });
//                 });
// app.get("", (req, res) => {
//     const sqlSelect = "select First_Name, Last_Name, Email from Users_Table" 
//     con.query(sqlSelect, (err, result) => {
//         res.send(result);
//     })
// });
// // Delete an ID from Users_Table
// app.get("", (req, res) => {
//     const sqlSelect = "delete from Users_Table where ID = 102" 
//     con.query(sqlSelect, (err, result) => {
//         res.send(result);
//     })
// });
// app.get("", (req, res) => {
//         const sqlSelect = "delete from Posts_Table where ID = 102" 
//         con.query(sqlSelect, (err, result) => {
//             res.send(result);
//         })
//     });
//     app.get("", (req, res) => {
//             const sqlSelect = "delete from Users_Table where ID = 102" 
//             con.query(sqlSelect, (err, result) => {
//                 res.send(result);
//             })
//         });

app.listen(3009, () => {
    console.log("running on port 3006");
});
