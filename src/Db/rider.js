let response = require("../../utils/writer").respondWithCode;

exports.createRider = async function (db, req,res) {
    var values = [req.body.start_lat, req.body.start_long, req.body.end_lat, req.body.end_long, req.body.rider_name, req.body.driver_name, req.body.driver_vehicle];
    const result = db.run('INSERT INTO Rides(startLat, startLong, endLat, endLong, riderName, driverName, driverVehicle) VALUES (?, ?, ?, ?, ?, ?, ?)', values, function (err) {
        if (err) {
            return response(500,{
                error_code: 'SERVER_ERROR',
                message: 'Unknown error'
            });
        }
    
        db.all('SELECT * FROM Rides WHERE rideID = ?', this.lastID, function (err, rows) {
            if (err) {
                return response(500,{
                    error_code: 'SERVER_ERROR',
                    message: 'Unknown error'
                });
            }
            res.send(rows[0]);
        });
    });
}

exports.getRider = async function (db,res) {
    db.all('SELECT * FROM Rides', function (err, rows) {
        if (err) {
            return res.send({
                error_code: 'SERVER_ERROR',
                message: 'Unknown error'
            });
        }

        if (rows.length === 0) {
            return res.send({
                error_code: 'RIDES_NOT_FOUND_ERROR',
                message: 'Could not find any rides'
            });
        }

        res.send(rows);
    });
}

exports.getRiderById = async function (db,req, res) {
    console.log(req.params.id);
    db.all(`SELECT * FROM Rides WHERE rideID='${req.params.id}'`, function (err, rows) {
        if (err) {
            return res.send({
                error_code: 'SERVER_ERROR',
                message: 'Unknown error'
            });
        }

        if (rows.length === 0) {
            return res.send({
                error_code: 'RIDES_NOT_FOUND_ERROR',
                message: 'Could not find any rides'
            });
        }

        res.send(rows);
    });
}