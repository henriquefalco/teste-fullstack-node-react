module.exports = server => {
    const vehicle = require('./controllers/vehicleController')
    var router = require("express").Router();

    // Create a new vehicle
    router.post("/", vehicle.create);

    // Retrieve all vehicles
    router.get("/find", vehicle.findAll);

    // Update vehicle by id
    router.put("/:id", vehicle.updateVehicle);

    // Create 10 vehicles to test application
    router.post("/createDumyBase", vehicle.createDumyData)

    server.use('/veiculos', router);
};