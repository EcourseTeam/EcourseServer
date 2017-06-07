var constants = require("../constants");

var TABLE = constants.TABLE;

var TeacherInfo = {

    PK_TEACHER_ID                    : "pk_TeacherId",

    FK_ACADEMY_ID                    : "fk_AcademyId",
    IDX_TEACHER_NAME                 : "idx_TeacherName",
    IDX_OFFICE_PHONE                 : "idx_OfficePhone",
    IDX_CELL_PHONE                   : "idx_CellPhone",
    IDX_EMAIL                        : "idx_Email",
};
TeacherInfo.createTableSQL = "create table " + TABLE.TEACHER_INFO + "(" +
        TeacherInfo.PK_TEACHER_ID    + " integer primary key autoincrement," +
        TeacherInfo.FK_ACADEMY_ID    + " integer," +
        TeacherInfo.IDX_TEACHER_NAME + " text," +
        TeacherInfo.IDX_OFFICE_PHONE + " varchar(16)," +
        TeacherInfo.IDX_CELL_PHONE   + " varchar(16)," +
        TeacherInfo.IDX_EMAIL        + " varchar(64))";

module.exports = TeacherInfo;
