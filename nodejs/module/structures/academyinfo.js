var constants = require("../constants");

var TABLE = constants.TABLE;

var AcademyInfo = {

    PK_ACADEMY_ID : "pk_AcademyId",

    FK_SCHOOL_ID : "fk_SchoolId",
    IDX_ACADEMY_NAME : "idx_AcademyName",
};
AcademyInfo.createTableSQL = "create table " + TABLE.ACADEMY_INFO + "(" +
        AcademyInfo.PK_ACADEMY_ID + " integer primary key autoincrement," +
        AcademyInfo.FK_SCHOOL_ID  + " integer," +
        AcademyInfo.IDX_ACADEMY_NAME + " text)";

module.exports = AcademyInfo;
