var constants = require("../constants");

var TABLE = constants.TABLE;

var CourseTableEntryInfo = {

    PK_COURSE_TABLE_ENTRY_ID         : "pk_CourseTableEntryId",

    FK_COURSE_TABLE_ID               : "fk_CourseTableId",
    FK_COURSE_PERIOD_ID              : "fk_CoursePeriodId",
};
CourseTableEntryInfo.createTableSQL = "create table " + TABLE.COURSE_TABLE_ENTRY_INFO + "(" +
        CourseTableEntryInfo.PK_COURSE_TABLE_ENTRY_ID + " integer primary key autoincrement," +
        CourseTableEntryInfo.FK_COURSE_TABLE_ID       + " integer," +
        CourseTableEntryInfo.FK_COURSE_PERIOD_ID      + " integer)";

module.exports = CourseTableEntryInfo;
