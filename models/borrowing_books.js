'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrowing_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  borrowing_books.init({
    member_id : DataTypes.INTEGER,
    book_id   : DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date  : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'borrowing_books',
  });
  return borrowing_books;
};