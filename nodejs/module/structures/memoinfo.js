var constants = require("../constants");

var TABLE = constants.TABLE;

var MemoInfo = {

    PK_MEMO_ID                       : "pk_MemoId",

    FK_USER_ID                       : "fk_UserId",
    FK_COURSE_ID                     : "fk_CourseId",
    IDX_DEADLINE                     : "idx_Deadline",
    IDX_CONTENT                      : "idx_Content",
};
MemoInfo.createTableSQL = "create table " + TABLE.MEMO_INFO + "(" +
        MemoInfo.PK_MEMO_ID   + " integer primary key autoincrement," +
        MemoInfo.FK_USER_ID   + " integer," +
        MemoInfo.FK_COURSE_ID + " integer," +
        MemoInfo.IDX_DEADLINE + " integer," +
        MemoInfo.IDX_CONTENT  + " text)";


module.exports = MemoInfo;
