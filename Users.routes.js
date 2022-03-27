module.exports = app => {
    const Users_Table = require("../controllers/Users_Table_Table.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Users_Table.create);
    // Retrieve all Tutorials
    router.get("/", Users_Table.findAll);
    // Retrieve all published Tutorials
    router.get("/published", Users_Table.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Users_Table.findOne);
    // Update a Tutorial with id
    router.put("/:id", Users_Table.update);
    // Delete a Tutorial with id
    router.delete("/:id", Users_Table.delete);
    // Delete all Tutorials
    router.delete("/", Users_Table_Table.deleteAll);
    app.use('/api/Users_Table', router);
  };