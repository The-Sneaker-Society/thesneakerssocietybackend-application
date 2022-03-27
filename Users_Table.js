const sql = require("./db.js");
// constructor
const Users_Table = function(Users_Table) {
  this.ID = Users_Table.ID;
  this.First_Name = Users_Table.First_Name;
  this.Last_Name = Users_Table.Last_Name;
  this.Email = Users_Table.Email;
  this.created_at = Users_Table.created_at;
  this.updated_at = Users_Table.updated_at;
  this.confirmed = Users_Table.confirmed;
  this.verified = Users_Table.verified;
  this.Firebase_id = Users_Table.Firebase_id;
};
Users_Table.create = (newUsers_Table, result) => {
  sql.query("INSERT INTO Users_Table SET ?", newUsers_Table, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Users_Table: ", { ID: res.insertID, ...newUsers_Table });
    result(null, { ID: res.insertID, ...newUsers_Table });
  });
};
Users_Table.findByID = (ID, result) => {
  sql.query(`SELECT * FROM Users_Table WHERE ID = ${ID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Users_Table: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Friends_List_Table with the ID
    result({ kind: "not_found" }, null);
  });
};
Users_Table.getAll = (First_Name, result) => {
  let query = "SELECT * FROM Users_Table";
  if (First_Name) {
    query += ` WHERE First_Name LIKE '%${First_Name}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users_Table: ", res);
    result(null, res);
  });
};
Users_Table.getAllPublished = result => {
  sql.query("SELECT * FROM Users_Table WHERE ID=1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users_Table: ", res);
    result(null, res);
  });
};
Users_Table.updateByID = (ID, Users_Table, result) => {
  sql.query(
    "UPDATE Users_Table SET First_Name = ?, Last_Name = ?, created_at = ?, updated_at = ?, Firebase_id = ? WHERE ID = ?",
    [Users_Table.First_Name, Users_Table.Last_Name, Users_Table.created_at, Users_Table.updated_at, Users_Table.Firebase_id, ID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Friends_List_Table with the ID
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Firebase_id: ", { ID: ID, ...Firebase_id });
      result(null, { ID: ID, ...Firebase_id });
    }
  );
};
Users_Table.remove = (ID, result) => {
  sql.query("DELETE FROM Firebase_id WHERE ID = ?", ID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
        // not found Users_Table with the ID
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Deleted Firebase_id with ID: ", ID);
      result(null, res);
    });
  };
  Users_Table.removeAll = result => {
    sql.query("DELETE FROM Firebase_id", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log(`deleted ${res.affectedRows} Firebase_id`);
      result(null, res);
    });
  };
  module.exports = Tutorial;