var constants = require("../constants");

var TABLE = constants.TABLE;

var SchoolInfo = {

    PK_SCHOOL_ID                     : "pk_SchoolId",

    UK_SCHOOL_NAME                   : "uk_SchoolName",
};
SchoolInfo.createTableSQL = "create table " + TABLE.SCHOOL_INFO + "(" +
        SchoolInfo.PK_SCHOOL_ID         + " integer primary key autoincrement," +
        SchoolInfo.UK_SCHOOL_NAME       + " text)";

module.exports = SchoolInfo;
