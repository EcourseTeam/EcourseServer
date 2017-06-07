var constants = require("../constants");

var TABLE = constants.TABLE;

var UserInfo = {
	PK_USER_ID                       : "pk_UserId",
	UK_USERNAME                      : "uk_Username",
	IDX_NICKNAME                     : "idx_Nickname",
	IDX_PASSWORD                     : "idx_Password",
	IDX_EMAIL                        : "idx_Email",
	FK_SCHOOL_ROLL_ID                : "fk_SchoolRollId",
	IDX_STUDENT_NUMBER               : "idx_StudentNumber",
	IDX_SHARE_COURSE                 : "idx_ShareCourse",
	IDX_PERMISSION                   : "idx_Permission"
};

UserInfo.createTableSQL = "create table " + TABLE.USER_INFO + "(" +
        UserInfo.PK_USER_ID         + " integer primary key autoincrement," +
        UserInfo.UK_USERNAME        + " varchar(32)," +
        UserInfo.IDX_NICKNAME       + " text," +
        UserInfo.IDX_PASSWORD       + " varchar(32)," +
        UserInfo.IDX_EMAIL          + " varchar(64)," +
        UserInfo.FK_SCHOOL_ROLL_ID  + " integer," +
        UserInfo.IDX_STUDENT_NUMBER + " varchar(32)," +
        UserInfo.IDX_SHARE_COURSE   + " int," +
        UserInfo.IDX_PERMISSION     + " int)";

module.exports = UserInfo;