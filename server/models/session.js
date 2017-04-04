module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    cookieId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  });
  return Session;
};

// sequelize db:migrate to get the migration files

// CREATE TABLE "Session"(
//    cookieId CHAR(50)  PRIMARY KEY  NOT NULL,
//    createdAt  DATE  NOT NULL
// );