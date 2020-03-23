'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY
  }, {});

  Actor.associate = function(models) {
   Actor.belongsToMany(models.Movie, {
      through: 'MovieActor'
    });

    Actor.hasMany(models.MovieActor);
    
    Actor.belongsTo(models.Country, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })

    Actor.belongsTo(models.Gender, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Actor;
};