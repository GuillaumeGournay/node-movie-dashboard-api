'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    director: DataTypes.STRING
  }, {});

  Movie.associate = function(models) {
    Movie.belongsToMany(models.Actor, {
      through: 'MovieActor'
    });

    Movie.hasMany(models.MovieActor);
    Movie.hasMany(models.Note);

    Movie.belongsTo(models.Category, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Movie;
};