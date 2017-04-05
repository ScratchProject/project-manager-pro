module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    cookieId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: 0,
    }
  });
  return Session;
};
