var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

var structure = require("./structure");
var constants = require("./constants");

var DB_DIR = "../databases/Ecourse.db";
var VERSION = "1.0";
var Struct = structure;
var TABLE = constants.TABLE;

module.exports = DBHelper;

function DBHelper() {
    //fs.unlinkSync(DB_DIR);
    var exists = fs.existsSync(DB_DIR);
    if (!exists) {
        console.log("Creating DB file.");
        fs.openSync(DB_DIR, "w");
    }
    var db = new sqlite3.Database(DB_DIR);
    if (!exists) {
        Struct.createTables(db);
    }
    this.getDB = function() {
        return db;
    };
    this.closeDB = function() {
        db.close();
    }
}