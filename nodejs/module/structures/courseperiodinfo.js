var constants = require("../constants");

var TABLE = constants.TABLE;

var CoursePeriodInfo = {

    PK_COURSE_PERIOD_ID              : "pk_CoursePeriodId",

    FK_COURSE_ID                     : "fk_CourseId",
    IDX_WEEK_FROM                    : "idx_WeekFrom",
    IDX_WEEK_TO                      : "idx_WeekTo",
    IDX_WEEK                         : "idx_Week",
    IDX_TIME_FROM                    : "idx_TimeFrom",
    IDX_TIME_TO                      : "idx_TimeTo",
    IDX_ALARM                        : "idx_Alarm",
    IDX_PLACE                        : "idx_Place",
};
CoursePeriodInfo.createTableSQL = "create table " + TABLE.COURSE_PERIOD_INFO + "(" +
        CoursePeriodInfo.PK_COURSE_PERIOD_ID + " integer primary key autoincrement," +
        CoursePeriodInfo.FK_COURSE_ID  + " integer," +
        CoursePeriodInfo.IDX_WEEK_FROM + " int," +
        CoursePeriodInfo.IDX_WEEK_TO   + " int," +
        CoursePeriodInfo.IDX_WEEK      + " int," +
        CoursePeriodInfo.IDX_TIME_FROM + " int," +
        CoursePeriodInfo.IDX_TIME_TO   + " int," +
        CoursePeriodInfo.IDX_ALARM     + " int," +
        CoursePeriodInfo.IDX_PLACE     + " text)";


module.exports = CoursePeriodInfo;