var constants = require("../constants");

var TABLE = constants.TABLE;

var CourseInfo = {

    PK_COURSE_ID                     : "pk_CourseId",

    FK_ACADEMY_ID                    : "fk_AcademyId",
    IDX_COURSE_NAME                  : "idx_CourseName",
    IDX_COURSE_SHORT_NAME            : "idx_CourseShortName",
    IDX_COURSE_NUMBER                : "idx_CourseNumber",
    FK_TEACHER_ID                    : "fk_TeacherId",
    IDX_SEMESTER                     : "idx_Semester",
    IDX_COURSE_HOURS                 : "idx_CourseHours",
    IDX_MATERIALS                    : "idx_Materials",
};
CourseInfo.createTableSQL = "create table " + TABLE.COURSE_INFO + "(" +
    CourseInfo.PK_COURSE_ID          + " integer primary key autoincrement," +
    CourseInfo.FK_ACADEMY_ID         + " integer," +
    CourseInfo.IDX_COURSE_NAME       + " text," +
    CourseInfo.IDX_COURSE_SHORT_NAME + " text," +
    CourseInfo.IDX_COURSE_NUMBER     + " varchar(32)," +
    CourseInfo.FK_TEACHER_ID         + " integer," +
    CourseInfo.IDX_SEMESTER          + " int," +
    CourseInfo.IDX_COURSE_HOURS      + " int," +
    CourseInfo.IDX_MATERIALS         + " text)";

module.exports = CourseInfo;
