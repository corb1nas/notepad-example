"use strict";

module.exports = function (sequelize, DataTypes) {

    var task = {
        title: DataTypes.STRING
    };

    var taskRelations = {
        classMethods: {
            associate: function (models) {
                Task.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    };

    var Task = sequelize.define("Task", task, taskRelations);

    return Task;
};