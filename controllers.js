const Friends_List_Table = require("../models/Friends_List_Table.js");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Friends_List_Table
  const Friends_List_Table = new Friends_List_Table({
    ID: req.body.ID,
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Email: req.body.Email,
    added_at: req.body.added_at, 
    Firebase_id: req.body.Firebase_id || false
  });
  // Save Friends_List_Table in the database
  Friends_List_Table.create(Friends_List_Table, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Friends_List_Table."
      });
    else res.send(data);
  });
};
// Retrieve all Friends_List_Table from the database (with condition).
exports.findAll = (req, res) => {
    const First_Name = req.query.First_Name;
    Friends_List_Table.getAll(First_Name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Friends_List_Table."
        });
      else res.send(data);
    });
  };
  exports.findAllPublished = (req, res) => {
    Friends_List_Table.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Friends_List_Table."
        });
      else res.send(data);
    });
};
// Find a single Friends_List_Table with a ID
exports.findOne = (req, res) => {
  Friends_List_Table.findById(req.params.ID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Friends_List_Table with ID ${req.params.ID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Friends_List_Table with ID " + req.params.ID
            });
          }
        } else res.send(data);
      });
};
// find all published Friends_List_Table
exports.findAllPublished = (req, res) => {
    exports.update = (req, res) => {
        // Validate Request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
        console.log(req.body);
        Friends_List_Table.updateById(
          req.params.ID,
          new Friends_List_Table(req.body),
          (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Tutorial with id ${req.params.ID}.`
                });
              } else {
                res.status(500).send({
                  message: "Error updating Tutorial with id " + req.params.ID
                });
              }
            } else res.send(data);
          }
          );
};
// Update a Friends_List_Table identified by the ID in the request
exports.update = (req, res) => {
    exports.delete = (req, res) => {
      Friends_List_Table.remove(req.params.ID, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Friends_List_Table with ID ${req.params.ID}.`
              });
            } else {
              res.status(500).send({
                message: "Could not delete Friends_List_Table with ID " + req.params.ID
              });
            }
          } else res.send({ message: `Friends_List_Table was deleted successfully!` });
        });
      };
};
// Delete a Friends_List_Table with the specified ID in the request
exports.delete = (req, res) => {
  Friends_List_Table.remove(req.params.ID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Friends_List_Table with ID ${req.params.ID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Friends_List_Table with ID " + req.params.ID
            });
          }
        } else res.send({ message: `Friends_List_Table was deleted successfully!` });
      });
// Delete all Friends_List_Table from the database.
exports.deleteAll = (req, res) => {
  Friends_List_Table.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Friends_List_Table."
          });
        else res.send({ message: `All Friends_List_Table were deleted successfully!` });
      });
    }; 
}; 
}; 
