const sql = require("./db.js");
// constructor
const Friends_List_Table = function(Friends_List_Table) {
  this.ID = Friends_List_Table.ID;
  this.First_Name = Friends_List_Table.First_Name;
  this.Last_Name = Friends_List_Table.Last_Name;
  this.Email = Friends_List_Table.Email;
  this.added_at = Friends_List_Table.added_at;
  this.Firebase_id = Friends_List_Table.Firebase_id;
};
Friends_List_Table.create = (newFriends_List_Table, result) => {
  sql.query("INSERT INTO Friends_List_Table SET ?", newFriends_List_Table, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Friends_List_Table: ", { ID: res.insertID, ...newFriends_List_Table });
    result(null, { ID: res.insertID, ...newFriends_List_Table });
  });
};
Friends_List_Table.findByID = (ID, result) => {
  sql.query(`SELECT * FROM Friends_List_Table WHERE ID = ${ID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Friends_List_Table: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Friends_List_Table with the ID
    result({ kind: "not_found" }, null);
  });
};
Friends_List_Table.getAll = (First_Name, result) => {
  let query = "SELECT * FROM Friends_List_Table";
  if (First_Name) {
    query += ` WHERE First_Name LIKE '%${First_Name}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Friends_List_Table: ", res);
    result(null, res);
  });
};
Friends_List_Table.getAllPublished = result => {
  sql.query("SELECT * FROM Friends_List_Table WHERE ID=1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Friends_List_Table: ", res);
    result(null, res);
  });
};
Friends_List_Table.updateByID = (ID, Friends_List_Table, result) => {
  sql.query(
    "UPDATE Friends_List_Table SET First_Name = ?, Last_Name = ?, added_at = ?, Firebase_id = ? WHERE ID = ?",
    [Friends_List_Table.First_Name, Friends_List_Table.Last_Name, Friends_List_Table.added_at,Friends_List_Table.Firebase_id, ID],
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
Friends_List_Table.remove = (ID, result) => {
  sql.query("DELETE FROM Firebase_id WHERE ID = ?", ID, (err, res) => {
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
      console.log("Deleted Firebase_id with ID: ", ID);
      result(null, res);
    });
  };
  Friends_List_Table.removeAll = result => {
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