var DBHelper = require('./dbhelper');
var constants = require("./constants");
var UserInfo = require("./structures/userinfo");

var TABLE = constants.TABLE;

function Dao() {
	var helper = new DBHelper();
	var db = helper.getDB();
	var whereClause = function(filter) {
		var keys = [];
		for (var i in filter) {
			keys.push(i);
		}
		return " where " + keys.join('=? and ') + "=?";
	};
	var whereArgs = function(filter) {
		var values = [];
		for (var i in filter) {
			values.push(filter[i]);
		}
		return values;
	};
	this.doSQL = function(request, callback) {
		var json = JSON.parse(request);
		var resCallback = function(res) {
			callback.call(this, JSON.stringify(res));
		};
		switch (json['sqlRequest']) {
			case 'select':
			this.getEntries(json['tableName'], json['filter'], resCallback); break;
			case 'insert':
			this.addEntries(json['tableName'], json['entries'], resCallback); break;
			case 'update':
			this.updateEntries(json['tableName'], json['filter'], json['entries'], resCallback); break;
			case 'delete':
			this.deleteEntries(json['tableName'], json['filter'], resCallback); break;
			default:
			callback.call(this, false);
		}
	};
	this.getEntries = function(tableName, filter, callback) {
		var response = {
			'tableName': tableName,
			'entries': []
		};
		if (filter == null || filter == {}) {
			db.all("select * from " + tableName, function(err, res) {
				response['entries'] = res;
				callback.call(this, response);
			});
		} else {
			var sql = "select * from " + tableName + whereClause(filter);
			db.all(sql, whereArgs(filter), function(err, res) {
				response['entries'] = res;
				callback.call(this, response);
			});
		}
	};
	this.addEntries = function(tableName, entries, callback) {
		if (entries == null || entries.length == 0) {
			callback.call(this, false);
		}
		db.serialize(function() {
			for (var i in entries) {
				var entry = entries[i];
				var keys = [], qs = [], values = [];
				for (var j in entry) {
					var value = entry[j];
					keys.push(j);
					qs.push('?');
					values.push(value);
				}
				var sql = "insert or ignore into " + tableName + 
				" (" + keys.join(',') + ") values (" + qs.join(',') + ")";
				db.run(sql, values);
			}
			callback.call(this, true);
		});
	};
	this.updateEntries = function(tableName, filter, entries, callback) {

	};
	this.deleteEntries = function(tableName, filter, callback) {

	};
	this.execSQL = function(sql, callback) {
		db.run(sql, function(err, res) {
			callback.call(this, res);
		});
	};
	this.closeDB = function() {
		helper.closeDB();
	};
}

module.exports = Dao;
/*var abc = new Dao();
abc.doSQL(JSON.stringify({
	'sqlRequest': 'insert',
	'tableName': TABLE.USER_INFO,
	'entries': [
		{'idx_ShareCourse': 1},
		{'idx_Password': 'pass2'}
	]
}));
abc.doSQL(JSON.stringify({
	'sqlRequest': 'select',
	'tableName': TABLE.USER_INFO,
	'filter': {'idx_Password': 'pass2'}
}));
abc.closeDB();*/