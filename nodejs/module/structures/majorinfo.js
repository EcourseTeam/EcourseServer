var constants = require("../constants");

var TABLE = constants.TABLE;

var MajorInfo = {

    PK_MAJOR_ID                      : "pk_MajorId",

    FK_ACADEMY_ID                    : "fk_AcademyId",
    IDX_MAJOR_NAME                   : "idx_MajorName",
    IDX_EDUCATION                    : "idx_Education",
    IDX_SEMESTER                     : "idx_Semester",
    IDX_WEEK                         : "idx_Week",
};
MajorInfo.createTableSQL = "create table " + TABLE.MAJOR_INFO + "(" +
        MajorInfo.PK_MAJOR_ID   + " integer primary key autoincrement," +
        MajorInfo.FK_ACADEMY_ID + " integer," +
        MajorInfo.IDX_MAJOR_NAME+ " text," +
        MajorInfo.IDX_EDUCATION + " text," +
        MajorInfo.IDX_SEMESTER  + " int," +
        MajorInfo.IDX_WEEK      + " int)";
module.exports = MajorInfo;
