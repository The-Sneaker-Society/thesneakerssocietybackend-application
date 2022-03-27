module.exports = app => {
    const Friends_List_Table = require("../controllers/Friends_List_Table.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Friends_List_Table.create);
    // Retrieve all Tutorials
    router.get("/", Friends_List_Table.findAll);
    // Retrieve all published Tutorials
    router.get("/published", Friends_List_Table.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Friends_List_Table.findOne);
    // Update a Tutorial with id
    router.put("/:id", Friends_List_Table.update);
    // Delete a Tutorial with id
    router.delete("/:id", Friends_List_Table.delete);
    // Delete all Tutorials
    router.delete("/", Friends_List_Table.deleteAll);
    app.use('/api/Friends_List_Table', router);
  };