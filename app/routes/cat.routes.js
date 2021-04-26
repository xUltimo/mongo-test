module.exports = (app) => {
    const cat = require('../controllers/cat.controller.js');

    // Create a new Cat
    app.post('/cat', cat.create);

    // Retrieve all Cats
    app.get('/cat', cat.findAll);

    //Count
    router.get('/cat/count', cat.count);

    // Retrieve a single Cat with catId
    app.get('/cat/:catId', cat.findOne);

    // Update a Cat with catId
    app.put('/cat/:catId', cat.update);

    // Delete a Cat with catId
    app.delete('/cat/:catId', cat.delete);


}