
//Import MySQL connection.
var connection = require("./connection.js");



//functions to store into the database
var orm = {
    all: function (table, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cd(result);
        });
    },
    create: function (table, col, val, cb) {
        var queryString = "INSTERT INTO " + table + ";";
        
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUE (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;