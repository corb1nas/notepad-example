var dbName = "notepad";
var postfix = "_";
var dbNamePrefix = dbName + postfix;

var dbConfig = {
    "development": {
        "username": "root",
        "password": null,
        "database": dbNamePrefix + "development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": dbNamePrefix + "test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "staging": {
        "username": "root",
        "password": null,
        "database": dbNamePrefix + "staging",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": dbNamePrefix + "production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
