'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    note: {type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  }
  }, {});

  Note.associate = function(models) {
    Note.belongsTo(models.Movie, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
      allowNull: false
      }
    });
  };

  return Note;
};