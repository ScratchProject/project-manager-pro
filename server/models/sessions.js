'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sessions = sequelize.define('Sessions', {
    cookieId: DataTypes.STRING,
    createdAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sessions;
};