/* jshint indent: 2 */

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
  } = app.Sequelize;
  const jreal_update_1 = app.model.define('jreal_update_1', {   
    jsig: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    jdodata: {
      type: INTEGER,
      allowNull: true
    },
    juser_id: {
      type:INTEGER,
      allowNull: true
    },
    jdata_str: {
      type:STRING,
      allowNull: true
    },
    jdev_id: {
      type:INTEGER,
      allowNull: true
    },
    jdev_bh: {
      type:STRING,
      allowNull: true
    },
    jext_type: {
      type:INTEGER,
      allowNull: true
    },
    jtime: {
      type:DATE,
      allowNull: true
    },
    joperator: {
      type:STRING,
      allowNull: true
    },
    jip_addr: {
      type:STRING,
      allowNull: true
    },
  }, {
      tableName: 'jreal_update_1',
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,//去除createAt updateAt
    });
  return jreal_update_1;
};
