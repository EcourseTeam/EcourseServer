var constants = require("./constants");
var userinfo = require("./structures/userinfo");
var academyinfo = require("./structures/academyinfo");
var courseinfo = require("./structures/courseinfo");
var courseperiodinfo = require("./structures/courseperiodinfo");
var coursetableentryinfo = require("./structures/coursetableentryinfo");
var coursetableinfo = require("./structures/coursetableinfo");
var majorinfo = require("./structures/majorinfo");
var memoinfo = require("./structures/memoinfo");
var schoolinfo = require("./structures/schoolinfo");
var schoolrollinfo = require("./structures/schoolrollinfo");
var teacherinfo = require("./structures/teacherinfo");

var TABLE = constants.TABLE;

var Structure = {};

Structure.createTables = function(db) {
	db.serialize(function() {
        db.run(userinfo.createTableSQL);
        db.run(academyinfo.createTableSQL);
        db.run(courseinfo.createTableSQL);
        db.run(courseperiodinfo.createTableSQL);
        db.run(coursetableentryinfo.createTableSQL);
        db.run(coursetableinfo.createTableSQL);
        db.run(majorinfo.createTableSQL);
        db.run(memoinfo.createTableSQL);
        db.run(schoolinfo.createTableSQL);
        db.run(schoolrollinfo.createTableSQL);
        db.run(teacherinfo.createTableSQL);
    });
};

module.exports = Structure;