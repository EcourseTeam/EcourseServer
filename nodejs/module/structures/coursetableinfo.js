var constants = require("../constants");

var TABLE = constants.TABLE;

var CourseTableInfo = {

    PK_COURSE_TABLE_ID               : "pk_CourseTableId",

    FK_USER_ID                       : "fk_UserId",
    IDX_COURSE_TABLE_NAME            : "idx_CourseTableName",
};
CourseTableInfo.createTableSQL = "create table " + TABLE.COURSE_TABLE_INFO + "(" +
        CourseTableInfo.PK_COURSE_TABLE_ID    + " integer primary key autoincrement," +
        CourseTableInfo.FK_USER_ID            + " integer," +
        CourseTableInfo.IDX_COURSE_TABLE_NAME + " text)";


module.exports = CourseTableInfo;