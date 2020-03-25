const express = require("express");

const SessionController = require('./controllers/SessionController');
const OngsController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.create);

routes.get("/profile", ProfileController.index);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;