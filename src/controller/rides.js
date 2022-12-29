const validate = require("../../utils/validations")
const riderDb = require("../Db/rider");

module.exports.createRides = async function (req, res, db) {
    try {
        let results = await validate.validateReqBody(req);

        if (results && results.code == 400)
            return results;
        let resp = await riderDb.createRider(db, req, res)

        return resp;
    } catch (error) {
        throw error
    }

}

module.exports.getRides = async function (req, res, db) {
    try {
        let resp = riderDb.getRider(db, res)
        return resp;
    } catch (e) {
        throw error;
    }
}

module.exports.getRidesById = async function (req, res, db) {
    try {
        let resp = await riderDb.getRiderById(db, req, res)
        return resp;
    } catch (e) {
        throw error;
    }
}