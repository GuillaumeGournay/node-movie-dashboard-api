'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define('Gender', {
    gender: DataTypes.STRING
  }, {});

  Gender.associate = function(models) {
    Gender.hasMany(models.Actor);
  };

  return Gender;
};