"use strict";

module.exports = function (sequalize, DataTypes) {

    var user = {
        username: DataTypes.STRING
    };

    var userRelations = {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Task)
            }
        }
    };

    var User = sequalize.define("User", user, userRelations);

    return User
};