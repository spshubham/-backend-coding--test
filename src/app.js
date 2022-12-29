'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const rides = require("./controller/rides");
let utils = require("../utils/writer")

module.exports = (db) => {
    app.get('/health', (req, res) => res.send('Healthy'));

    app.post('/rides', jsonParser, function (req, res, next) {
        rides.createRides(req, res, db, next)
        
          .catch(function (response) {
            utils.writeJson(res, response);
          });
      });

    app.get('/rides', jsonParser, function (req, res, next) {
        rides.getRides(req, res, db, next)
        
          .catch(function (response) {
            utils.writeJson(res, response);
          });
      });  
    
    app.get('/rides/:id', jsonParser, function (req, res, next) {
        rides.getRidesById(req, res, db, next)
          .catch(function (response) {
            utils.writeJson(res, response);
          });
      });   

    return app;
};
