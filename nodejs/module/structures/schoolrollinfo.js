var constants = require("../constants");

var TABLE = constants.TABLE;

var SchoolRollInfo = {

    PK_SCHOOL_ROLL_ID : "pk_SchoolRollId",
    FK_SCHOOL_ID : "fk_SchoolId",
    FK_MAJOR_ID : "fk_MajorId",
};
SchoolRollInfo.createTableSQL = "create table " + TABLE.SCHOOL_ROLL_INFO + "(" +
        SchoolRollInfo.PK_SCHOOL_ROLL_ID + " integer primary key autoincrement," +
        SchoolRollInfo.FK_SCHOOL_ID  + " integer," +
        SchoolRollInfo.FK_MAJOR_ID + " integer)";

module.exports = SchoolRollInfo;
