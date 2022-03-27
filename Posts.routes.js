module.exports = app => {
    const Posts_Table = require("../controllers/Posts_Table.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Posts_Table.create);
    // Retrieve all Tutorials
    router.get("/", Posts_Table.findAll);
    // Retrieve all published Tutorials
    router.get("/published", Posts_Table.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Posts_Table.findOne);
    // Update a Tutorial with id
    router.put("/:id", Posts_Table.update);
    // Delete a Tutorial with id
    router.delete("/:id", Posts_Table.delete);
    // Delete all Tutorials
    router.delete("/", Posts_Table.deleteAll);
    app.use('/api/Posts_Table', router);
  };