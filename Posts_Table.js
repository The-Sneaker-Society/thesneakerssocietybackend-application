const sql = require("./db.js");
// constructor
const Posts_Table = function(Posts_Table) {
  this.ID = Posts_Table.ID;
  this.author = Posts_Table.author;
  this.text = Posts_Table.text;
  this.liked_by = Posts_Table.liked_by;
  this.likes = Posts_Table.likes;
  this.created_at = Posts_Table.created_at;
  this.updated_at = Posts_Table.updated_at;
  this.Firebase_id = Posts_Table.Firebase_id;
};
Posts_Table.create = (newPosts_Table, result) => {
  sql.query("INSERT INTO Posts_Table SET ?", newPosts_Table, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Posts_Table: ", { ID: res.insertID, ...newPosts_Table });
    result(null, { ID: res.insertID, ...newPosts_Table });
  });
};
Posts_Table.findByID = (ID, result) => {
  sql.query(`SELECT * FROM Posts_Table WHERE ID = ${ID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Posts_Table: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Friends_List_Table with the ID
    result({ kind: "not_found" }, null);
  });
};
Posts_Table.getAll = (First_Name, result) => {
  let query = "SELECT * FROM Posts_Table";
  if (First_Name) {
    query += ` WHERE First_Name LIKE '%${First_Name}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Posts_Table: ", res);
    result(null, res);
  });
};
Posts_Table.getAllPublished = result => {
  sql.query("SELECT * FROM Posts_Table WHERE ID=1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Posts_Table: ", res);
    result(null, res);
  });
};
Posts_Table.updateByID = (ID, Posts_Table, result) => {
  sql.query(
    "UPDATE Posts_Table SET First_Name = ?, Last_Name = ?, created_at = ?, updated_at = ?, Firebase_id = ? WHERE ID = ?",
    [Posts_Table.First_Name, Posts_Table.Last_Name, Posts_Table.created_at, Posts_Table.Firebase_id, ID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Posts_Table with the ID
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Firebase_id: ", { ID: ID, ...Firebase_id });
      result(null, { ID: ID, ...Firebase_id });
    }
  );
};
Posts_Table.remove = (ID, result) => {
  sql.query("DELETE FROM Firebase_id WHERE ID = ?", ID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
        // not found Posts_Table with the ID
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Deleted Firebase_id with ID: ", ID);
      result(null, res);
    });
  };
  Posts_Table.removeAll = result => {
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